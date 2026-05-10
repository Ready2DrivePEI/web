import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/database.types";

type LoginPayload = {
  fullName?: string;
  password?: string;
};

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SERVICE_ROLE ??
    process.env.SUPABASE_SECRET_KEY ??
    process.env.SUPABASE_KEY;

  if (!supabaseUrl || !serviceRoleKey || !supabaseAnonKey) {
    return NextResponse.json(
      { error: "Login service is not configured." },
      { status: 500 },
    );
  }

  let payload: LoginPayload;
  try {
    payload = (await request.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const fullName = String(payload.fullName ?? "").trim();
  const password = String(payload.password ?? "");

  if (!fullName || !password) {
    return NextResponse.json(
      { error: "Please enter both your name and password." },
      { status: 400 },
    );
  }

  // 1. Look up the profile by full_name to get user_id
  const adminSupabase = createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: profile, error: profileError } = await adminSupabase
    .from("profiles")
    .select("user_id, full_name, role, status, expires_at, id")
    .eq("full_name", fullName)
    .maybeSingle();

  if (profileError) {
    console.error("[auth/login] profile lookup failed:", profileError.message);
    return NextResponse.json(
      { error: "Could not look up account. Please try again." },
      { status: 500 },
    );
  }

  if (!profile || !profile.user_id) {
    return NextResponse.json(
      { error: "No account found with that name. Check your spelling and try again." },
      { status: 401 },
    );
  }

  // 2. Get the real email from Supabase Auth using admin API
  const { data: authUser, error: authUserError } =
    await adminSupabase.auth.admin.getUserById(profile.user_id);

  if (authUserError || !authUser?.user?.email) {
    console.error("[auth/login] auth user lookup failed:", authUserError?.message);
    return NextResponse.json(
      { error: "Account configuration issue. Contact admin." },
      { status: 500 },
    );
  }

  const email = authUser.user.email;

  // 3. Sign in with email + password using a regular (anon) client
  const anonSupabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: signInData, error: signInError } =
    await anonSupabase.auth.signInWithPassword({ email, password });

  if (signInError || !signInData.session) {
    const message = signInError?.message?.toLowerCase() ?? "";
    if (message.includes("invalid login credentials")) {
      return NextResponse.json(
        { error: "Incorrect password. Please try again." },
        { status: 401 },
      );
    }
    return NextResponse.json(
      { error: signInError?.message || "Could not sign in. Please try again." },
      { status: 401 },
    );
  }

  // 4. Return session tokens + profile info so the client can set the session
  return NextResponse.json(
    {
      access_token: signInData.session.access_token,
      refresh_token: signInData.session.refresh_token,
      profile: {
        id: profile.id,
        role: profile.role,
        full_name: profile.full_name,
        status: profile.status,
        expires_at: profile.expires_at,
      },
    },
    { status: 200 },
  );
}
