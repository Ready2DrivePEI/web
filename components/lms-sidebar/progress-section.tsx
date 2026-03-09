import { Moon, Sun } from "lucide-react"

/**
 * ProgressFooter Component
 * Displays the global course completion percentage.
 * Initialized at 0% for the start of the course.
 */
export function ProgressFooter({
  percentage = 0,
  isCollapsed = false,
  theme = "dark",
  onToggleTheme,
}: {
  percentage?: number
  isCollapsed?: boolean
  theme?: "dark" | "light"
  onToggleTheme: () => void
}) {
  const isDark = theme === "dark"
  const ThemeIcon = isDark ? Sun : Moon
  const themeActionLabel = isDark ? "Switch to light mode" : "Switch to dark mode"

  if (isCollapsed) {
    return (
      <div className="lms-surface relative mt-auto border-t px-3 py-4">
        <div className="flex flex-col items-center gap-2">
          <span className="lms-progress-value text-xs font-black">{percentage}%</span>
          <div className="lms-progress-track h-1.5 w-full overflow-hidden rounded-full">
            <div
              className="lms-progress-fill h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="lms-surface relative mt-auto border-t p-6">
      <div className="flex justify-between items-end mb-3">
        <div>
          <p className="lms-muted text-xs font-medium tracking-wide uppercase">Overall Course</p>
          <p className="text-sm font-bold">Your Progress</p>
        </div>
        <span className="lms-progress-value text-lg font-black">{percentage}%</span>
      </div>
      
      {/* Progress Bar Track */}
      <div className="lms-progress-track h-2 overflow-hidden rounded-full">
        {/* Progress Bar Fill: 
            The 'duration-1000' ensures a smooth slide animation 
            when the percentage state changes.
        */}
        <div
          className="lms-progress-fill h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="lms-muted text-[10px] italic">
          Begin your first lesson to start tracking progress
        </p>
        <button
          type="button"
          onClick={onToggleTheme}
          className="lms-theme-toggle-icon"
          aria-label={themeActionLabel}
          title={themeActionLabel}
        >
          <ThemeIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
