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
  onNavigate,
}: {
  isCollapsed?: boolean;
  furthestChapterId?: string | null;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [manuallyOpenModules, setManuallyOpenModules] = useState<Record<string, boolean>>({});
  const fallbackFurthestChapterId = getFirstChapterId();
  const resolvedFurthestChapterId = furthestChapterId ?? fallbackFurthestChapterId;
  const furthestIndex = resolvedFurthestChapterId ? getChapterIndex(resolvedFurthestChapterId) : -1;
  const activeModuleSlug = modules.find((module) => pathname.includes(`/module/${module.id}/`))?.slug ?? null;

  if (isCollapsed) {
    return (
      <nav className="custom-scrollbar flex-1 overflow-y-auto px-1 sm:px-2 py-3 sm:py-4">
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
                  <Link href={href} aria-label={module.title} title={module.title} onClick={onNavigate}>
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
    <nav className="custom-scrollbar flex-1 space-y-2 overflow-y-auto px-2 py-3 sm:px-4 sm:py-6">
      {modules.map((module) => {
        const isOpen =
          manuallyOpenModules[module.slug] !== undefined
            ? manuallyOpenModules[module.slug]
            : activeModuleSlug === module.slug;
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
                className={`lms-module-trigger group/module flex w-full items-center justify-between rounded-xl px-1.5 py-2.5 sm:px-3 sm:py-3 text-xs sm:text-[0.95rem] font-semibold ${
                  isOpen ? "lms-module-trigger-open" : ""
                } ${!hasUnlockedChapter ? "opacity-60 text-muted-foreground" : ""}`}
              >
                <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
                  {hasUnlockedChapter ? (
                    <ModuleIcon className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 ${isOpen ? (isAssessment ? "lms-warning" : "lms-success") : "lms-muted"}`} />
                  ) : (
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 lms-muted" />
                  )}
                  <TruncatedLabel text={module.title} className="lms-module-title text-left" />
                </div>
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                  {isAssessment ? (
                    <span className="inline-flex items-center rounded-full border border-blue-200/50 bg-blue-50/50 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase text-blue-600 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-400 leading-none shrink-0" aria-hidden="true">
                      EXAM
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-[var(--lms-border)] bg-[var(--lms-surface-2)] px-2 py-0.5 text-[10px] font-bold text-[var(--lms-text-muted)] leading-none shrink-0" aria-hidden="true">
                      {completedCount}/{module.chapters.length}
                    </span>
                  )}
                  <ChevronRight
                    className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                  />
                </div>
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="lms-border mt-1 ml-2 sm:ml-4 space-y-1 overflow-hidden border-l transition-all">
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
                      className="lms-chapter-item flex items-center justify-between rounded-xl px-2 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm opacity-70"
                      aria-label={`${chapter.title} locked. Complete previous chapter quiz to unlock.`}
                      title="Complete previous chapter quiz to unlock"
                    >
                      <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
                        <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 opacity-65" />
                        <TruncatedLabel text={chapter.title} className="lms-chapter-title text-left" />
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={chapter.id}
                    href={href}
                    className="block group/item"
                    aria-label={`${chapter.title} (${chapter.type})`}
                    onClick={onNavigate}
                  >
                    <div
                      className={`lms-chapter-item flex items-center justify-between rounded-xl px-2 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm ${
                        isActive ? "lms-chapter-item-active font-semibold" : ""
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
                        {isChapterDone ? (
                          <CheckCircle2 className="lms-success h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                        ) : (
                          <Circle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 opacity-35" />
                        )}
                        <TruncatedLabel text={chapter.title} className="lms-chapter-title text-left" />
                      </div>
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
