"use client";
import { isSupabaseConfigured, supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("r2d-remember-me") !== "false";
  });
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

 // Authenticates with Supabase Auth, then loads the linked profile
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    if (!supabase) {
      setSubmitError("Login service is not configured. Add Supabase env vars in Vercel project settings.");
      setIsSubmitting(false);
      return;
    }
   
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
      setSubmitError("Please enter both email and password.");
      setIsSubmitting(false);
      return;
    }

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      console.error("Login auth error:", authError);
      if (authError.message.toLowerCase().includes("invalid login credentials")) {
        setSubmitError(
          "No Supabase Auth user matched that email/password. Create the user in Supabase Auth first, then try again."
        );
      } else {
        setSubmitError(authError.message || "Could not sign in right now. Please try again.");
      }
      setIsSubmitting(false);
      return;
    }

    const user = authData.user ?? authData.session?.user;

    if (!user) {
      setSubmitError("Login failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("id, email, role, status, expires_at, user_id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("Profile fetch error:", profileError);
      if (profileError.message.toLowerCase().includes("row-level security")) {
        setSubmitError("Profile access is blocked by RLS policy. Check your profiles SELECT policy.");
      } else {
        setSubmitError("Signed in, but profile lookup failed.");
      }
      setIsSubmitting(false);
      return;
    }

    if (!profile) {
      setSubmitError("Signed in, but no linked profile was found. Set profiles.user_id = auth.users.id.");
      setIsSubmitting(false);
      return;
    }

    if (profile.status.toLowerCase() !== "active") {
      setSubmitError("Your account is not active. Contact admin.");
      setIsSubmitting(false);
      return;
    }

    if (profile.expires_at && new Date(profile.expires_at) < new Date()) {
      setSubmitError("Your access has expired. Contact admin.");
      setIsSubmitting(false);
      return;
    }

    if (!profile.role) {
      setSubmitError("Your account is missing a role. Contact admin.");
      setIsSubmitting(false);
      return;
    }

    form.reset();
    const authSnapshot = JSON.stringify({
      profileId: profile.id,
      role: profile.role,
      email: profile.email,
      signedInAt: new Date().toISOString(),
    });

    localStorage.setItem("r2d-remember-me", String(rememberMe));
    if (rememberMe) {
      localStorage.setItem("r2d-auth", authSnapshot);
      sessionStorage.removeItem("r2d-auth");
    } else {
      sessionStorage.setItem("r2d-auth", authSnapshot);
      localStorage.removeItem("r2d-auth");
    }
    setIsSubmitting(false);
    if (profile.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/lms-course");
    }
  };


    useEffect(() => {
      const authSnapshot = localStorage.getItem("r2d-auth") ?? sessionStorage.getItem("r2d-auth");
      if (authSnapshot) {
        try {
          const parsed = JSON.parse(authSnapshot) as { role?: string };
          if (parsed.role === "admin") {
            router.replace("/admin");
            return;
          }

          router.replace("/lms-course");
          return;
        } catch {
          localStorage.removeItem("r2d-auth");
          sessionStorage.removeItem("r2d-auth");
        }
      }

      if (localStorage.getItem("r2d-remember-me") === "false") {
        void supabase?.auth.signOut();
      }

      const visited = localStorage.getItem("r2d-visited");
      if (!visited) {
        localStorage.setItem("r2d-visited", "true");
      }
    }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-neutral-200 p-10 space-y-8">

        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            Welcome
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Access your online course and track your driving progress.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              className="w-full min-h-[48px] px-4 rounded-lg border border-neutral-300 bg-white text-sm text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-neutral-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                className="w-full min-h-[48px] px-4 pr-12 rounded-lg border border-neutral-300 bg-white text-blue-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center text-neutral-500 hover:text-blue-600 focus:outline-none"
              >
                {showPassword ? (
                  // Eye Off
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.94 10.94 0 0112 19C7 19 2.73 15.11 1 12c.73-1.36 1.87-2.78 3.29-4.03M9.88 9.88A3 3 0 0014.12 14.12M1 1l22 22" />
                  </svg>
                ) : (
                  // Eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-neutral-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-neutral-300 focus:ring-2 focus:ring-blue-600"
              />
              Remember me
            </label>

            <Link
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isSupabaseConfigured || isSubmitting}
            className="w-full min-h-[48px] rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:hover:bg-blue-300"
          >
            {isSubmitting ? "Signing in..." : "Log In"}
          </button>
          {submitError && (
            <p className="text-sm text-red-600">{submitError}</p>
          )}
        </form>

        {/* Divider */}
        <div className="relative text-center text-sm">
          <span className="absolute inset-x-0 top-1/2 h-px bg-neutral-200" />
          <span className="relative bg-white px-3 text-neutral-400">
            New student?
          </span>
        </div>

        {/* Secondary Action */}
        <Link
          href="/"
          className="block text-center text-sm font-medium text-neutral-700 hover:text-blue-600 transition"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}
