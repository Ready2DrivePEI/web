import { module1, type Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { module2 } from "@/app/lms-course/data/modules/module2";
import { module3 } from "@/app/lms-course/data/modules/module3";

// Temporary default: keep locks bypassed unless explicitly set to "false".
const LMS_BYPASS_LOCKS = process.env.NEXT_PUBLIC_LMS_BYPASS_LOCKS !== "false";

export interface OrderedChapter {
  index: number;
  moduleId: string;
  moduleTitle: string;
  chapterId: string;
  chapterTitle: string;
  firstLessonId: string | null;
}

export const courseModules: Module[] = [module1, module2 as Module, module3 as Module];

export const orderedChapters: OrderedChapter[] = courseModules.flatMap((module, moduleIndex) =>
  module.chapters.map((chapter, chapterIndex) => ({
    index:
      courseModules
        .slice(0, moduleIndex)
        .reduce((count, item) => count + item.chapters.length, 0) + chapterIndex,
    moduleId: module.id,
    moduleTitle: module.title,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    firstLessonId: chapter.lessons[0]?.id ?? null,
  })),
);

export function getFirstChapterId(): string | null {
  return orderedChapters[0]?.chapterId ?? null;
}

export function getChapterIndex(chapterId: string): number {
  return orderedChapters.findIndex((chapter) => chapter.chapterId === chapterId);
}

export function getChapterById(chapterId: string): OrderedChapter | null {
  return orderedChapters.find((chapter) => chapter.chapterId === chapterId) ?? null;
}

export function getChapterHref(chapterId: string): string | null {
  const chapter = getChapterById(chapterId);
  if (!chapter?.firstLessonId) return null;
  return `/lms-course/module/${chapter.moduleId}/chapter/${chapter.chapterId}/lesson/${chapter.firstLessonId}`;
}

export function getNextChapter(currentChapterId: string): OrderedChapter | null {
  const currentIndex = getChapterIndex(currentChapterId);
  if (currentIndex < 0) return null;
  return orderedChapters[currentIndex + 1] ?? null;
}

export function isChapterUnlocked(chapterId: string, furthestChapterId: string | null): boolean {
  if (LMS_BYPASS_LOCKS) return true;

  if (!furthestChapterId) {
    const firstChapterId = getFirstChapterId();
    return Boolean(firstChapterId && chapterId === firstChapterId);
  }

  const furthestIndex = getChapterIndex(furthestChapterId);
  const chapterIndex = getChapterIndex(chapterId);
  if (furthestIndex < 0 || chapterIndex < 0) return false;
  return chapterIndex <= furthestIndex;
}

export function isLmsBypassLocksEnabled(): boolean {
  return LMS_BYPASS_LOCKS;
}

export function getProgressPercentForChapter(chapterId: string | null): number {
  if (!chapterId || orderedChapters.length === 0) return 0;
  const chapterIndex = getChapterIndex(chapterId);
  if (chapterIndex < 0) return 0;
  return Math.round(((chapterIndex + 1) / orderedChapters.length) * 100);
}
