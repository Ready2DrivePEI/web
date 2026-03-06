"use client"

import Link from "next/link"
import { TrafficCone, Play } from "lucide-react"

// Import all modules manually
import { module1, module2, module3 } from "@/app/lms-course/data/modules/module1"

const modules = [module1, module2, module3]

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  const { moduleId } = params
  const module = modules.find(m => m.slug === moduleId)

  if (!module) return <div className="p-6 text-white">Module not found</div>

  const firstChapterSlug = module.chapters[0]?.slug || ""

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-200 flex flex-col items-center p-6">
      
      {/* Floating Badge */}
      <div className="absolute top-6 right-6 bg-amber-500 p-2 rounded-full shadow-lg">
        <TrafficCone className="h-6 w-6 text-slate-900 animate-bounce" />
      </div>

      {/* Module Header */}
      <div className="max-w-3xl text-center mt-12 mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">{module.title}</h1>
        <p className="text-slate-400 text-sm uppercase tracking-wide">
          {module.chapters.length} lessons
        </p>
      </div>

      {/* Chapter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full mb-12">
        {module.chapters.map((chapter, index) => (
          <div
            key={chapter.slug}
            className="bg-slate-800/40 p-4 rounded-xl shadow-lg hover:bg-slate-800/60 transition"
          >
            <h2 className="text-lg font-semibold text-amber-400 mb-1">
              {index + 1}. {chapter.title}
            </h2>
            <p className="text-slate-300 text-sm truncate">{chapter.type}</p>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <Link href={`/course/${module.slug}/${firstChapterSlug}`} className="mt-auto mb-12">
        <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-2xl shadow-lg transition-all">
          Start Module
        </button>
      </Link>

      {/* Decorative background icon */}
      <Play className="absolute -bottom-4 -right-4 h-32 w-32 opacity-10 rotate-12" />
    </div>
  )
}