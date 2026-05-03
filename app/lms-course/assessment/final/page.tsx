import { redirect } from "next/navigation";
import { ChapterVisitTracker } from "@/app/lms-course/_components/chapter-visit-tracker";
import { getChapterHref, isChapterUnlocked } from "@/app/lms-course/data/modules";
import { FINAL_CHAPTER_ID } from "@/app/lms-course/data/modules/final-assessment";
import { getServerFurthestChapterId } from "@/lib/lms-progress-server";
import { FinalQuizClient } from "./quiz-client";

export default async function FinalAssessmentPage() {
  const furthestChapterId = await getServerFurthestChapterId();
  const chapterAllowed = isChapterUnlocked(FINAL_CHAPTER_ID, furthestChapterId);

  if (!chapterAllowed && furthestChapterId) {
    const fallbackHref = getChapterHref(furthestChapterId);
    if (fallbackHref) redirect(fallbackHref);
  }

  return (
    <>
      <ChapterVisitTracker chapterId={FINAL_CHAPTER_ID} />
      {/* Passing null for next chapter since this is the final exam */}
      <FinalQuizClient nextChapterId={null} nextChapterHref={null} />
    </>
  );
}
