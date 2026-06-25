"use client"

import type { PointerEvent as ReactPointerEvent, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { useSyncExternalStore } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { House } from "lucide-react"
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

const MOBILE_BREAKPOINT = 640
const EDGE_SWIPE_ZONE = 32
const MIN_SWIPE_DISTANCE = 48
const MAX_VERTICAL_DRIFT = 40

type SidebarGesture = "open" | "close"

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
  const sidebarGestureRef = useRef<{
    type: SidebarGesture
    startX: number
    startY: number
  } | null>(null)

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

  const setSidebarCollapsed = (next: boolean) => {
    localStorage.setItem(COLLAPSE_STORAGE_KEY, String(next))
    window.dispatchEvent(new Event(COLLAPSE_EVENT))
  }

  const toggleCollapse = () => {
    setSidebarCollapsed(!isCollapsed)
  }

  const collapseSidebar = () => {
    if (!isCollapsed) setSidebarCollapsed(true)
  }

  const handleMobileNavigate = () => {
    if (typeof window === "undefined") return
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      collapseSidebar()
    }
  }

  const isMobileViewport = () => typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isMobileViewport() || event.pointerType === "mouse") return

    const target = event.target as HTMLElement
    const startedInSidebar = Boolean(target.closest("[data-lms-sidebar]"))
    const startX = event.clientX
    const startY = event.clientY

    if (isCollapsed && startX <= EDGE_SWIPE_ZONE) {
      sidebarGestureRef.current = { type: "open", startX, startY }
      return
    }

    if (!isCollapsed && startedInSidebar) {
      sidebarGestureRef.current = { type: "close", startX, startY }
    }
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = sidebarGestureRef.current
    sidebarGestureRef.current = null
    if (!gesture || !isMobileViewport()) return

    const deltaX = event.clientX - gesture.startX
    const deltaY = Math.abs(event.clientY - gesture.startY)
    if (deltaY > MAX_VERTICAL_DRIFT) return

    if (gesture.type === "open" && deltaX >= MIN_SWIPE_DISTANCE) {
      setSidebarCollapsed(false)
    }

    if (gesture.type === "close" && deltaX <= -MIN_SWIPE_DISTANCE) {
      setSidebarCollapsed(true)
    }
  }

  const handlePointerCancel = () => {
    sidebarGestureRef.current = null
  }

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    localStorage.setItem(THEME_STORAGE_KEY, next)
    window.dispatchEvent(new Event(THEME_EVENT))
  }



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
    <div
      className="lms-shell flex min-h-screen"
      data-lms-theme={theme}
      data-sidebar-collapsed={isCollapsed}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      <Sidebar
        isCollapsed={isCollapsed}
        theme={theme}
        onToggleCollapse={toggleCollapse}
        onToggleTheme={toggleTheme}
        onMobileNavigate={handleMobileNavigate}
        progressPercent={effectiveProgressPercent}
        furthestChapterId={effectiveFurthestChapterId}
      />

      {!isCollapsed ? (
        <button
          type="button"
          className="fixed inset-y-0 right-0 left-[var(--lms-sidebar-width)] z-30 cursor-default bg-transparent sm:hidden"
          aria-label="Collapse sidebar"
          tabIndex={-1}
          onClick={collapseSidebar}
        />
      ) : null}

      <ContinueCoursePrompt
        open={showContinuePrompt}
        showFurthestOption={showFurthestOption}
        onContinueLast={handleContinueLast}
        onContinueFurthest={handleContinueFurthest}
        onClose={() => setShowContinuePrompt(false)}
      />

      <main className="min-w-0 flex-1 overflow-y-auto px-2.5 py-3 sm:p-4 sm:pl-20">
        <div className="min-w-0">
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
      </main>

      <CourseCompletionModal 
        isOpen={showTestModal} 
        onClose={() => setShowTestModal(false)} 
      />
    </div>
  )
}
