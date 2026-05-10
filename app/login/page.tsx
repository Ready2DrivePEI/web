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

  // Authenticates via server-side route that resolves full_name → email
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    if (!supabase) {
      setSubmitError("Login service is not configured.");
      setIsSubmitting(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!fullName || !password) {
      setSubmitError("Please enter both your name and password.");
      setIsSubmitting(false);
      return;
    }

    // Call server-side login route (resolves full_name → email, then authenticates)
    let loginResult: {
      access_token?: string;
      refresh_token?: string;
      error?: string;
      profile?: {
        id: number;
        role: string;
        full_name: string;
        status: string;
        expires_at: string | null;
      };
    };

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, password }),
      });
      loginResult = (await response.json()) as typeof loginResult;

      if (!response.ok) {
        setSubmitError(loginResult?.error ?? "Could not sign in. Please try again.");
        setIsSubmitting(false);
        return;
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
      return;
    }

    if (!loginResult.access_token || !loginResult.refresh_token || !loginResult.profile) {
      setSubmitError("Login succeeded but session data was incomplete. Try again.");
      setIsSubmitting(false);
      return;
    }

    // Set the Supabase session on the client
    const { error: sessionError } = await supabase.auth.setSession({
      access_token: loginResult.access_token,
      refresh_token: loginResult.refresh_token,
    });

    if (sessionError) {
      console.error("Session set error:", sessionError);
      setSubmitError("Signed in, but could not establish local session.");
      setIsSubmitting(false);
      return;
    }

    const profile = loginResult.profile;

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
      full_name: profile.full_name,
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

          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-neutral-700"
            >
              Email / Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter email or full name"
              required
              autoComplete="username"
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
