import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Lock, Play, TrafficCone } from "lucide-react";
import { courseModules } from "@/app/lms-course/data/modules";
import { ChapterVisitTracker } from "@/app/lms-course/_components/chapter-visit-tracker";
import { getChapterHref, getChapterIndex, isChapterUnlocked } from "@/app/lms-course/data/modules";
import { getServerFurthestChapterId } from "@/lib/lms-progress-server";

export default async function ChapterOverviewPage({
  params,
}: {
  params: Promise<{ moduleId: string; chapterId: string }>;
}) {
  const { moduleId, chapterId } = await params;

  const currentModule = courseModules.find((item) => item.id === moduleId || item.slug === moduleId);
  if (!currentModule) return notFound();

  const activeChapter = currentModule.chapters.find(
    (chapter) => chapter.id === chapterId || chapter.slug === chapterId,
  );
  if (!activeChapter) return notFound();

  const furthestChapterId = await getServerFurthestChapterId();
  const chapterAllowed = isChapterUnlocked(activeChapter.id, furthestChapterId);
  if (!chapterAllowed && furthestChapterId) {
    const fallbackHref = getChapterHref(furthestChapterId);
    if (fallbackHref) redirect(fallbackHref);
  }
  const furthestIndex = furthestChapterId ? getChapterIndex(furthestChapterId) : -1;

  const firstLessonId = activeChapter.lessons[0]?.id;
  const startHref = firstLessonId
    ? `/lms-course/module/${currentModule.id}/chapter/${activeChapter.id}/lesson/${firstLessonId}`
    : `/lms-course/module/${currentModule.id}`;

  return (
    <div className="lms-lesson-shell relative flex min-h-[80vh] flex-col px-4 py-8 sm:px-6 sm:py-10">
      <ChapterVisitTracker chapterId={activeChapter.id} />
      <div className="lms-icon-chip absolute top-6 right-6 rounded-full p-2 shadow-lg">
        <TrafficCone className="h-6 w-6" />
      </div>

      <header className="lms-lesson-header mt-8 mb-8 pb-6 text-center">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase tracking-wide">
          {currentModule.title}
        </p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold sm:text-4xl">
          {activeChapter.title}
        </h1>
        <p className="lms-muted mt-3 text-sm uppercase tracking-wide">
          {currentModule.chapters.length} chapter{currentModule.chapters.length === 1 ? "" : "s"} in this module
        </p>
      </header>

      <div className="mb-12 grid w-full max-w-4xl grid-cols-1 gap-5 self-center sm:grid-cols-2">
        {currentModule.chapters.map((chapter, index) => {
          const chapterLessonId = chapter.lessons[0]?.id;
          const chapterHref = chapterLessonId
            ? `/lms-course/module/${currentModule.id}/chapter/${chapter.id}/lesson/${chapterLessonId}`
            : `/lms-course/module/${currentModule.id}`;
          const isActive = chapter.id === activeChapter.id;
          const chapterIndex = getChapterIndex(chapter.id);
          const chapterUnlocked = isChapterUnlocked(chapter.id, furthestChapterId);
          const isChapterCompleted = chapterIndex <= furthestIndex;

          if (!chapterUnlocked) {
            return (
              <article
                key={chapter.slug}
                className="lms-home-card rounded-xl border p-4 opacity-55"
                aria-label={`${chapter.title} locked`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="lms-accent mb-1 text-lg font-semibold">
                    {index + 1}. {chapter.title}
                  </h2>
                  <Lock className="h-4 w-4 lms-muted" />
                </div>
                <p className="lms-home-card-copy text-sm capitalize">Locked</p>
              </article>
            );
          }

          return (
            <Link key={chapter.slug} href={chapterHref} className="block">
              <article
                className={`lms-home-card rounded-xl border p-4 shadow-sm transition-all ${
                  isActive ? "lms-module-trigger-open" : ""
                }`}
              >
                <h2 className="lms-accent mb-1 text-lg font-semibold">
                  {index + 1}. {chapter.title}
                </h2>
                <p className="lms-home-card-copy text-sm capitalize">
                  {isChapterCompleted ? "Completed" : chapter.type}
                </p>
              </article>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto mb-8 flex justify-center">
        <Link href={startHref} className="lms-home-cta-chip rounded-2xl px-8 py-4 text-base font-bold shadow-md transition-opacity hover:opacity-90">
          Start Chapter
        </Link>
      </div>

      <Play className="lms-muted absolute -right-4 -bottom-4 h-32 w-32 opacity-10 rotate-12" />
    </div>
  );
}
