"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Clock3,
  RefreshCw,
  LogOut,
  Search,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { CreateAccountForm } from "@/app/admin/_components/create-account-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [userToDelete, setUserToDelete] = useState<DashboardUser | null>(null);
  const [deleteConfirmEmail, setDeleteConfirmEmail] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "all" || u.role === selectedRole;
    const matchesStatus = selectedStatus === "all" || u.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

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
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-[100]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              ← Back to site
            </Link>
            <span className="h-4 w-px bg-slate-200" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Admin Console
              </p>
              <h1 className="font-[var(--font-admin-body)] text-xl font-bold text-slate-900 mt-0.5 leading-none">
                Ready2Drive Admin
              </h1>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-6 pb-16 pt-8">
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="pointer-events-none absolute -top-20 -right-16 h-32 w-32 rounded-full bg-blue-100/30 blur-2xl" />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4285F4]">
                  Supabase Status
                </p>
                <h2 className="text-base font-bold text-slate-900 mt-0.5">
                  Live Connection Data
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:border-l sm:border-slate-100 sm:pl-4">
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  {isRefreshing ? "Syncing..." : "Live connection"}
                </span>
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-[#2563eb]">
                  {totalActiveAccounts} active accounts
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                  Last sync: {formatLastSync(lastSyncedAt)}
                </span>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-[#2563eb] disabled:cursor-not-allowed disabled:opacity-70 transition-colors hover:bg-blue-100/50"
              >
                <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
                {isRefreshing ? "Syncing..." : "Refresh data"}
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
                <p className="mt-1 text-sm text-slate-600">
                  Fetched from `profiles` and matched with Supabase Auth metadata.
                </p>
              </div>
            </div>

            {/* Search and Filters row */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
              <div className="flex flex-1 flex-wrap items-center gap-2">
                <div className="relative flex-1 min-w-[200px]">
                  <input
                    type="text"
                    placeholder="Search name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 py-2 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
                  />
                  <span className="absolute left-3 top-2.5 text-slate-400">
                    <Search size={16} />
                  </span>
                </div>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none"
                >
                  <option value="all">All Roles</option>
                  <option value="student">student</option>
                  <option value="admin">admin</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">active</option>
                  <option value="paused">paused</option>
                  <option value="expired">expired</option>
                </select>
                {(searchQuery || selectedRole !== "all" || selectedStatus !== "all") && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedRole("all");
                      setSelectedStatus("all");
                    }}
                    className="text-xs font-semibold text-[#4285F4] hover:underline px-2"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
              <div className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Showing {filteredUsers.length} of {users.length} users
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="overflow-x-auto custom-scrollbar">
                <div className="min-w-[850px] divide-y divide-slate-100">
                  <div className="grid grid-cols-[1.2fr_1.4fr_0.8fr_0.8fr_1.2fr_0.4fr] gap-3 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    <span className="sticky left-0 bg-slate-50 z-10">User</span>
                    <span>Email</span>
                    <span>Role</span>
                    <span>Status</span>
                    <span>Access window</span>
                    <span className="text-right">Actions</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {filteredUsers.map((user, index) => {
                      const accessMeta = getAccessMeta(user.accessEnd);
                      return (
                        <div
                          key={`${user.userId}-${user.email}`}
                          className={`grid grid-cols-[1.2fr_1.4fr_0.8fr_0.8fr_1.2fr_0.4fr] gap-3 px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50/80 group ${
                            index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                          }`}
                        >
                          <div
                            className={`sticky left-0 z-10 flex items-center gap-3 transition-colors group-hover:bg-slate-50/95 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] ${
                              index % 2 === 0 ? "bg-white" : "bg-slate-50"
                            }`}
                          >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-[#2563eb]">
                              {getInitials(user.displayName)}
                            </span>
                            <div>
                              <p className="font-semibold text-slate-900 leading-tight">
                                {user.displayName}
                              </p>
                              <p className="text-[10px] text-slate-500">
                                ID: {user.userId || "n/a"}
                              </p>
                            </div>
                          </div>
                          <p className="truncate font-medium flex items-center">{user.email}</p>
                          <div className="flex items-center">
                            <span
                              className={`inline-flex h-fit items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getRoleBadgeClass(
                                user.role,
                              )}`}
                            >
                              {user.role}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="inline-flex h-fit items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                              {user.status}
                            </span>
                          </div>
                          <div className="space-y-1 text-xs text-slate-600 flex flex-col justify-center">
                            <p>
                              {formatAccessDate(user.accessStart)} -{" "}
                              {formatAccessDate(user.accessEnd)}
                            </p>
                            <span
                              className={`inline-flex w-fit rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${accessMeta.toneClass}`}
                            >
                              {accessMeta.label}
                            </span>
                          </div>
                          <div className="flex items-center justify-end pr-2">
                            <button
                              type="button"
                              onClick={() => {
                                setUserToDelete(user);
                                setDeleteConfirmEmail("");
                              }}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-400 hover:border-red-100 hover:bg-red-50 hover:text-red-600 transition-colors"
                              aria-label="Delete user"
                              title="Delete user"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {!isLoading && filteredUsers.length === 0 ? (
                      <div className="px-4 py-10 text-center">
                        <p className="text-sm font-semibold text-slate-700">
                          No users match your filters.
                        </p>
                        {(searchQuery || selectedRole !== "all" || selectedStatus !== "all") && (
                          <button
                            type="button"
                            onClick={() => {
                              setSearchQuery("");
                              setSelectedRole("all");
                              setSelectedStatus("all");
                            }}
                            className="mt-2 text-xs font-semibold text-[#4285F4] hover:underline"
                          >
                            Reset filters
                          </button>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
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

        {/* Delete Confirmation Dialog */}
        <Dialog open={!!userToDelete} onOpenChange={(open) => !open && setUserToDelete(null)}>
          <DialogContent className="max-w-md bg-white border border-slate-200">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-slate-900">Delete User Account</DialogTitle>
              <DialogDescription className="text-sm text-slate-600">
                Confirm user deletion details below. This action is permanent and cannot be undone.
              </DialogDescription>
            </DialogHeader>

            {userToDelete && (
              <div className="space-y-4 my-2">
                {/* Summary Card */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Name</span>
                    <span className="font-semibold text-slate-900">{userToDelete.displayName}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Email</span>
                    <span className="font-semibold text-slate-900">{userToDelete.email}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Role</span>
                    <span className="font-semibold uppercase tracking-wider text-slate-700">{userToDelete.role}</span>
                  </div>
                </div>

                {/* Warning Details List */}
                <div className="space-y-2 text-xs text-slate-600">
                  <p className="font-semibold text-red-600">Deleting this user will:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Remove their database profile records.</li>
                    <li>Delete their authentication credentials.</li>
                    <li>Remove all future login and course access.</li>
                  </ul>
                </div>

                {/* Email Input Confirmation */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700" htmlFor="delete-confirm-email">
                    Type the user's email to confirm:
                  </label>
                  <input
                    id="delete-confirm-email"
                    type="text"
                    value={deleteConfirmEmail}
                    onChange={(e) => setDeleteConfirmEmail(e.target.value)}
                    placeholder={userToDelete.email}
                    disabled={isDeleting}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
              </div>
            )}

            <DialogFooter className="mt-4 gap-2 flex flex-col sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setUserToDelete(null)}
                disabled={isDeleting}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting || !userToDelete || deleteConfirmEmail !== userToDelete.email}
                onClick={async () => {
                  if (!userToDelete) return;
                  setIsDeleting(true);
                  
                  // Simulate deletion API call
                  await new Promise((resolve) => setTimeout(resolve, 800));
                  
                  // Client-side local list filtering (simulates removal)
                  setUsers((prev) => prev.filter((u) => u.userId !== userToDelete.userId));
                  
                  // Set success banner message
                  setSuccessMessage(`Account for ${userToDelete.email} successfully deleted (Simulated).`);
                  
                  // Reset state
                  setIsDeleting(false);
                  setUserToDelete(null);
                }}
                className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-200 hover:bg-red-700 disabled:opacity-50 disabled:shadow-none transition-colors"
              >
                {isDeleting ? "Deleting..." : "Delete Account"}
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
