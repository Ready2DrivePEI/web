"use client"

import { useEffect, useState } from "react"
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
import Link from "next/link"
import { getFirstChapterId, getChapterHref } from "@/app/lms-course/data/modules"

export default function LMSHome() {
  const firstChapterId = getFirstChapterId();
  const startHref = firstChapterId ? (getChapterHref(firstChapterId) ?? "/lms-course") : "/lms-course";
 
  const [hasStarted, setHasStarted] = useState(false);
  const [targetHref, setTargetHref] = useState(startHref);
 
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("r2d:progress:last-path");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed.path && parsed.path.startsWith("/lms-course")) {
          setHasStarted(true);
          setTargetHref(parsed.path);
        }
      } catch {
        // Fallback
      }
    }
  }, [startHref]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById("lms-home-header");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-5xl">
      <div className="max-w-4xl">
        <h1 id="lms-home-header" className="lms-home-title mb-2 text-3xl sm:text-4xl font-bold scroll-mt-6">
          Ready to get your licence?
        </h1>
        <p className="lms-home-lead mb-6 max-w-2xl text-base sm:text-lg">
          Welcome to the <span className="lms-accent font-semibold">Driving Theory Masterclass</span>.
          Everything you need to pass your exam is organized into a structured path below.
        </p>

        <section className="mb-8">
          <h2 className="lms-accent mb-3 text-xs font-bold uppercase tracking-[0.2em]">
            The Learning Path
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="lms-home-card group relative overflow-hidden rounded-2xl border p-5 sm:p-6">
              <div className="lms-muted absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110">
                <BookOpen size={40} />
              </div>
              <div className="lms-home-step-chip mb-3 flex h-9 w-9 items-center justify-center rounded-lg">
                <span className="font-bold text-sm">01</span>
              </div>
              <h3 className="mb-1.5 text-base font-bold sm:text-lg">Study Lessons</h3>
              <p className="lms-home-card-copy text-sm">
                Watch videos and read interactive theory material for each chapter.
              </p>
            </div>

            <div className="lms-home-card group relative overflow-hidden rounded-2xl border p-5 sm:p-6">
              <div className="lms-muted absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110">
                <Zap size={40} />
              </div>
              <div className="lms-home-step-chip mb-3 flex h-9 w-9 items-center justify-center rounded-lg">
                <span className="font-bold text-sm">02</span>
              </div>
              <h3 className="mb-1.5 text-base font-bold sm:text-lg">Pass Quizzes</h3>
              <p className="lms-home-card-copy text-sm">
                Complete a quiz at the end of every chapter to test your knowledge.
              </p>
            </div>

            <div className="lms-home-card group relative overflow-hidden rounded-2xl border p-5 sm:p-6">
              <div className="lms-muted absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110">
                <Lock size={40} />
              </div>
              <div className="lms-home-step-chip mb-3 flex h-9 w-9 items-center justify-center rounded-lg">
                <span className="font-bold text-sm">03</span>
              </div>
              <h3 className="mb-1.5 text-base font-bold sm:text-lg">Unlock Chapters</h3>
              <p className="lms-home-card-copy text-sm">
                Passing a quiz unlocks the next section of the course automatically.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <section>
            <h2 className="lms-home-section-title mb-3 flex items-center gap-2 font-bold">
              <div className="lms-accent h-5 w-1 rounded-full" />
              Course Guidelines
            </h2>
            <div className="space-y-3.5">
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

          <div className="lms-home-cta relative overflow-hidden rounded-3xl p-6 sm:p-7">
            <div className="relative z-10">
              <h2 className="mb-2 text-2xl font-black italic">START YOUR ENGINE</h2>
              <p className="mb-5 font-medium opacity-90 text-sm sm:text-base">
                Launch the course content viewer to begin or resume your journey toward your driving licence.
              </p>
              <Link
                href={targetHref}
                className="lms-home-cta-chip inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[var(--lms-accent)] outline-none"
              >
                <ArrowRight className="h-4 w-4" />
                {hasStarted ? "Resume Course" : "Start Course"}
              </Link>
            </div>
            <Play className="absolute -right-4 -bottom-4 h-32 w-32 opacity-20 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  )
}
