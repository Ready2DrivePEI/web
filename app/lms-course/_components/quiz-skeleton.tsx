export function QuizSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="lms-reading space-y-5 pb-28 text-[0.97rem] leading-7 sm:pb-32 sm:text-base">
      {Array.from({ length: count }).map((_, idx) => (
        <section
          key={idx}
          className="lms-nav-footer animate-pulse space-y-4 rounded-2xl border p-4 sm:p-5"
        >
          <header className="space-y-3">
            {/* Eyebrow / Question Number */}
            <div className="h-3 w-20 rounded bg-muted"></div>
            {/* Question Text */}
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-muted/60"></div>
              <div className="h-4 w-5/6 rounded bg-muted/60"></div>
            </div>
          </header>

          <ul className="space-y-2 pt-1">
            {/* 4 Options */}
            {Array.from({ length: 4 }).map((_, optIdx) => (
              <li
                key={optIdx}
                className="flex items-start gap-3 rounded-xl border px-3 py-3 sm:px-4"
              >
                {/* Radio button skeleton */}
                <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 border-muted bg-muted/20"></div>
                {/* Option text skeleton */}
                <div className="flex w-full gap-2">
                  <div className="h-4 w-3 shrink-0 rounded bg-muted/40"></div>
                  <div
                    className="h-4 rounded bg-muted/40"
                    style={{
                      width: `${[60, 80, 45, 90][optIdx]}%`,
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Floating Footer Skeleton */}
      <footer className="fixed bottom-5 left-5 right-5 z-40 sm:left-[calc(var(--lms-sidebar-width,20rem)+1rem)] sm:right-5">
        <div className="lms-floating-footer mx-auto flex w-fit max-w-full items-center gap-3 rounded-2xl border px-3 py-2.5">
          <div className="h-4 w-32 rounded bg-muted/50"></div>
          <div className="h-10 w-28 rounded-md bg-muted"></div>
        </div>
      </footer>
    </div>
  );
}
