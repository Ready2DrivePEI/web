import { notFound } from "next/navigation";
import { QuizClient } from "./quiz-client";
import { chapter1Quiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { module1, type Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { module2 } from "@/app/lms-course/data/modules/module2";
import { module3 } from "@/app/lms-course/data/modules/module3";

const modules: Module[] = [module1, module2, module3];
const quizzes = [chapter1Quiz];

function getNextChapterHref(moduleId: string, chapterId: string): string | null {
  const orderedChapters = modules.flatMap((module) =>
    module.chapters.map((chapter) => ({
      moduleId: module.id,
      chapterId: chapter.id,
      firstLessonId: chapter.lessons[0]?.id,
    })),
  );

  const currentIndex = orderedChapters.findIndex(
    (chapter) => chapter.moduleId === moduleId && chapter.chapterId === chapterId,
  );

  if (currentIndex < 0) {
    return null;
  }

  const nextChapter = orderedChapters[currentIndex + 1];

  if (!nextChapter?.firstLessonId) {
    return null;
  }

  return `/lms-course/module/${nextChapter.moduleId}/chapter/${nextChapter.chapterId}/lesson/${nextChapter.firstLessonId}`;
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ moduleId: string; chapterId: string; quizzId: string }>;
}) {
  const { moduleId, chapterId, quizzId } = await params;

  const quiz = quizzes.find(
    (item) => item.id === quizzId && item.chapterId === chapterId,
  );

  if (!quiz) {
    return notFound();
  }

  const nextChapterHref = getNextChapterHref(moduleId, chapterId);

  return (
    <QuizClient
      moduleId={moduleId}
      chapterId={chapterId}
      quiz={quiz}
      nextChapterHref={nextChapterHref}
    />
  );
}
