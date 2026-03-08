/**
 * ProgressFooter Component
 * Displays the global course completion percentage.
 * Initialized at 0% for the start of the course.
 */
export function ProgressFooter({ percentage = 0 }: { percentage?: number }) {
  return (
    <div className="lms-surface border-t p-6">
      <div className="flex justify-between items-end mb-3">
        <div>
          <p className="lms-muted text-xs font-medium tracking-wide uppercase">Overall Course</p>
          <p className="text-sm font-bold">Your Progress</p>
        </div>
        {/* Visual percentage readout */}
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
      
      {/* Dynamic CTA - You can update this text based on milestones later */}
      <p className="lms-muted mt-3 text-center text-[10px] italic">
        Begin your first lesson to start tracking progress
      </p>
    </div>
  )
}
