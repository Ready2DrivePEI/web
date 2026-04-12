import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonView } from "@/app/lms-course/_components/lessonView";
import { chapter1Preview } from "@/app/lms-course/data/preview/chapter1";

export default async function Chapter1PreviewLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  const lessonIndex = chapter1Preview.lessons.findIndex((lesson) => lesson.id === lessonId);
  if (lessonIndex < 0) return notFound();

  const lesson = chapter1Preview.lessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? chapter1Preview.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < chapter1Preview.lessons.length - 1
      ? chapter1Preview.lessons[lessonIndex + 1]
      : null;
  const basePath = "/lms-course/preview/chapter1/lesson";
  const lessonPosition = lessonIndex + 1;
  const lessonTotal = chapter1Preview.lessons.length;
  const progressPercent = Math.round((lessonPosition / lessonTotal) * 100);
  const overviewHref = "/lms-course/preview/chapter1";

  return (
    <div className="lms-lesson-shell relative flex min-h-[80vh] flex-col px-1 pt-2 pb-32 sm:ml-1 sm:px-2 sm:pt-3 sm:pb-36">
      <header className="lms-lesson-header pb-3">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase">{chapter1Preview.title}</p>
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

      <main className="flex-grow pt-4 pb-2 sm:pt-0 sm:pb-0">
        <LessonView content={lesson.content} />
      </main>

      <footer className="fixed right-5 bottom-5 left-5 z-40 sm:left-[calc(var(--lms-sidebar-width,20rem)+1rem)] sm:right-5">
        <div className="lms-floating-footer mx-auto flex w-full max-w-4xl items-center justify-between rounded-2xl border px-3 py-3 sm:px-5">
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
                <Link href={overviewHref}>
                  Back to Overview
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
