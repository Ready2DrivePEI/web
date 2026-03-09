"use client"

import {
  Play,
  BookOpen,
  Lock,
  Zap,
  RotateCcw,
  Smartphone,
  Clock,
  ArrowRight,
} from "lucide-react"

export default function LMSHome() {
  return (
    <div className="max-w-5xl">
      <div className="max-w-4xl">
        <h1 className="lms-home-title mb-4 text-4xl font-bold">
          Ready to get your license?
        </h1>
        <p className="lms-home-lead mb-10 max-w-2xl text-lg">
          Welcome to the <span className="lms-accent font-semibold">Driving Theory Masterclass</span>.
          Everything you need to pass your exam is organized into a structured path below.
        </p>

        <section className="mb-16">
          <h2 className="lms-accent mb-6 text-sm font-bold uppercase tracking-[0.2em]">
            The Learning Path
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="lms-home-card group relative overflow-hidden rounded-2xl border p-6">
              <div className="lms-muted absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-110">
                <BookOpen size={40} />
              </div>
              <div className="lms-home-step-chip mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                <span className="font-bold">01</span>
              </div>
              <h3 className="mb-2 text-base font-bold sm:text-lg">Study Lessons</h3>
              <p className="lms-home-card-copy text-sm">
                Watch videos and read interactive theory material for each chapter.
              </p>
            </div>

            <div className="lms-home-card group relative overflow-hidden rounded-2xl border p-6">
              <div className="lms-muted absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-110">
                <Zap size={40} />
              </div>
              <div className="lms-home-step-chip mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                <span className="font-bold">02</span>
              </div>
              <h3 className="mb-2 text-base font-bold sm:text-lg">Pass Quizzes</h3>
              <p className="lms-home-card-copy text-sm">
                Complete a quiz at the end of every chapter to test your knowledge.
              </p>
            </div>

            <div className="lms-home-card group relative overflow-hidden rounded-2xl border p-6">
              <div className="lms-muted absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-110">
                <Lock size={40} />
              </div>
              <div className="lms-home-step-chip mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                <span className="font-bold">03</span>
              </div>
              <h3 className="mb-2 text-base font-bold sm:text-lg">Unlock Chapters</h3>
              <p className="lms-home-card-copy text-sm">
                Passing a quiz unlocks the next section of the course automatically.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <section>
            <h2 className="lms-home-section-title mb-6 flex items-center gap-2 font-bold">
              <div className="lms-accent h-5 w-1 rounded-full" />
              Course Guidelines
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><RotateCcw className="lms-success h-5 w-5" /></div>
                <div>
                  <h4 className="lms-home-section-title font-medium">Infinite Retries</h4>
                  <p className="lms-muted text-sm">
                    Don&apos;t worry about failing a quiz. You have unlimited attempts to master the material.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><Clock className="lms-accent h-5 w-5" /></div>
                <div>
                  <h4 className="lms-home-section-title font-medium">90-Day Access</h4>
                  <p className="lms-muted text-sm">
                    Your enrollment is valid for 90 days. Plenty of time to become an expert.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><Smartphone className="lms-accent h-5 w-5" /></div>
                <div>
                  <h4 className="lms-home-section-title font-medium">Resume Anywhere</h4>
                  <p className="lms-muted text-sm">
                    Your progress syncs across all devices. Start on your PC, finish on your phone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="lms-home-cta relative overflow-hidden rounded-3xl p-8">
            <div className="relative z-10">
              <h2 className="mb-2 text-2xl font-black italic">START YOUR ENGINE</h2>
              <p className="mb-8 font-medium opacity-90">
                Pick the first lesson from the sidebar to begin your journey toward your driving license.
              </p>
              <div className="lms-home-cta-chip flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-bold">
                <ArrowRight className="h-4 w-4" />
                Select a Module to Start
              </div>
            </div>
            <Play className="absolute -right-4 -bottom-4 h-32 w-32 opacity-10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  )
}
