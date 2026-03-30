import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/database.types";

type CreateStudentPayload = {
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  status?: string;
  accessStart?: string;
  accessEnd?: string;
};

const DAY_MS = 24 * 60 * 60 * 1000;

function normalizeDateInput(value: string): string | null {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString().slice(0, 10);
}

function addDays(dateString: string, days: number): string {
  const date = new Date(`${dateString}T00:00:00.000Z`);
  return new Date(date.getTime() + days * DAY_MS).toISOString().slice(0, 10);
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SERVICE_ROLE ??
    process.env.SUPABASE_SECRET_KEY ??
    process.env.SUPABASE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    const missing: string[] = [];
    if (!supabaseUrl) missing.push("NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL)");
    if (!serviceRoleKey) {
      missing.push(
        "SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SECRET_KEY / SUPABASE_KEY / SUPABASE_SERVICE_ROLE)",
      );
    }

    return NextResponse.json(
      {
        error: `Server auth configuration missing: ${missing.join(", ")}.`,
      },
      { status: 500 },
    );
  }

  let payload: CreateStudentPayload;
  try {
    payload = (await request.json()) as CreateStudentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = String(payload.email ?? "").trim().toLowerCase();
  const password = String(payload.password ?? "");
  const fullName = String(payload.fullName ?? "").trim();
  const role = payload.role === "admin" ? "admin" : "student";
  const status =
    payload.status === "paused" || payload.status === "expired" ? payload.status : "active";

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (!password || password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const accessStart = payload.accessStart ? normalizeDateInput(payload.accessStart) : today;
  if (!accessStart) {
    return NextResponse.json({ error: "Access start date is invalid." }, { status: 400 });
  }

  const accessEndInput = payload.accessEnd ? normalizeDateInput(payload.accessEnd) : null;
  const accessEnd = accessEndInput ?? addDays(accessStart, 90);
  if (new Date(`${accessEnd}T00:00:00.000Z`) < new Date(`${accessStart}T00:00:00.000Z`)) {
    return NextResponse.json(
      { error: "Access end date cannot be earlier than access start date." },
      { status: 400 },
    );
  }

  const adminSupabase = createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: authData, error: authError } = await adminSupabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: fullName ? { full_name: fullName } : undefined,
  });

  if (authError || !authData.user) {
    const message = authError?.message?.toLowerCase() ?? "";
    const friendlyError = message.includes("already been registered")
      ? "A user with this email already exists in Supabase Auth."
      : message.includes("not allowed") || message.includes("insufficient")
        ? "Supabase key is not privileged. Use service role/secret key, not publishable/anon key."
      : authError?.message || "Could not create auth user.";
    return NextResponse.json({ error: friendlyError }, { status: 400 });
  }

  const userId = authData.user.id;

  const profilePayload: Database["public"]["Tables"]["profiles"]["Insert"] = {
    created_at: `${accessStart}T00:00:00.000Z`,
    user_id: userId,
    email,
    password: "__managed_by_supabase_auth__",
    role,
    status,
    expires_at: accessEnd,
  };

  const { error: insertError } = await adminSupabase.from("profiles").insert(profilePayload);

  if (insertError) {
    const { error: updateError } = await adminSupabase
      .from("profiles")
      .update(profilePayload)
      .eq("email", email);

    if (updateError) {
      await adminSupabase.auth.admin.deleteUser(userId);
      return NextResponse.json(
        { error: updateError.message || "Could not create profile row." },
        { status: 500 },
      );
    }
  }

  return NextResponse.json(
    {
      ok: true,
      userId,
      email,
      role,
      status,
      accessStart,
      accessEnd,
    },
    { status: 201 },
  );
}
