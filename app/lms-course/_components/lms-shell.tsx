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
import {
  getChapterHref,
  getChapterIndex,
  getProgressPercentForChapter,
  isLmsBypassLocksEnabled,
} from "@/app/lms-course/data/modules"
import { ContinueCoursePrompt } from "@/app/lms-course/_components/continue-course-prompt"
import { StudentAccountMenu } from "@/app/lms-course/_components/student-account-menu"
import { CourseCompletionModal } from "@/app/lms-course/_components/course-completion-modal"
import { supabase } from "@/lib/supabase/client"

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
  const [progressSnapshot, setProgressSnapshot] = useState<StudentProgressSnapshot | null>(() => {
    if (typeof window === "undefined") return null
    const raw = localStorage.getItem("r2d:progress:snapshot")
    if (!raw) return null
    try {
      return JSON.parse(raw) as StudentProgressSnapshot
    } catch {
      return null
    }
  })
  const [showContinuePrompt, setShowContinuePrompt] = useState(false)
  const [showTestModal, setShowTestModal] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    let active = true
    void (async () => {
      const authSnapshot = localStorage.getItem("r2d-auth") ?? sessionStorage.getItem("r2d-auth")
      if (!authSnapshot || !supabase) {
        if (!active) return
        setAuthChecked(true)
        router.replace("/login")
        return
      }

      const { data } = await supabase.auth.getSession()
      if (!active) return
      if (!data.session) {
        setAuthChecked(true)
        router.replace("/login")
        return
      }
      setAuthChecked(true)
    })()

    return () => {
      active = false
    }
  }, [router])

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
    if (!authChecked) return;
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
  }, [authChecked, pathname]);

  const lastChapterHref = progressSnapshot?.last_chapter_id
    ? getChapterHref(progressSnapshot.last_chapter_id)
    : null;
  const pathChapterIdMatch = pathname.match(/\/chapter\/([^/]+)/)
  const pathChapterId = pathChapterIdMatch?.[1] ?? null
  const pathChapterIndex = getChapterIndex(pathChapterId ?? "")
  const snapshotFurthestId = progressSnapshot?.furthest_chapter_id ?? null
  const snapshotFurthestIndex = getChapterIndex(snapshotFurthestId ?? "")
  const effectiveFurthestChapterId =
    pathChapterIndex > snapshotFurthestIndex ? pathChapterId : snapshotFurthestId
  const effectiveProgressPercent = getProgressPercentForChapter(effectiveFurthestChapterId)

  const furthestChapterHref = effectiveFurthestChapterId
    ? getChapterHref(effectiveFurthestChapterId)
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

  if (!authChecked) {
    return null
  }

  return (
    <div className="lms-shell flex min-h-screen" data-lms-theme={theme} style={shellStyle}>
      <Sidebar
        isCollapsed={isCollapsed}
        theme={theme}
        onToggleTheme={toggleTheme}
        progressPercent={effectiveProgressPercent}
        furthestChapterId={effectiveFurthestChapterId}
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
                <>
                  <button
                    type="button"
                    onClick={() => setShowTestModal(true)}
                    className="rounded-full bg-purple-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Test Modal
                  </button>
                  <span className="lms-progress-pill rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                    Dev Preview Mode
                  </span>
                </>
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

      <CourseCompletionModal 
        isOpen={showTestModal} 
        onClose={() => setShowTestModal(false)} 
      />
    </div>
  )
}
