"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, UserCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

function getEmailName(value: string): string {
  const [name] = value.split("@");
  return name || "Student";
}

export function StudentAccountMenu() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [displayName, setDisplayName] = useState("Student");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    void (async () => {
      if (!supabase) return;
      const { data, error } = await supabase.auth.getUser();
      if (!active || error || !data?.user) return;

      const fullName = (data.user.user_metadata as { full_name?: string } | null)?.full_name?.trim();
      const resolvedEmail = data.user.email ?? null;
      const resolvedName = fullName || (resolvedEmail ? getEmailName(resolvedEmail) : "Student");

      setDisplayName(resolvedName);
      setEmail(resolvedEmail);
    })();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isOpen]);

  const initials = useMemo(() => {
    const parts = displayName.trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "ST";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
  }, [displayName]);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);

    await supabase?.auth.signOut();
    localStorage.removeItem("r2d-auth");
    localStorage.removeItem("r2d-remember-me");
    localStorage.removeItem("r2d:progress:snapshot");
    localStorage.removeItem("r2d:progress:last-path");

    const quizProgressKeys: string[] = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key?.startsWith("r2d:quiz:passed:")) {
        quizProgressKeys.push(key);
      }
    }
    quizProgressKeys.forEach((key) => localStorage.removeItem(key));

    sessionStorage.removeItem("r2d-auth");
    router.push("/login");
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="lms-module-trigger lms-border inline-flex items-center gap-2 rounded-xl border px-2.5 py-2"
        aria-label="Open account menu"
        aria-expanded={isOpen}
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--lms-active-bg)] text-xs font-bold text-[color:var(--lms-accent)]">
          {initials}
        </span>
        <span className="hidden max-w-28 truncate text-sm font-semibold text-[color:var(--lms-text)] sm:inline">
          {displayName}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[color:var(--lms-text-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen ? (
        <div className="lms-home-card lms-border absolute top-[calc(100%+0.5rem)] right-0 z-50 w-64 rounded-2xl border p-2 shadow-xl">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2">
            <UserCircle2 className="h-5 w-5 text-[color:var(--lms-accent)]" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[color:var(--lms-text)]">{displayName}</p>
              <p className="truncate text-xs text-[color:var(--lms-text-muted)]">{email ?? "Student account"}</p>
            </div>
          </div>

          <div className="my-2 h-px bg-[color:var(--lms-border)]" />

          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="inline-flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium text-[color:var(--lms-danger)] transition-colors hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <LogOut className="h-4 w-4" />
            {isLoggingOut ? "Logging out..." : "Log out"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
