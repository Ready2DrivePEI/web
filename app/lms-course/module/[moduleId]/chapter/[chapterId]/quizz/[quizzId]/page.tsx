import { notFound, redirect } from "next/navigation";
import { QuizClient } from "./quiz-client";
import { chapter1Quiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { chapter2Quiz } from "@/app/lms-course/data/modules/module1/chapter2quiz";
import { chapter3Quiz } from "@/app/lms-course/data/modules/module1/chapter3quiz";
import { m2chapter1Quiz } from "@/app/lms-course/data/modules/module2/m2chapter1quiz";
import { m2chapter2Quiz } from "@/app/lms-course/data/modules/module2/m2chapter2quiz";
import { m3chapter1Quiz } from "@/app/lms-course/data/modules/module3/m3chapter1quiz";
import { m3chapter2Quiz } from "@/app/lms-course/data/modules/module3/m3chapter2quiz";
import { m3chapter3Quiz } from "@/app/lms-course/data/modules/module3/m3chapter3quiz";
import { getChapterHref, getNextChapter, isChapterUnlocked } from "@/app/lms-course/data/modules";
import { getServerFurthestChapterId } from "@/lib/lms-progress-server";
import { ChapterVisitTracker } from "@/app/lms-course/_components/chapter-visit-tracker";

const quizzes = [chapter1Quiz, chapter2Quiz, chapter3Quiz, m2chapter1Quiz, m2chapter2Quiz, m3chapter1Quiz, m3chapter2Quiz, m3chapter3Quiz];

function getNextChapterInfo(moduleId: string, chapterId: string): { nextChapterId: string | null; nextChapterHref: string | null } {
  const nextChapter = getNextChapter(chapterId);
  if (!nextChapter || (nextChapter.moduleId === moduleId && nextChapter.chapterId === chapterId)) {
    return { nextChapterId: null, nextChapterHref: null };
  }

  if (!nextChapter.firstLessonId) return { nextChapterId: null, nextChapterHref: null };

  return {
    nextChapterId: nextChapter.chapterId,
    nextChapterHref: `/lms-course/module/${nextChapter.moduleId}/chapter/${nextChapter.chapterId}/lesson/${nextChapter.firstLessonId}`,
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ moduleId: string; chapterId: string; quizzId: string }>;
}) {
  const { moduleId, chapterId, quizzId } = await params;
  const furthestChapterId = await getServerFurthestChapterId();
  const chapterAllowed = isChapterUnlocked(chapterId, furthestChapterId);
  if (!chapterAllowed && furthestChapterId) {
    const fallbackHref = getChapterHref(furthestChapterId);
    if (fallbackHref) redirect(fallbackHref);
  }

  const quiz = quizzes.find(
    (item) => item.id === quizzId && item.chapterId === chapterId,
  );

  if (!quiz) {
    return notFound();
  }

  const { nextChapterId, nextChapterHref } = getNextChapterInfo(moduleId, chapterId);

  return (
    <>
      <ChapterVisitTracker chapterId={chapterId} />
      <QuizClient
        moduleId={moduleId}
        chapterId={chapterId}
        nextChapterId={nextChapterId}
        quiz={quiz}
        nextChapterHref={nextChapterHref}
      />
    </>
  );
}
