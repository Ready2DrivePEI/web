"use client"

import { TrafficCone } from "lucide-react"
import { ModuleList } from "./nav-item"
import { ProgressFooter } from "./progress-section"

type LMSTheme = "dark" | "light"

interface DrivingSidebarProps {
  isCollapsed: boolean
  theme: LMSTheme
  onToggleTheme: () => void
  progressPercent: number
  furthestChapterId: string | null
}

export default function DrivingSidebar({
  isCollapsed,
  theme,
  onToggleTheme,
  progressPercent,
  furthestChapterId,
}: DrivingSidebarProps) {

  return (
    <aside
      className={`lms-sidebar sticky top-0 flex h-screen shrink-0 flex-col border-r transition-[width] duration-300 ${
        isCollapsed ? "w-20" : "w-80"
      }`}
    >
      
      {/* Brand Header */}
      <div className={`lms-border flex items-center border-b ${isCollapsed ? "justify-center px-3 py-4" : "px-6 py-6"}`}>
        <div className="flex min-w-0 items-center gap-3">
          <div className="lms-icon-chip rounded-xl p-2 shadow-sm">
            <TrafficCone className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold leading-tight tracking-tight">Ready2Drive</h1>
              <p className="lms-accent truncate text-[10px] font-bold uppercase tracking-[0.18em]">Theory Course 2026</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Module Navigation */}
      <ModuleList isCollapsed={isCollapsed} furthestChapterId={furthestChapterId} />

      {/* Course Stats Footer */}
      <ProgressFooter
        percentage={progressPercent}
        isCollapsed={isCollapsed}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
      
    </aside>
  )
}
