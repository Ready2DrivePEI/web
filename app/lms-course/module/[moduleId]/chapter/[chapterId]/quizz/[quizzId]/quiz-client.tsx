"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuizView, type QuizResult, type SelectedAnswers } from "@/app/lms-course/_components/quizView";
import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

interface QuizClientProps {
  moduleId: string;
  chapterId: string;
  quiz: ChapterQuiz;
  nextChapterHref: string | null;
}

export function QuizClient({
  moduleId,
  chapterId,
  quiz,
  nextChapterHref,
}: QuizClientProps) {
  const passStorageKey = `r2d:quiz:passed:${moduleId}:${chapterId}`;
  const reviewLessonBasePath = `/lms-course/module/${moduleId}/chapter/${chapterId}/lesson`;

  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [result, setResult] = useState<QuizResult | undefined>(undefined);
  const [alreadyPassed, setAlreadyPassed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(passStorageKey) === "true";
  });

  const submitDisabled = useMemo(
    () => quiz.questions.some((question) => !Number.isInteger(selectedAnswers[question.id])),
    [quiz.questions, selectedAnswers],
  );

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (result?.submitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    if (submitDisabled) return;

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
      // TODO replace localStorage with Supabase progress persistence.
      window.localStorage.setItem(passStorageKey, "true");
      setAlreadyPassed(true);
    }
  };

  const handleRetake = () => {
    setResult(undefined);
    setSelectedAnswers({});
  };

  return (
    <div className="lms-lesson-shell flex min-h-[80vh] flex-col px-4 py-8 sm:px-6 sm:py-10">
      <header className="lms-lesson-header pb-6">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase">{quiz.description}</p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {quiz.title}
        </h1>
        <p className="lms-muted mt-4 text-sm sm:text-base">
          Pass rule: all answers must be correct to unlock the next chapter.
        </p>
      </header>

      <main className="flex-grow py-8">
        {alreadyPassed && !result?.submitted ? (
          <div className="lms-callout lms-callout-info mb-6 rounded-2xl border px-4 py-3 sm:px-5 sm:py-4">
            <p className="font-semibold">Preview status: quiz already passed on this device.</p>
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
          submitDisabled={submitDisabled}
          nextChapterHref={nextChapterHref}
        />
      </main>
    </div>
  );
}
