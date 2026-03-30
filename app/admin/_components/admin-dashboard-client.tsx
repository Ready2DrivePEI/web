"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Clock3,
  RefreshCw,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { CreateAccountForm } from "@/app/admin/_components/create-account-form";

type DashboardStats = {
  activeStudents: number;
  activeAdmins: number;
  expiringNext30Days: number;
};

type DashboardUser = {
  userId: string;
  displayName: string;
  email: string;
  role: string;
  status: string;
  accessStart: string | null;
  accessEnd: string | null;
};

const EMPTY_STATS: DashboardStats = {
  activeStudents: 0,
  activeAdmins: 0,
  expiringNext30Days: 0,
};

const statsConfig = [
  {
    key: "activeStudents" as const,
    label: "Active students",
    change: "Live count",
    icon: Users,
  },
  {
    key: "expiringNext30Days" as const,
    label: "Access ending next month",
    change: "Next 30 days",
    icon: Clock3,
  },
  {
    key: "activeAdmins" as const,
    label: "Admins",
    change: "Active admins",
    icon: ShieldCheck,
  },
];

function formatAccessDate(value: string | null): string {
  if (!value) return "No end date";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Invalid date";
  return parsed.toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function formatLastSync(value: string | null): string {
  if (!value) return "Not synced yet";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Not synced yet";
  return parsed.toLocaleString(undefined, {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "U";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
}

function getRoleBadgeClass(role: string): string {
  if (role === "admin") {
    return "border-violet-200 bg-violet-50 text-violet-700";
  }
  return "border-blue-200 bg-blue-50 text-[#2563eb]";
}

function getAccessMeta(accessEnd: string | null): { label: string; toneClass: string } {
  if (!accessEnd) {
    return {
      label: "No expiry",
      toneClass: "border-slate-200 bg-slate-100 text-slate-600",
    };
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const end = new Date(accessEnd);
  end.setHours(0, 0, 0, 0);

  const diff = Math.ceil((end.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));

  if (diff < 0) {
    return {
      label: "Expired",
      toneClass: "border-red-200 bg-red-50 text-red-700",
    };
  }

  if (diff <= 30) {
    return {
      label: `${diff}d left`,
      toneClass: "border-amber-200 bg-amber-50 text-amber-700",
    };
  }

  return {
    label: `${diff}d left`,
    toneClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  };
}

export function AdminDashboardClient() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>(EMPTY_STATS);
  const [users, setUsers] = useState<DashboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);

  const loadOverview = useCallback(async (mode: "initial" | "refresh" = "initial") => {
    if (!supabase) {
      setErrorMessage("Supabase client is not configured.");
      setIsLoading(false);
      setIsRefreshing(false);
      return;
    }

    if (mode === "refresh") {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setErrorMessage("");

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    const accessToken = sessionData.session?.access_token;

    if (sessionError || !accessToken) {
      setErrorMessage("Your admin session has expired. Please sign in again.");
      setIsLoading(false);
      setIsRefreshing(false);
      router.replace("/login");
      return;
    }

    const response = await fetch("/api/admin/dashboard/overview", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const payload = (await response.json().catch(() => null)) as
      | { error?: string; stats?: DashboardStats; users?: DashboardUser[] }
      | null;

    if (!response.ok) {
      const message = payload?.error ?? "Could not load admin dashboard data.";
      setErrorMessage(message);
      if (response.status === 401 || response.status === 403) {
        router.replace("/login");
      }
      setIsLoading(false);
      setIsRefreshing(false);
      return;
    }

    setStats(payload?.stats ?? EMPTY_STATS);
    setUsers(payload?.users ?? []);
    setLastSyncedAt(new Date().toISOString());
    setIsLoading(false);
    setIsRefreshing(false);
  }, [router]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadOverview("initial");
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [loadOverview]);

  const handleRefresh = () => {
    void loadOverview("refresh");
  };

  const handleLogout = async () => {
    await supabase?.auth.signOut();
    localStorage.removeItem("r2d-auth");
    localStorage.removeItem("r2d-remember-me");
    sessionStorage.removeItem("r2d-auth");
    router.push("/login");
  };

  const totalActiveAccounts = stats.activeStudents + stats.activeAdmins;

  return (
    <>
      <header className="border-b border-blue-100/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Admin Console
            </p>
            <h1 className="font-[var(--font-admin-display)] text-3xl text-slate-900">
              Ready2Drive Admin
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:text-[#4285F4]"
            >
              Back to site
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-red-200 hover:text-red-600"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-6 pb-16 pt-8">
        <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4285F4]">
                Supabase status
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Live account data from your Supabase project.
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Showing active users and upcoming access expiry in the next 30 days.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {isRefreshing ? "Syncing..." : "Live connection"}
                </span>
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2563eb]">
                  {totalActiveAccounts} active accounts
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  Last sync: {formatLastSync(lastSyncedAt)}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563eb] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
                {isRefreshing ? "Refreshing..." : "Refresh data"}
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {statsConfig.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4285F4] via-sky-400 to-cyan-300" />
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-600">{item.label}</p>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#4285F4]">
                    <Icon size={18} />
                  </span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  {isLoading ? "--" : stats[item.key]}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {item.change}
                </p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                  Current users
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Active students and admins
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fetched from `profiles` and matched with Supabase Auth metadata.
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-[1.2fr_1.4fr_0.8fr_0.8fr_1fr] gap-3 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                <span>User</span>
                <span>Email</span>
                <span>Role</span>
                <span>Status</span>
                <span>Access window</span>
              </div>
              <div className="divide-y divide-slate-100">
                {users.map((user, index) => {
                  const accessMeta = getAccessMeta(user.accessEnd);
                  return (
                    <div
                      key={`${user.userId}-${user.email}`}
                      className={`grid grid-cols-[1.2fr_1.4fr_0.8fr_0.8fr_1fr] gap-3 px-4 py-4 text-sm text-slate-700 transition-colors hover:bg-slate-50/80 ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-[#2563eb]">
                          {getInitials(user.displayName)}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900">{user.displayName}</p>
                          <p className="text-xs text-slate-500">ID: {user.userId || "n/a"}</p>
                        </div>
                      </div>
                      <p className="truncate font-medium">{user.email}</p>
                      <span
                        className={`inline-flex h-fit items-center justify-center rounded-full border px-2.5 py-1 text-xs font-semibold ${getRoleBadgeClass(
                          user.role,
                        )}`}
                      >
                        {user.role}
                      </span>
                      <span className="inline-flex h-fit items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        {user.status}
                      </span>
                      <div className="space-y-1 text-xs text-slate-600">
                        <p>
                          {formatAccessDate(user.accessStart)} - {formatAccessDate(user.accessEnd)}
                        </p>
                        <span
                          className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${accessMeta.toneClass}`}
                        >
                          {accessMeta.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
                {!isLoading && users.length === 0 ? (
                  <div className="px-4 py-10 text-center">
                    <p className="text-sm font-semibold text-slate-700">No active users found.</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Create a new account to populate this list.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            {errorMessage ? (
              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/70 p-4 text-sm text-red-700">
                {errorMessage}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-sm text-slate-700">
                {isLoading
                  ? "Loading dashboard data..."
                  : "Dashboard is synced with active profiles in Supabase."}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div
              id="create-account-section"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                Create account
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Add a new student or admin
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Create users in Supabase Auth and store access rules in `profiles`.
              </p>

              <CreateAccountForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
