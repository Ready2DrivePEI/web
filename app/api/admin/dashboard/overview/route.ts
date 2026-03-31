import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/database.types";

type ActiveProfile = Pick<
  Database["public"]["Tables"]["profiles"]["Row"],
  "user_id" | "email" | "role" | "status" | "created_at" | "expires_at"
>;

function normalizeEnv(value: string | undefined): string | null {
  const cleaned = value?.trim();
  return cleaned ? cleaned : null;
}

function getSupabaseServerConfig() {
  const supabaseUrl = normalizeEnv(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL,
  );
  const serviceRoleKey = normalizeEnv(
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
      process.env.SUPABASE_SERVICE_ROLE ??
      process.env.SUPABASE_SECRET_KEY ??
      process.env.SUPABASE_KEY,
  );

  return { supabaseUrl, serviceRoleKey };
}

function getBearerToken(authorizationHeader: string | null): string | null {
  if (!authorizationHeader) return null;
  const [scheme, token] = authorizationHeader.split(" ");
  if (!scheme || !token || scheme.toLowerCase() !== "bearer") return null;
  return token.trim();
}

function getDisplayName(email: string, fullName?: string | null): string {
  if (fullName && fullName.trim()) return fullName.trim();
  return email.split("@")[0] ?? email;
}

async function listAllAuthUsers(adminSupabase: ReturnType<typeof createClient<Database>>) {
  const perPage = 200;
  const maxPages = 20;
  const usersById = new Map<string, string>();

  for (let page = 1; page <= maxPages; page += 1) {
    const { data, error } = await adminSupabase.auth.admin.listUsers({ page, perPage });
    if (error) {
      throw new Error(error.message);
    }

    const users = data?.users ?? [];
    if (users.length === 0) break;

    for (const user of users) {
      const metadata = user.user_metadata as { full_name?: string } | null;
      usersById.set(user.id, metadata?.full_name ?? "");
    }

    if (users.length < perPage) break;
  }

  return usersById;
}

export async function GET(request: Request) {
  const { supabaseUrl, serviceRoleKey } = getSupabaseServerConfig();

  if (!supabaseUrl || !serviceRoleKey) {
    const missing: string[] = [];
    if (!supabaseUrl) missing.push("NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL)");
    if (!serviceRoleKey) {
      missing.push(
        "SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SECRET_KEY / SUPABASE_KEY / SUPABASE_SERVICE_ROLE)",
      );
    }

    return NextResponse.json(
      { error: `Server auth configuration missing for admin dashboard: ${missing.join(", ")}.` },
      { status: 500 },
    );
  }

  const accessToken = getBearerToken(request.headers.get("authorization"));
  if (!accessToken) {
    return NextResponse.json({ error: "Missing bearer token." }, { status: 401 });
  }

  const adminSupabase = createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: callerData, error: callerError } = await adminSupabase.auth.getUser(accessToken);
  if (callerError || !callerData.user) {
    return NextResponse.json({ error: "Invalid or expired session." }, { status: 401 });
  }

  const { data: callerProfile, error: callerProfileError } = await adminSupabase
    .from("profiles")
    .select("role, status")
    .eq("user_id", callerData.user.id)
    .maybeSingle();

  if (callerProfileError || !callerProfile) {
    return NextResponse.json({ error: "Caller profile not found." }, { status: 403 });
  }

  if (callerProfile.role !== "admin" || callerProfile.status !== "active") {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const { data: activeProfilesData, error: activeProfilesError } = await adminSupabase
    .from("profiles")
    .select("user_id, email, role, status, created_at, expires_at")
    .eq("status", "active")
    .in("role", ["student", "admin"])
    .order("created_at", { ascending: false });

  if (activeProfilesError) {
    return NextResponse.json(
      { error: activeProfilesError.message || "Failed to load active profiles." },
      { status: 500 },
    );
  }

  const activeProfiles = (activeProfilesData ?? []) as ActiveProfile[];

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const nextThirtyDaysEnd = new Date(todayStart);
  nextThirtyDaysEnd.setDate(nextThirtyDaysEnd.getDate() + 30);
  nextThirtyDaysEnd.setHours(23, 59, 59, 999);

  let usersById = new Map<string, string>();
  try {
    usersById = await listAllAuthUsers(adminSupabase);
  } catch {
    usersById = new Map<string, string>();
  }

  const stats = {
    activeStudents: activeProfiles.filter((item) => item.role === "student").length,
    activeAdmins: activeProfiles.filter((item) => item.role === "admin").length,
    expiringNext30Days: activeProfiles.filter((item) => {
      if (!item.expires_at) return false;
      const expiresDate = new Date(item.expires_at);
      return expiresDate >= todayStart && expiresDate <= nextThirtyDaysEnd;
    }).length,
  };

  const users = activeProfiles.map((item) => {
    const fullName = item.user_id ? usersById.get(item.user_id) : "";

    return {
      userId: item.user_id ?? "",
      displayName: getDisplayName(item.email, fullName),
      email: item.email,
      role: item.role,
      status: item.status,
      accessStart: item.created_at,
      accessEnd: item.expires_at,
    };
  });

  return NextResponse.json({ stats, users }, { status: 200 });
}
