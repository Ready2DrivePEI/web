"use client"

import { 
  Play, 
  BookOpen, 
  Lock, 
  Zap, 
  RotateCcw, 
  Smartphone, 
  Clock, 
  ArrowRight 
} from "lucide-react"

export default function LMSHome() {
  return (
    <div className="max-w-5xl">
      {/* Hero Section */}
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">
          Ready to get your license?
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl">
          Welcome to the <span className="text-blue-500 font-semibold">Driving Theory Masterclass</span>. 
          Everything you need to pass your exam is organized into a structured path below.
        </p>

        {/* The Progression Logic */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-6">
            The Learning Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <BookOpen size={40} />
              </div>
              <div className="bg-blue-600/10 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">01</span>
              </div>
              <h3 className="text-white font-bold mb-2">Study Lessons</h3>
              <p className="text-sm text-slate-400">Watch videos and read interactive theory material for each chapter.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Zap size={40} />
              </div>
              <div className="bg-blue-600/10 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">02</span>
              </div>
              <h3 className="text-white font-bold mb-2">Pass Quizzes</h3>
              <p className="text-sm text-slate-400">Complete a quiz at the end of every chapter to test your knowledge.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Lock size={40} />
              </div>
              <div className="bg-blue-600/10 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">03</span>
              </div>
              <h3 className="text-white font-bold mb-2">Unlock Chapters</h3>
              <p className="text-sm text-slate-400">Passing a quiz unlocks the next section of the course automatically.</p>
            </div>
          </div>
        </section>

        {/* Course Rules/Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section>
            <h2 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-blue-600 rounded-full" />
              Course Guidelines
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><RotateCcw className="text-emerald-600 h-5 w-5" /></div>
                <div>
                  <h4 className="text-slate-200 font-medium">Infinite Retries</h4>
                  <p className="text-sm text-slate-400">Don't worry about failing a quiz. You have unlimited attempts to master the material.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><Clock className="text-blue-600 h-5 w-5" /></div>
                <div>
                  <h4 className="text-slate-200 font-medium">90-Day Access</h4>
                  <p className="text-sm text-slate-400">Your enrollment is valid for 90 days. Plenty of time to become an expert.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><Smartphone className="text-blue-400 h-5 w-5" /></div>
                <div>
                  <h4 className="text-slate-200 font-medium">Resume Anywhere</h4>
                  <p className="text-sm text-slate-400">Your progress syncs across all devices. Start on your PC, finish on your phone.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Area */}
          <div className="bg-blue-500 rounded-3xl p-8 text-slate-950 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-black mb-2 italic">START YOUR ENGINE</h2>
              <p className="font-medium mb-8 opacity-80">
                Pick the first lesson from the sidebar to begin your journey toward your driving license.
              </p>
              <div className="flex items-center gap-2 font-bold text-sm bg-slate-950 text-white w-fit px-5 py-3 rounded-full">
                <ArrowRight className="h-4 w-4" />
                Select a Module to Start
              </div>
            </div>
            {/* Decorative background icon */}
            <Play className="absolute -bottom-4 -right-4 h-32 w-32 opacity-10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  )
}