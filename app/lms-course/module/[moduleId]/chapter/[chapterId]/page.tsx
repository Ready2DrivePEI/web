import Link from "next/link";
import { notFound } from "next/navigation";
import { Play, TrafficCone } from "lucide-react";
import { module1, type Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { module2 } from "@/app/lms-course/data/modules/module2";
import { module3 } from "@/app/lms-course/data/modules/module3";

const modules: Module[] = [module1, module2, module3];

export default async function ChapterOverviewPage({
  params,
}: {
  params: Promise<{ moduleId: string; chapterId: string }>;
}) {
  const { moduleId, chapterId } = await params;

  const currentModule = modules.find((item) => item.id === moduleId || item.slug === moduleId);
  if (!currentModule) return notFound();

  const activeChapter = currentModule.chapters.find(
    (chapter) => chapter.id === chapterId || chapter.slug === chapterId,
  );
  if (!activeChapter) return notFound();

  const firstLessonId = activeChapter.lessons[0]?.id;
  const startHref = firstLessonId
    ? `/lms-course/module/${currentModule.id}/chapter/${activeChapter.id}/lesson/${firstLessonId}`
    : `/lms-course/module/${currentModule.id}`;

  return (
    <div className="lms-lesson-shell relative flex min-h-[80vh] flex-col px-4 py-8 sm:px-6 sm:py-10">
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
                <p className="lms-home-card-copy text-sm capitalize">{chapter.type}</p>
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
