"use client"

import { TrafficCone } from "lucide-react"
import { ModuleList } from "./nav-item"
import { ProgressFooter } from "./progress-section"

export default function DrivingSidebar() {
  return (
    <aside className="sticky top-0 w-80 h-screen bg-[#0f172a] text-slate-200 flex flex-col border-r border-slate-800 shrink-0">
      
      {/* Brand Header */}
      <div className="px-6 py-6 border-b border-slate-800 flex items-center gap-3">
        <div className="bg-amber-500 p-1.5 rounded-lg">
          <TrafficCone className="h-6 w-6 text-slate-900" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight tracking-tight text-white">Ready2Drive</h1>
          <p className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Theory Course 2026</p>
        </div>
      </div>

      {/* Main Module Navigation */}
      <ModuleList />

      {/* Course Stats Footer */}
      <ProgressFooter percentage={0} />
      
    </aside>
  )
}