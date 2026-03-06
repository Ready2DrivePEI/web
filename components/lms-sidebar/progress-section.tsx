/**
 * ProgressFooter Component
 * Displays the global course completion percentage.
 * Initialized at 0% for the start of the course.
 */
export function ProgressFooter({ percentage = 0 }: { percentage?: number }) {
  return (
    <div className="p-6 bg-slate-900/50 border-t border-slate-800">
      <div className="flex justify-between items-end mb-3">
        <div>
          <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Overall Course</p>
          <p className="text-sm font-bold text-white">Your Progress</p>
        </div>
        {/* Visual percentage readout */}
        <span className="text-lg font-black text-blue-500">{percentage}%</span>
      </div>
      
      {/* Progress Bar Track */}
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        {/* Progress Bar Fill: 
            The 'duration-1000' ensures a smooth slide animation 
            when the percentage state changes.
        */}
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-amber-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Dynamic CTA - You can update this text based on milestones later */}
      <p className="text-[10px] text-slate-500 mt-3 text-center italic">
        Begin your first lesson to start tracking progress
      </p>
    </div>
  )
}