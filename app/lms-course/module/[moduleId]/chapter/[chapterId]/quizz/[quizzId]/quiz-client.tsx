"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { QuizView, type QuizResult, type SelectedAnswers } from "@/app/lms-course/_components/quizView";
import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { getChapterIndex } from "@/app/lms-course/data/modules";
import { getStudentProgress, handleQuizPassProgress } from "@/lib/lms-progress";

interface QuizClientProps {
  moduleId: string;
  chapterId: string;
  nextChapterId: string | null;
  quiz: ChapterQuiz;
  nextChapterHref: string | null;
}

export function QuizClient({
  moduleId,
  chapterId,
  nextChapterId,
  quiz,
  nextChapterHref,
}: QuizClientProps) {
  const router = useRouter();
  const passStorageKey = `r2d:quiz:passed:${moduleId}:${chapterId}`;
  const reviewLessonBasePath = `/lms-course/module/${moduleId}/chapter/${chapterId}/lesson`;

  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [result, setResult] = useState<QuizResult | undefined>(undefined);
  const [isSavingPass, setIsSavingPass] = useState(false);
  const [alreadyPassed, setAlreadyPassed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(passStorageKey) === "true";
  });

  const submitDisabled = useMemo(
    () => quiz.questions.some((question) => !Number.isInteger(selectedAnswers[question.id])),
    [quiz.questions, selectedAnswers],
  );

  useEffect(() => {
    let active = true;
    void (async () => {
      const snapshot = await getStudentProgress();
      if (!active || !snapshot?.furthest_chapter_id) return;

      const currentIndex = getChapterIndex(chapterId);
      const furthestIndex = getChapterIndex(snapshot.furthest_chapter_id);
      if (furthestIndex > currentIndex) {
        setAlreadyPassed(true);
      }
    })();

    return () => {
      active = false;
    };
  }, [chapterId]);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (result?.submitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = async () => {
    if (submitDisabled || isSavingPass) return;

    const score = quiz.questions.reduce((total, question) => {
      return selectedAnswers[question.id] === question.correctAnswerIndex
        ? total + 1
        : total;
    }, 0);

    const passed = score === quiz.questions.length;

    setResult({
      submitted: true,
      score,
      passed,
    });

    if (passed) {
      window.localStorage.setItem(passStorageKey, "true");
      setAlreadyPassed(true);
      setIsSavingPass(true);

      await handleQuizPassProgress({
        currentChapterId: chapterId,
        nextChapterId,
      });

      setIsSavingPass(false);
      if (nextChapterHref) {
        router.push(nextChapterHref);
        return;
      }

      router.push("/lms-course");
    }
  };

  const handleRetake = () => {
    setResult(undefined);
    setSelectedAnswers({});
  };

  return (
    <div className="lms-lesson-shell flex min-h-[80vh] flex-col px-1 py-0 sm:px-2 sm:py-1">
      <header className="lms-lesson-header pb-3">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase">{quiz.description}</p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {quiz.title}
        </h1>
        <p className="lms-muted mt-2.5 text-sm sm:text-base">
          Pass rule: all answers must be correct to unlock the next chapter.
        </p>
      </header>

      <main className="flex-grow py-3 sm:py-4">
        {alreadyPassed && !result?.submitted ? (
          <div className="lms-callout lms-callout-info mb-6 rounded-2xl border px-4 py-3 sm:px-5 sm:py-4">
            <p className="font-semibold">Preview status: quiz already passed.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {nextChapterHref ? (
                <Button asChild>
                  <Link href={nextChapterHref}>Go to Next Chapter</Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/lms-course">Course Complete</Link>
                </Button>
              )}
            </div>
          </div>
        ) : null}

        <QuizView
          questions={quiz.questions}
          selectedAnswers={selectedAnswers}
          reviewLessonBasePath={reviewLessonBasePath}
          onSelect={handleSelect}
          onSubmit={handleSubmit}
          onRetake={handleRetake}
          result={result}
          submitDisabled={submitDisabled || isSavingPass}
          nextChapterHref={nextChapterHref}
        />
      </main>
    </div>
  );
}
