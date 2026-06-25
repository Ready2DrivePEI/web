"use client"

import { PanelLeftClose, PanelLeftOpen, TrafficCone } from "lucide-react"
import { ModuleList } from "./nav-item"
import { ProgressFooter } from "./progress-section"

type LMSTheme = "dark" | "light"

interface DrivingSidebarProps {
  isCollapsed: boolean
  theme: LMSTheme
  onToggleCollapse: () => void
  onToggleTheme: () => void
  onMobileNavigate?: () => void
  progressPercent: number
  furthestChapterId: string | null
}

export default function DrivingSidebar({
  isCollapsed,
  theme,
  onToggleCollapse,
  onToggleTheme,
  onMobileNavigate,
  progressPercent,
  furthestChapterId,
}: DrivingSidebarProps) {

  return (
    <aside
      data-lms-sidebar
      className={`lms-sidebar sticky top-0 z-40 flex h-screen shrink-0 flex-col border-r transition-[width] duration-300 ${
        isCollapsed ? "w-10 sm:w-20" : "w-[min(85vw,22rem)] sm:w-80"
      }`}
    >
      
      {/* Sidebar Header */}
      <div className={`lms-border flex items-center border-b ${isCollapsed ? "justify-center px-1 py-3 sm:px-3 sm:py-4" : "justify-between gap-2 px-2 py-4 sm:px-6 sm:py-6"}`}>
        {isCollapsed ? (
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
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="lms-icon-chip rounded-xl p-1.5 shadow-sm shrink-0 sm:p-2">
                <TrafficCone className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-xs sm:text-base font-semibold leading-tight tracking-tight">Ready2Drive</h1>
                <p className="lms-accent truncate text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em]">Theory Course</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onToggleCollapse}
              className="lms-module-trigger flex h-8 w-8 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10"
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
        isCollapsed={isCollapsed}
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
