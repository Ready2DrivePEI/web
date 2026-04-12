import Link from "next/link";
import { Play } from "lucide-react";
import { chapter1Preview } from "@/app/lms-course/data/preview/chapter1";

export default function Chapter1PreviewOverview() {
  const lessonCount = chapter1Preview.lessons.length;
  const firstLessonId = chapter1Preview.lessons[0]?.id;
  const startHref = firstLessonId
    ? `/lms-course/preview/chapter1/lesson/${firstLessonId}`
    : "/lms-course/preview/chapter1";

  return (
    <div className="lms-lesson-shell relative flex min-h-[80vh] flex-col px-4 py-8 sm:px-6 sm:py-10">
      <header className="lms-lesson-header mt-8 mb-8 pb-6 text-center">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase tracking-wide">
          Preview Chapter
        </p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold sm:text-4xl">
          {chapter1Preview.title}
        </h1>
        <p className="lms-muted mt-3 text-sm uppercase tracking-wide">
          {lessonCount} lesson{lessonCount === 1 ? "" : "s"} in this preview
        </p>
      </header>

      <div className="mb-12 grid w-full max-w-4xl grid-cols-1 gap-5 self-center sm:grid-cols-2">
        {chapter1Preview.lessons.map((lesson, index) => {
          const lessonHref = `/lms-course/preview/chapter1/lesson/${lesson.id}`;

          return (
            <Link key={lesson.id} href={lessonHref} className="block">
              <article className="lms-home-card rounded-xl border p-4 shadow-sm transition-all">
                <h2 className="lms-accent mb-1 text-lg font-semibold">
                  {index + 1}. {lesson.title}
                </h2>
                <p className="lms-home-card-copy text-sm capitalize">Lesson</p>
              </article>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto mb-8 flex justify-center">
        <Link
          href={startHref}
          className="lms-home-cta-chip rounded-2xl px-8 py-4 text-base font-bold shadow-md transition-opacity hover:opacity-90"
        >
          Start Lesson
        </Link>
      </div>

      <Play className="lms-muted absolute -right-4 -bottom-4 h-32 w-32 opacity-10 rotate-12" />
    </div>
  );
}
