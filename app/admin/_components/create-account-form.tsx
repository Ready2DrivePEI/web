"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  password: string;
  role: "student" | "admin";
  status: "active" | "paused" | "expired";
  accessStart: string;
  accessEnd: string;
};

const DAY_MS = 24 * 60 * 60 * 1000;

function formatDateInput(value: Date): string {
  const timezoneOffset = value.getTimezoneOffset() * 60 * 1000;
  return new Date(value.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

function addDays(dateString: string, days: number): string {
  const date = new Date(`${dateString}T00:00:00`);
  return formatDateInput(new Date(date.getTime() + days * DAY_MS));
}

function buildInitialState(): FormState {
  const today = formatDateInput(new Date());
  return {
    fullName: "",
    email: "",
    password: "",
    role: "student",
    status: "active",
    accessStart: today,
    accessEnd: addDays(today, 90),
  };
}

export function CreateAccountForm() {
  const [form, setForm] = useState<FormState>(() => buildInitialState());
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange =
    (key: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = event.target.value;
      setForm((prev) => {
        if (key === "accessStart") {
          return {
            ...prev,
            accessStart: value,
            accessEnd: addDays(value, 90),
          };
        }

        return {
          ...prev,
          [key]: value,
        };
      });
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setSubmitError("");
    setSuccessMessage("");
    setIsSubmitting(true);

    const response = await fetch("/api/admin/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const payload = (await response.json().catch(() => null)) as { error?: string } | null;

    if (!response.ok) {
      setSubmitError(payload?.error ?? "Failed to create account.");
      setIsSubmitting(false);
      return;
    }

    setSuccessMessage(`Account created for ${form.email}. The student can now log in.`);
    setForm((prev) => {
      const next = buildInitialState();
      return { ...next, role: prev.role, status: prev.status };
    });
    setIsSubmitting(false);
  };

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700" htmlFor="fullName">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Student full name"
          value={form.fullName}
          onChange={handleChange("fullName")}
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="student@email.com"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange("email")}
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="At least 6 characters"
            required
            minLength={6}
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange("password")}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-12 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 inline-flex items-center text-slate-500 transition-colors hover:text-[#4285F4]"
            aria-label={showPassword ? "Hide password" : "Show password"}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            value={form.role}
            onChange={handleChange("role")}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
          >
            <option value="student">student</option>
            <option value="admin">admin</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            value={form.status}
            onChange={handleChange("status")}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
          >
            <option value="active">active</option>
            <option value="paused">paused</option>
            <option value="expired">expired</option>
          </select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="startAt">
            Access start
          </label>
          <input
            id="startAt"
            type="date"
            required
            value={form.accessStart}
            onChange={handleChange("accessStart")}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="expiresAt">
            Access end
          </label>
          <input
            id="expiresAt"
            type="date"
            required
            value={form.accessEnd}
            onChange={handleChange("accessEnd")}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4285F4] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <UserPlus size={16} />
        {isSubmitting ? "Creating account..." : "Create account"}
      </button>

      {submitError ? <p className="text-sm font-medium text-red-600">{submitError}</p> : null}
      {successMessage ? <p className="text-sm font-medium text-emerald-700">{successMessage}</p> : null}
    </form>
  );
}
