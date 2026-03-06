"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronRight, CheckCircle2, Circle, Car, ShieldAlert, ClipboardCheck } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// 1. Import the Interface
import { module1, type Module } from "@/app/lms-course/data/modules/module1";
import { module2 } from "@/app/lms-course/data/modules/module2";
import { module3 } from "@/app/lms-course/data/modules/module3";

// 2. Explicitly type the modules array
const modules: Module[] = [
  { ...module1, icon: Car },
  { ...(module2 as Module), icon: ShieldAlert }, 
  { ...(module3 as Module), icon: ClipboardCheck },
]

export function ModuleList() {
  const pathname = usePathname()
  const [openModule, setOpenModule] = useState<string | null>("rules-of-the-road")

  return (
    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
      {modules.map((module) => {
        const isOpen = openModule === module.slug
        const ModuleIcon = module.icon || Car; // Fallback icon
        
        const completedCount = module.chapters.filter(c => 
            c.completed || c.title === "Traffic Lights & Signals"
        ).length

        return (
          <Collapsible
            key={module.slug}
            open={isOpen}
            onOpenChange={() => setOpenModule(isOpen ? null : module.slug)}
            className="group"
          >
            <CollapsibleTrigger asChild>
              <button
                className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isOpen ? "bg-slate-800/50 text-white" : "hover:bg-slate-800/30 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <ModuleIcon className={`h-5 w-5 ${isOpen ? "text-green-500" : "text-slate-500"}`} />
                  <span>{module.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-400">
                    {completedCount}/{module.chapters.length}
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
                </div>
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-1 ml-4 border-l border-slate-800 space-y-1 overflow-hidden transition-all">
              {module.chapters.map((chapter) => {
                // FIXED: TypeScript now knows 'lessons' and 'id' exist because of the Module interface
                const firstLessonId = chapter.lessons?.[0]?.id || "pg1";
                const href = `/lms-course/module/${module.id}/chapter/${chapter.id}/lesson/${firstLessonId}`;
                const isActive = pathname.includes(`/chapter/${chapter.id}`);
                
                const isChapterDone = chapter.completed || chapter.title === "Traffic Lights & Signals";

                return (
                  <Link key={chapter.id} href={href} className="block group/item">
                    <div
                      className={`flex items-center justify-between py-2.5 px-4 rounded-r-lg text-sm transition-all ${
                        isActive
                          ? "bg-amber-500/10 text-blue-400 font-medium border-l-2 border-amber-500"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isChapterDone ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <Circle className="h-4 w-4 opacity-20" />
                        )}
                        <span className="truncate">{chapter.title}</span>
                      </div>
                      <span className="text-[9px] uppercase opacity-40 font-bold group-hover/item:opacity-100 transition-opacity">
                        {chapter.type}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </nav>
  )
}