import { redirect } from "next/navigation";
import { ChapterVisitTracker } from "@/app/lms-course/_components/chapter-visit-tracker";
import { getChapterHref, getNextChapter, isChapterUnlocked } from "@/app/lms-course/data/modules";
import { MIDSEM_CHAPTER_ID } from "@/app/lms-course/data/modules/midsem-assessment";
import { getServerFurthestChapterId } from "@/lib/lms-progress-server";
import { MidSemQuizClient } from "./quiz-client";

function getNextChapterInfo(): { nextChapterId: string | null; nextChapterHref: string | null } {
  const nextChapter = getNextChapter(MIDSEM_CHAPTER_ID);
  if (!nextChapter || !nextChapter.firstLessonId) {
    return { nextChapterId: null, nextChapterHref: null };
  }

  return {
    nextChapterId: nextChapter.chapterId,
    nextChapterHref: `/lms-course/module/${nextChapter.moduleId}/chapter/${nextChapter.chapterId}/lesson/${nextChapter.firstLessonId}`,
  };
}

export default async function MidSemAssessmentPage() {
  const furthestChapterId = await getServerFurthestChapterId();
  const chapterAllowed = isChapterUnlocked(MIDSEM_CHAPTER_ID, furthestChapterId);

  if (!chapterAllowed && furthestChapterId) {
    const fallbackHref = getChapterHref(furthestChapterId);
    if (fallbackHref) redirect(fallbackHref);
  }

  const { nextChapterId, nextChapterHref } = getNextChapterInfo();

  return (
    <>
      <ChapterVisitTracker chapterId={MIDSEM_CHAPTER_ID} />
      <MidSemQuizClient nextChapterId={nextChapterId} nextChapterHref={nextChapterHref} />
    </>
  );
}

