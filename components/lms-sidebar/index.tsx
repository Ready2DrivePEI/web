"use client"

import { TrafficCone } from "lucide-react"
import { ModuleList } from "./nav-item"
import { ProgressFooter } from "./progress-section"

type LMSTheme = "dark" | "light"

interface DrivingSidebarProps {
  isCollapsed: boolean
  theme: LMSTheme
  onToggleTheme: () => void
}

export default function DrivingSidebar({
  isCollapsed,
  theme,
  onToggleTheme,
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
          <div className="lms-icon-chip rounded-lg p-1.5">
            <TrafficCone className="h-6 w-6" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight">Ready2Drive</h1>
              <p className="lms-accent text-[10px] font-bold uppercase tracking-widest">Theory Course 2026</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Module Navigation */}
      <ModuleList isCollapsed={isCollapsed} />

      {/* Course Stats Footer */}
      <ProgressFooter
        percentage={0}
        isCollapsed={isCollapsed}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
      
    </aside>
  )
}
