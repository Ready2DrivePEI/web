"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronRight, CheckCircle2, Circle, Car, IdCard, ShieldAlert, ClipboardCheck } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// 1. Import the Interface
import { module1, type Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { module2 } from "@/app/lms-course/data/modules/module2";
import { module3 } from "@/app/lms-course/data/modules/module3";

// 2. Explicitly type the modules array
const modules: Module[] = [
  { ...module1, icon: IdCard },
  { ...(module2 as Module), icon: ShieldAlert }, 
  { ...(module3 as Module), icon: ClipboardCheck },
]

export function ModuleList({ isCollapsed = false }: { isCollapsed?: boolean }) {
  const pathname = usePathname()
  const [openModule, setOpenModule] = useState<string | null>(modules[0]?.slug ?? null)

  if (isCollapsed) {
    return (
      <nav className="custom-scrollbar flex-1 overflow-y-auto px-2 py-4">
        <div className="space-y-2">
          {modules.map((module) => {
            const ModuleIcon = module.icon || Car
            const firstChapterId = module.chapters[0]?.id
            const firstLessonId = module.chapters[0]?.lessons?.[0]?.id || "pg1"
            const href = firstChapterId
              ? `/lms-course/module/${module.id}/chapter/${firstChapterId}/lesson/${firstLessonId}`
              : `/lms-course/module/${module.id}`
            const isActive = pathname.includes(`/module/${module.id}/`)

            return (
              <Link
                key={module.slug}
                href={href}
                className="block"
                aria-label={module.title}
                title={module.title}
              >
                <div
                  className={`lms-module-trigger flex h-12 items-center justify-center rounded-xl ${
                    isActive ? "lms-module-trigger-open" : ""
                  }`}
                >
                  <ModuleIcon className={`h-5 w-5 ${isActive ? "lms-success" : "lms-muted"}`} />
                </div>
              </Link>
            )
          })}
        </div>
      </nav>
    )
  }

  return (
    <nav className="custom-scrollbar flex-1 space-y-2 overflow-y-auto px-4 py-6">
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
                className={`lms-module-trigger flex w-full items-center justify-between rounded-xl px-3 py-3 text-[0.95rem] font-semibold ${
                  isOpen ? "lms-module-trigger-open" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <ModuleIcon className={`h-5 w-5 ${isOpen ? "lms-success" : "lms-muted"}`} />
                  <span className="lms-module-title">{module.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="lms-count-chip rounded px-1.5 py-0.5 text-[10px]">
                    {completedCount}/{module.chapters.length}
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
                </div>
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="lms-border mt-1 ml-4 space-y-1 overflow-hidden border-l transition-all">
              {module.chapters.map((chapter) => {
                // FIXED: TypeScript now knows 'lessons' and 'id' exist because of the Module interface
                const firstLessonId = chapter.lessons?.[0]?.id || "pg1";
                const href = `/lms-course/module/${module.id}/chapter/${chapter.id}/lesson/${firstLessonId}`;
                const isActive = pathname.includes(`/chapter/${chapter.id}`);
                
                const isChapterDone = chapter.completed || chapter.title === "Traffic Lights & Signals";

                return (
                  <Link key={chapter.id} href={href} className="block group/item">
                    <div
                      className={`lms-chapter-item flex items-center justify-between rounded-r-lg border-l-2 border-transparent px-4 py-2.5 text-sm ${
                        isActive
                          ? "lms-chapter-item-active font-medium"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isChapterDone ? (
                          <CheckCircle2 className="lms-success h-4 w-4" />
                        ) : (
                          <Circle className="h-4 w-4 opacity-35" />
                        )}
                        <span className="lms-chapter-title truncate">{chapter.title}</span>
                      </div>
                      <span className="text-[9px] uppercase opacity-60 font-bold group-hover/item:opacity-100 transition-opacity">
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
