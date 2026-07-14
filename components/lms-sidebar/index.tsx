"use client"

import { PanelLeftClose, PanelLeftOpen, TrafficCone } from "lucide-react"
import Link from "next/link"
import { ModuleList } from "./nav-item"
import { ProgressFooter } from "./progress-section"

type LMSTheme = "dark" | "light"

interface DrivingSidebarProps {
  isCollapsed: boolean
  mobileDrawerOpen?: boolean
  theme: LMSTheme
  onToggleCollapse: () => void
  onToggleTheme: () => void
  onMobileNavigate?: () => void
  progressPercent: number
  furthestChapterId: string | null
}

export default function DrivingSidebar({
  isCollapsed,
  mobileDrawerOpen = false,
  theme,
  onToggleCollapse,
  onToggleTheme,
  onMobileNavigate,
  progressPercent,
  furthestChapterId,
}: DrivingSidebarProps) {
  const showCollapsedHeader = isCollapsed && !mobileDrawerOpen;
  const activeCollapsed = mobileDrawerOpen ? false : isCollapsed;

  return (
    <aside
      data-lms-sidebar
      className={`lms-sidebar h-screen flex-col border-r transition-[transform,width] duration-300 ${
        mobileDrawerOpen
          ? "fixed inset-y-0 left-0 z-50 w-[min(85vw,22rem)] flex translate-x-0 sm:sticky sm:w-80"
          : isCollapsed
            ? "hidden sm:flex w-10 sm:w-20"
            : "hidden sm:flex sm:w-80"
      }`}
    >
      
      {/* Sidebar Header */}
      <div className={`lms-border flex items-center border-b ${showCollapsedHeader ? "justify-center px-1 py-3 sm:px-3 sm:py-4" : "justify-between gap-2 px-2 py-4 sm:px-6 sm:py-6"}`}>
        {showCollapsedHeader ? (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="lms-module-trigger flex h-8 w-8 items-center justify-center rounded-xl sm:h-11 sm:w-11"
            aria-label="Expand sidebar"
            title="Expand sidebar"
          >
            <PanelLeftOpen className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        ) : (
          <>
            <Link
              href="/lms-course"
              className="flex min-w-0 items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-[var(--lms-accent)] rounded-lg outline-none"
              onClick={onMobileNavigate}
            >
              <div className="lms-icon-chip rounded-xl p-1.5 shadow-sm shrink-0 sm:p-2">
                <TrafficCone className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-xs sm:text-base font-semibold leading-tight tracking-tight">Ready2Drive</h1>
                <p className="lms-accent truncate text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em]">Theory Course</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={onToggleCollapse}
              className="lms-module-trigger hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10"
              aria-label="Collapse sidebar"
              title="Collapse sidebar"
            >
              <PanelLeftClose className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </>
        )}
      </div>

      {/* Main Module Navigation */}
      <ModuleList
        isCollapsed={activeCollapsed}
        furthestChapterId={furthestChapterId}
        onNavigate={onMobileNavigate}
      />

      {/* Course Stats Footer - hidden on mobile where sidebar is compact */}
      <div className="hidden sm:block">
        <ProgressFooter
          percentage={progressPercent}
          isCollapsed={isCollapsed}
          theme={theme}
          onToggleTheme={onToggleTheme}
        />
      </div>
      
    </aside>
  )
}
