"use client"

import type { CSSProperties, ReactNode } from "react"
import { useEffect, useState } from "react"
import { useSyncExternalStore } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { House, PanelLeftClose, PanelLeftOpen } from "lucide-react"
import Sidebar from "@/components/lms-sidebar"
import {
  COLLAPSE_EVENT,
  COLLAPSE_STORAGE_KEY,
  THEME_EVENT,
  THEME_STORAGE_KEY,
  getCollapseSnapshot,
  getThemeSnapshot,
  type LMSTheme,
  subscribeToPreference,
} from "@/app/lms-course/_components/lms-preferences"
import { getCachedLastLmsPath, getStudentProgress, type StudentProgressSnapshot } from "@/lib/lms-progress"
import { getChapterHref, isLmsBypassLocksEnabled } from "@/app/lms-course/data/modules"
import { ContinueCoursePrompt } from "@/app/lms-course/_components/continue-course-prompt"
import { StudentAccountMenu } from "@/app/lms-course/_components/student-account-menu"

export function LMSShell({ children }: { children: ReactNode }) {
  const bypassLocksEnabled = isLmsBypassLocksEnabled()
  const pathname = usePathname()
  const router = useRouter()
  const isCollapsed = useSyncExternalStore(
    (onStoreChange) => subscribeToPreference(COLLAPSE_EVENT, onStoreChange),
    getCollapseSnapshot,
    () => false,
  )

  const theme = useSyncExternalStore<LMSTheme>(
    (onStoreChange) => subscribeToPreference(THEME_EVENT, onStoreChange),
    getThemeSnapshot,
    () => "light" as LMSTheme,
  )
  const [progressSnapshot, setProgressSnapshot] = useState<StudentProgressSnapshot | null>(null)
  const [showContinuePrompt, setShowContinuePrompt] = useState(false)

  const toggleCollapse = () => {
    const next = !isCollapsed
    localStorage.setItem(COLLAPSE_STORAGE_KEY, String(next))
    window.dispatchEvent(new Event(COLLAPSE_EVENT))
  }

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    localStorage.setItem(THEME_STORAGE_KEY, next)
    window.dispatchEvent(new Event(THEME_EVENT))
  }

  const shellStyle = {
    "--lms-sidebar-width": isCollapsed ? "5rem" : "20rem",
  } as CSSProperties;

  useEffect(() => {
    if (!pathname.startsWith("/lms-course")) return;

    let active = true;
    void (async () => {
      const snapshot = await getStudentProgress();
      if (!active) return;
      setProgressSnapshot(snapshot);

      const isCourseEntry = pathname === "/lms-course";
      const hasResumeTarget = Boolean(snapshot?.last_chapter_id);
      setShowContinuePrompt(isCourseEntry && hasResumeTarget);
    })();

    return () => {
      active = false;
    };
  }, [pathname]);

  const lastChapterHref = progressSnapshot?.last_chapter_id
    ? getChapterHref(progressSnapshot.last_chapter_id)
    : null;
  const furthestChapterHref = progressSnapshot?.furthest_chapter_id
    ? getChapterHref(progressSnapshot.furthest_chapter_id)
    : null;

  const showFurthestOption = Boolean(
    progressSnapshot?.last_chapter_id &&
      progressSnapshot?.furthest_chapter_id &&
      progressSnapshot.last_chapter_id !== progressSnapshot.furthest_chapter_id &&
      furthestChapterHref,
  );

  const handleContinueLast = () => {
    const exactLastPath = getCachedLastLmsPath(progressSnapshot?.last_chapter_id ?? null);
    if (exactLastPath) {
      setShowContinuePrompt(false);
      router.push(exactLastPath);
      return;
    }

    if (!lastChapterHref) {
      setShowContinuePrompt(false);
      return;
    }
    setShowContinuePrompt(false);
    router.push(lastChapterHref);
  };

  const handleContinueFurthest = () => {
    if (!furthestChapterHref) {
      setShowContinuePrompt(false);
      return;
    }
    setShowContinuePrompt(false);
    router.push(furthestChapterHref);
  };

  return (
    <div className="lms-shell flex min-h-screen" data-lms-theme={theme} style={shellStyle}>
      <Sidebar
        isCollapsed={isCollapsed}
        theme={theme}
        onToggleTheme={toggleTheme}
        progressPercent={progressSnapshot?.progress_percent ?? 0}
        furthestChapterId={progressSnapshot?.furthest_chapter_id ?? null}
      />

      <ContinueCoursePrompt
        open={showContinuePrompt}
        showFurthestOption={showFurthestOption}
        onContinueLast={handleContinueLast}
        onContinueFurthest={handleContinueFurthest}
        onClose={() => setShowContinuePrompt(false)}
      />

      <main className="flex-1 overflow-y-auto p-3 sm:p-4">
        <div className="flex items-start gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleCollapse}
            className="lms-module-trigger sticky top-3 z-30 -ml-1 mt-0.5 shrink-0 self-start rounded-xl p-2.5 sm:top-4 sm:p-3"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </button>
          <div className="ml-1 min-w-0 flex-1 sm:ml-2">
            <div className="mb-3 flex items-center justify-end gap-2">
              {bypassLocksEnabled ? (
                <span className="lms-progress-pill rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  Dev Preview Mode
                </span>
              ) : null}
              <Link
                href="/"
                className="lms-module-trigger lms-button-outline lms-border inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium"
              >
                <House className="h-4 w-4" />
                Home
              </Link>
              <StudentAccountMenu />
            </div>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
