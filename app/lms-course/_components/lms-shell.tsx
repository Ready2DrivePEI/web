"use client"

import type { ReactNode } from "react"
import { useSyncExternalStore } from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import Sidebar from "@/components/lms-sidebar"

type LMSTheme = "dark" | "light"

const COLLAPSE_STORAGE_KEY = "r2d-sidebar-collapsed"
const THEME_STORAGE_KEY = "r2d-lms-theme"
const COLLAPSE_EVENT = "r2d:lms-collapse-change"
const THEME_EVENT = "r2d:lms-theme-change"

const subscribeToStorage = (
  customEventName: string,
  onStoreChange: () => void,
) => {
  if (typeof window === "undefined") {
    return () => {}
  }

  const handler = () => onStoreChange()
  window.addEventListener("storage", handler)
  window.addEventListener(customEventName, handler)

  return () => {
    window.removeEventListener("storage", handler)
    window.removeEventListener(customEventName, handler)
  }
}

const getCollapseSnapshot = () => {
  if (typeof window === "undefined") return false
  return localStorage.getItem(COLLAPSE_STORAGE_KEY) === "true"
}

const getThemeSnapshot = (): LMSTheme => {
  if (typeof window === "undefined") return "dark"
  return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark"
}

export function LMSShell({ children }: { children: ReactNode }) {
  const isCollapsed = useSyncExternalStore(
    (onStoreChange) => subscribeToStorage(COLLAPSE_EVENT, onStoreChange),
    getCollapseSnapshot,
    () => false,
  )

  const theme = useSyncExternalStore(
    (onStoreChange) => subscribeToStorage(THEME_EVENT, onStoreChange),
    getThemeSnapshot,
    () => "dark",
  )

  const toggleCollapse = () => {
    const next = !isCollapsed
    localStorage.setItem(COLLAPSE_STORAGE_KEY, String(next))
    window.dispatchEvent(new Event(COLLAPSE_EVENT))
  }

  const toggleTheme = () => {
    const next: LMSTheme = theme === "dark" ? "light" : "dark"
    localStorage.setItem(THEME_STORAGE_KEY, next)
    window.dispatchEvent(new Event(THEME_EVENT))
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
