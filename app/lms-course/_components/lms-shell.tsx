"use client"

import type { CSSProperties, ReactNode } from "react"
import { useSyncExternalStore } from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import Sidebar from "@/components/lms-sidebar"
import {
  COLLAPSE_EVENT,
  COLLAPSE_STORAGE_KEY,
  THEME_EVENT,
  THEME_STORAGE_KEY,
  getCollapseSnapshot,
  getThemeSnapshot,
  subscribeToPreference,
} from "@/app/lms-course/_components/lms-preferences"

export function LMSShell({ children }: { children: ReactNode }) {
  const isCollapsed = useSyncExternalStore(
    (onStoreChange) => subscribeToPreference(COLLAPSE_EVENT, onStoreChange),
    getCollapseSnapshot,
    () => false,
  )

  const theme = useSyncExternalStore(
    (onStoreChange) => subscribeToPreference(THEME_EVENT, onStoreChange),
    getThemeSnapshot,
    () => "dark",
  )

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

  return (
    <div className="lms-shell flex min-h-screen" data-lms-theme={theme} style={shellStyle}>
      <Sidebar isCollapsed={isCollapsed} theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-1 overflow-y-auto p-3 sm:p-4">
        <div className="flex items-start gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleCollapse}
            className="lms-module-trigger -ml-1 mt-0.5 shrink-0 rounded-xl p-2.5 sm:p-3"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </button>
          <div className="ml-1 min-w-0 flex-1 sm:ml-2">{children}</div>
        </div>
      </main>
    </div>
  )
}
