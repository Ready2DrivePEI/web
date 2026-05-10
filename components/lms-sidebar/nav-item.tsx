"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronRight,
  CheckCircle2,
  Circle,
  Lock,
  Car,
  IdCard,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TruncatedLabel } from "./truncated-label";
import { courseModules, getChapterHref, getChapterIndex, getFirstChapterId, isChapterUnlocked } from "@/app/lms-course/data/modules";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";

const modules: Module[] = courseModules.map((module) => {
  if (module.id === "module1") return { ...module, icon: IdCard };
  if (module.id === "module2") return { ...module, icon: ShieldAlert };
  if (module.id === "module3") return { ...module, icon: ClipboardCheck };
  return module;
});

export function ModuleList({
  isCollapsed = false,
  furthestChapterId = null,
}: {
  isCollapsed?: boolean;
  furthestChapterId?: string | null;
}) {
  const pathname = usePathname();
  const [manuallyOpenModules, setManuallyOpenModules] = useState<Record<string, boolean>>({});
  const fallbackFurthestChapterId = getFirstChapterId();
  const resolvedFurthestChapterId = furthestChapterId ?? fallbackFurthestChapterId;
  const furthestIndex = resolvedFurthestChapterId ? getChapterIndex(resolvedFurthestChapterId) : -1;
  const activeModuleSlug = modules.find((module) => pathname.includes(`/module/${module.id}/`))?.slug ?? null;

  if (isCollapsed) {
    return (
      <nav className="custom-scrollbar flex-1 overflow-y-auto px-2 py-4">
        <div className="space-y-2">
          {modules.map((module) => {
            const ModuleIcon = module.icon || Car
            const firstChapterId = module.chapters[0]?.id
            const firstLessonId = module.chapters[0]?.lessons?.[0]?.id || "pg1"
            const href = firstChapterId
              ? (getChapterHref(firstChapterId) ??
                `/lms-course/module/${module.id}/chapter/${firstChapterId}/lesson/${firstLessonId}`)
              : `/lms-course/module/${module.id}`
            const isActive = pathname.startsWith(href) || pathname.includes(`/module/${module.id}/`);
            const hasUnlockedChapter = module.chapters.some((chapter) =>
              isChapterUnlocked(chapter.id, resolvedFurthestChapterId),
            );

            const isAssessment = module.id === "midsem" || module.id === "final";

            return (
              <div
                key={module.slug}
                className="block"
              >
                {hasUnlockedChapter ? (
                  <Link href={href} aria-label={module.title} title={module.title}>
                    <div
                      className={`lms-module-trigger flex h-12 items-center justify-center rounded-xl ${isActive ? "lms-module-trigger-open" : ""
                        }`}
                    >
                      <ModuleIcon className={`h-5 w-5 shrink-0 ${isActive ? (isAssessment ? "lms-warning" : "lms-success") : "lms-muted"}`} />
                    </div>
                  </Link>
                ) : (
                  <div
                    className="lms-module-trigger flex h-12 items-center justify-center rounded-xl opacity-45"
                    aria-label={`${module.title} locked`}
                    title={`${module.title} locked`}
                  >
                    <Lock className="h-5 w-5 lms-muted" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav className="custom-scrollbar flex-1 space-y-2 overflow-y-auto px-4 py-6">
      {modules.map((module) => {
        const isOpen = Boolean(manuallyOpenModules[module.slug]) || activeModuleSlug === module.slug;
        const ModuleIcon = module.icon || Car; // Fallback icon
        const completedCount = module.chapters.filter(
          (chapter) => getChapterIndex(chapter.id) <= furthestIndex,
        ).length;
        const hasUnlockedChapter = module.chapters.some((chapter) =>
          isChapterUnlocked(chapter.id, resolvedFurthestChapterId),
        );

        const isAssessment = module.id === "midsem" || module.id === "final";

        return (
          <Collapsible
            key={module.slug}
            open={isOpen}
            onOpenChange={(open) => {
              setManuallyOpenModules((prev) => ({
                ...prev,
                [module.slug]: open,
              }));
            }}
            className="group"
          >
            <CollapsibleTrigger asChild>
              <button
                type="button"
                aria-label={module.title}
                className={`lms-module-trigger group/module flex w-full items-center justify-between rounded-xl px-3 py-3 text-[0.95rem] font-semibold ${isOpen ? "lms-module-trigger-open" : ""
                  }`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  {hasUnlockedChapter ? (
                    <ModuleIcon className={`h-5 w-5 shrink-0 ${isOpen ? (isAssessment ? "lms-warning" : "lms-success") : "lms-muted"}`} />
                  ) : (
                    <Lock className="h-5 w-5 shrink-0 lms-muted" />
                  )}
                  <TruncatedLabel text={module.title} className="lms-module-title text-left" />
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {isAssessment ? (
                    <span className="lms-accent rounded bg-[var(--lms-active-bg)] px-1 py-[1px] text-[9px] font-medium tracking-wider" aria-hidden="true">
                      EXAM
                    </span>
                  ) : (
                    <span className="lms-count-chip rounded px-1.5 py-0.5 text-[10px]" aria-hidden="true">
                      {completedCount}/{module.chapters.length}
                    </span>
                  )}
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                  />
                </div>
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="lms-border mt-1 ml-4 space-y-1 overflow-hidden border-l transition-all">
              {module.chapters.map((chapter) => {
                const firstLessonId = chapter.lessons?.[0]?.id || "pg1";
                const href =
                  getChapterHref(chapter.id) ??
                  `/lms-course/module/${module.id}/chapter/${chapter.id}/lesson/${firstLessonId}`;
                const isActive = pathname.startsWith(href) || pathname.includes(`/chapter/${chapter.id}`);
                const chapterIndex = getChapterIndex(chapter.id);
                const isChapterDone = chapterIndex <= furthestIndex;
                const chapterUnlocked = isChapterUnlocked(chapter.id, resolvedFurthestChapterId);

                if (!chapterUnlocked) {
                  return (
                    <div
                      key={chapter.id}
                      className="lms-chapter-item flex items-center justify-between rounded-r-lg border-l-2 border-transparent px-4 py-2.5 text-sm opacity-50"
                      aria-label={`${chapter.title} locked`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <Lock className="h-4 w-4 shrink-0 opacity-65" />
                        <TruncatedLabel text={chapter.title} className="lms-chapter-title text-left" />
                      </div>
                      <TruncatedLabel
                        text="locked"
                        className="text-[9px] font-bold uppercase opacity-60"
                        containerClassName="ml-3 max-w-20 shrink-0"
                      />
                    </div>
                  );
                }

                return (
                  <Link
                    key={chapter.id}
                    href={href}
                    className="block group/item"
                    aria-label={`${chapter.title} (${chapter.type})`}
                  >
                    <div
                      className={`lms-chapter-item flex items-center justify-between rounded-r-lg border-l-2 border-transparent px-4 py-2.5 text-sm ${isActive ? "lms-chapter-item-active font-medium" : ""
                        }`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        {isChapterDone ? (
                          <CheckCircle2 className="lms-success h-4 w-4 shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 shrink-0 opacity-35" />
                        )}
                        <TruncatedLabel text={chapter.title} className="lms-chapter-title text-left" />
                      </div>
                      <TruncatedLabel
                        text={chapter.type}
                        className={`text-[9px] font-medium uppercase transition-opacity group-hover/item:opacity-100 ${
                          isAssessment ? "text-[var(--lms-text)] opacity-80" : "opacity-60"
                        }`}
                        containerClassName="ml-3 max-w-20 shrink-0"
                      />
                    </div>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </nav>
  );
}
