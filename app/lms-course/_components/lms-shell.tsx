"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import Sidebar from "@/components/lms-sidebar"

type LMSTheme = "dark" | "light"

const COLLAPSE_STORAGE_KEY = "r2d-sidebar-collapsed"
const THEME_STORAGE_KEY = "r2d-lms-theme"

export function LMSShell({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return localStorage.getItem(COLLAPSE_STORAGE_KEY) === "true"
  })

  const [theme, setTheme] = useState<LMSTheme>(() => {
    if (typeof window === "undefined") return "dark"
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark"
  })

  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev
      localStorage.setItem(COLLAPSE_STORAGE_KEY, String(next))
      return next
    })
  }

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: LMSTheme = prev === "dark" ? "light" : "dark"
      localStorage.setItem(THEME_STORAGE_KEY, next)
      return next
    })
  }

  return (
    <div className="lms-shell flex min-h-screen" data-lms-theme={theme}>
      <Sidebar
        isCollapsed={isCollapsed}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 overflow-y-auto p-6 sm:p-10">
        <div className="mb-5 flex items-center">
          <button
            type="button"
            onClick={toggleCollapse}
            className="lms-module-trigger rounded-lg p-2"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>
        {children}
      </main>
    </div>
  )
}
