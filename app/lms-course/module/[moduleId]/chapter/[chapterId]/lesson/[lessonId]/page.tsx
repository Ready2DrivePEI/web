// app/lms-course/module/[moduleId]/chapter/[chapterId]/lesson/[lessonId]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { module1, type Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { module2 } from "@/app/lms-course/data/modules/module2";
import { module3 } from "@/app/lms-course/data/modules/module3";
import { LessonView } from "@/app/lms-course/_components/lessonView";

const modules: Module[] = [module1, module2, module3];

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; chapterId: string; lessonId: string }>;
}) {
  const { moduleId, chapterId, lessonId } = await params;

  const currentModule = modules.find((module) => module.id === moduleId);
  if (!currentModule) return notFound();

  const currentChapter = currentModule.chapters.find((c) => c.id === chapterId);

  if (!currentChapter) return notFound();

  const lessonIndex = currentChapter.lessons.findIndex((l) => l.id === lessonId);
  const lesson = currentChapter.lessons[lessonIndex];

  if (!lesson) return notFound();

  const prevLesson = lessonIndex > 0 ? currentChapter.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < currentChapter.lessons.length - 1 ? currentChapter.lessons[lessonIndex + 1] : null;
  const basePath = `/lms-course/module/${moduleId}/chapter/${chapterId}/lesson`;
  const lessonPosition = lessonIndex + 1;
  const lessonTotal = currentChapter.lessons.length;
  const progressPercent = Math.round((lessonPosition / lessonTotal) * 100);
  const quizHref = `/lms-course/module/${moduleId}/chapter/${chapterId}/quizz/${chapterId}-quiz`;

  return (
    <div className="lms-lesson-shell relative flex min-h-[80vh] flex-col px-1 pt-6 pb-32 sm:-ml-1 sm:px-2 sm:pb-36">
      <header className="lms-lesson-header pb-3">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase">{currentChapter.title}</p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">{lesson.title}</h1>
        <div className="mt-2.5 flex flex-wrap items-center gap-3 text-sm">
          <span className="lms-muted">
            Lesson {lessonPosition} of {lessonTotal}
          </span>
          <span className="lms-muted hidden sm:inline">|</span>
          <span className="lms-progress-pill rounded-full px-3 py-1 font-medium">
            {progressPercent}% chapter progress
          </span>
        </div>
      </header>

      <main className="flex-grow pt-7 pb-4 sm:pt-0 sm:pb-6">
        <LessonView content={lesson.content} />
      </main>

      <footer className="fixed right-5 bottom-5 left-5 z-40 sm:left-[calc(var(--lms-sidebar-width,20rem)+0.75rem)] sm:right-5">
        <div className="lms-floating-footer mx-auto flex w-full max-w-3xl items-center justify-between rounded-2xl border px-3 py-3 sm:px-5">
          <div className="min-h-9">
            {prevLesson ? (
              <Button variant="outline" asChild className="lms-button-outline lms-prev-lesson-btn">
                <Link href={`${basePath}/${prevLesson.id}`}>
                  <ChevronLeft />
                  Previous Lesson
                </Link>
              </Button>
            ) : (
              <span className="lms-start-chip inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium">
                Start of chapter
              </span>
            )}
          </div>

          <div className="min-h-9 flex justify-end">
            {nextLesson ? (
              <Button asChild>
                <Link href={`${basePath}/${nextLesson.id}`}>
                  Next Lesson
                  <ChevronRight />
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href={quizHref}>
                  Take Quiz
                  <ChevronRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
