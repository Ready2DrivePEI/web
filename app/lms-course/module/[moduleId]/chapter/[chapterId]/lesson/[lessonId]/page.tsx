// app/lms-course/module/[moduleId]/chapter/[chapterId]/lesson/[lessonId]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { module1 } from "@/app/lms-course/data/modules/module1/chapter1";
import { LessonView } from "@/app/lms-course/_components/lessonView";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; chapterId: string; lessonId: string }>;
}) {
  const { moduleId, chapterId, lessonId } = await params;

  const currentModule = module1;
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

  return (
    <div className="lms-lesson-shell flex min-h-[80vh] flex-col px-4 py-8 sm:px-6 sm:py-10">
      <header className="lms-lesson-header pb-6">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase">{currentChapter.title}</p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">{lesson.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="lms-muted">
            Lesson {lessonPosition} of {lessonTotal}
          </span>
          <span className="lms-muted hidden sm:inline">|</span>
          <span className="lms-progress-pill rounded-full px-3 py-1 font-medium">
            {progressPercent}% chapter progress
          </span>
        </div>
      </header>

      <main className="flex-grow py-8">
        <LessonView content={lesson.content} />
      </main>

      <footer className="lms-nav-footer mt-8 rounded-2xl border p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-9">
            {prevLesson ? (
              <Button variant="outline" asChild className="lms-button-outline">
                <Link href={`${basePath}/${prevLesson.id}`}>
                  <ChevronLeft />
                  Previous Lesson
                </Link>
              </Button>
            ) : (
              <p className="lms-muted text-sm">Start of chapter</p>
            )}
          </div>

          <div className="min-h-9">
            {nextLesson ? (
              <Button asChild>
                <Link href={`${basePath}/${nextLesson.id}`}>
                  Next Lesson
                  <ChevronRight />
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href={`/lms-course/module/${moduleId}`}>
                  <CheckCircle2 />
                  Finish Chapter
                </Link>
              </Button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
