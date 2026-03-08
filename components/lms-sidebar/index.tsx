"use client"

import { TrafficCone } from "lucide-react"
import { ModuleList } from "./nav-item"
import { ProgressFooter } from "./progress-section"

export default function DrivingSidebar() {
  return (
    <aside className="lms-sidebar sticky top-0 h-screen w-80 shrink-0 border-r">
      
      {/* Brand Header */}
      <div className="lms-border flex items-center gap-3 border-b px-6 py-6">
        <div className="lms-icon-chip rounded-lg p-1.5">
          <TrafficCone className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight tracking-tight">Ready2Drive</h1>
          <p className="lms-accent text-[10px] font-bold uppercase tracking-widest">Theory Course 2026</p>
        </div>
      </div>

      {/* Main Module Navigation */}
      <ModuleList />

      {/* Course Stats Footer */}
      <ProgressFooter percentage={0} />
      
    </aside>
  )
}
