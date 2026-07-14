"use client"

import type { PointerEvent as ReactPointerEvent, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { useSyncExternalStore } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { House, Menu, TrafficCone } from "lucide-react"
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
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null)
  const isFirstRender = useRef(true)

  // Close drawer on path changes
  useEffect(() => {
    setMobileDrawerOpen(false)
  }, [pathname])

  // Lock body scroll on drawer open
  useEffect(() => {
    if (typeof document === "undefined") return
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = ""
      }
    }
  }, [mobileDrawerOpen])

  // Handle accessibility focus transfers
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (!mobileDrawerOpen) {
      menuTriggerRef.current?.focus()
    } else {
      const sidebarEl = document.querySelector("[data-lms-sidebar]") as HTMLElement | null
      if (sidebarEl) {
        sidebarEl.setAttribute("tabindex", "-1")
        sidebarEl.focus()
      }
    }
  }, [mobileDrawerOpen])

  // Close drawer on Escape
  useEffect(() => {
    if (!mobileDrawerOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileDrawerOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileDrawerOpen])

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
        localStorage.removeItem("r2d-auth")
        sessionStorage.removeItem("r2d-auth")
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
      setMobileDrawerOpen(false)
    }
  }

  const isMobileViewport = () => typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isMobileViewport() || event.pointerType === "mouse") return

    const target = event.target as HTMLElement
    const startedInSidebar = Boolean(target.closest("[data-lms-sidebar]"))
    const startX = event.clientX
    const startY = event.clientY

    if (!mobileDrawerOpen && startX <= EDGE_SWIPE_ZONE) {
      sidebarGestureRef.current = { type: "open", startX, startY }
      return
    }

    if (mobileDrawerOpen && startedInSidebar) {
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
      setMobileDrawerOpen(true)
    }

    if (gesture.type === "close" && deltaX <= -MIN_SWIPE_DISTANCE) {
      setMobileDrawerOpen(false)
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
      className={`lms-shell flex flex-col sm:flex-row h-dvh overflow-hidden ${
        theme === "dark" ? "dark" : ""
      }`}
      data-lms-theme={theme}
      data-sidebar-collapsed={isCollapsed}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      {/* Mobile Top Navbar */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b lms-border bg-[var(--lms-surface)]/75 backdrop-blur-md px-4 sm:hidden">
        <div className="flex items-center gap-2">
          <button
            ref={menuTriggerRef}
            id="mobile-menu-trigger"
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="lms-module-trigger flex h-9 w-9 items-center justify-center rounded-xl"
            aria-label="Open navigation menu"
            aria-expanded={mobileDrawerOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <Link href="/lms-course" className="flex items-center gap-1.5 ml-0.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--lms-active-bg)] text-[var(--lms-accent)] border border-blue-200/40 dark:border-blue-900/30">
              <TrafficCone className="h-4 w-4 rotate-12" />
            </span>
            <span className="text-xs font-bold tracking-tight text-[var(--lms-text)]">
              Ready2Drive
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/50 bg-blue-50/50 px-2 py-0.5 text-[9px] font-bold text-blue-600 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <span>{effectiveProgressPercent}% PROGRESS</span>
          </div>
          <StudentAccountMenu />
        </div>
      </header>

      <Sidebar
        isCollapsed={isCollapsed}
        mobileDrawerOpen={mobileDrawerOpen}
        theme={theme}
        onToggleCollapse={toggleCollapse}
        onToggleTheme={toggleTheme}
        onMobileNavigate={handleMobileNavigate}
        progressPercent={effectiveProgressPercent}
        furthestChapterId={effectiveFurthestChapterId}
      />

      {mobileDrawerOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 sm:hidden"
          aria-label="Close navigation menu"
          onClick={() => setMobileDrawerOpen(false)}
        />
      )}

      <ContinueCoursePrompt
        open={showContinuePrompt}
        showFurthestOption={showFurthestOption}
        onContinueLast={handleContinueLast}
        onContinueFurthest={handleContinueFurthest}
        onClose={() => setShowContinuePrompt(false)}
      />

      <main className="min-w-0 flex-1 overflow-y-auto px-2.5 py-3 sm:p-4 sm:pl-20">
        <div className="min-w-0">
          <div className="mb-3 hidden sm:flex items-center justify-end gap-2">
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
