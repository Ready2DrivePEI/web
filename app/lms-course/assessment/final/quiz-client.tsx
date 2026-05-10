"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuizView, type QuizResult, type SelectedAnswers } from "@/app/lms-course/_components/quizView";
import { QuizSkeleton } from "@/app/lms-course/_components/quiz-skeleton";
import {
  buildFinalQuiz,
  getFinalRandomPool,
  getFinalUniqueQuestions,
  FINAL_CHAPTER_ID,
  FINAL_MODULE_ID,
  FINAL_RANDOM_COUNT,
  FINAL_RANDOM_SELECTION_STORAGE_KEY,
  FINAL_UNIQUE_COUNT,
} from "@/app/lms-course/data/modules/final-assessment";
import { getChapterIndex } from "@/app/lms-course/data/modules";
import type { QuizQuestion } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { getStudentProgress, handleQuizPassProgress } from "@/lib/lms-progress";

interface FinalQuizClientProps {
  nextChapterId: string | null;
  nextChapterHref: string | null;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandomQuestionIds(pool: QuizQuestion[], count: number): string[] {
  const selected = shuffle(pool).slice(0, Math.min(count, pool.length));
  return selected.map((question) => question.id);
}

function readCachedRandomIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(FINAL_RANDOM_SELECTION_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

function writeCachedRandomIds(ids: string[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(FINAL_RANDOM_SELECTION_STORAGE_KEY, JSON.stringify(ids));
}

export function FinalQuizClient({ nextChapterId, nextChapterHref }: FinalQuizClientProps) {
  const passStorageKey = `r2d:quiz:passed:${FINAL_MODULE_ID}:${FINAL_CHAPTER_ID}`;
  const reviewLessonBasePath = "";

  const randomPool = useMemo(() => getFinalRandomPool(), []);
  const poolById = useMemo(
    () => new Map(randomPool.map((question) => [question.id, question])),
    [randomPool],
  );
  const uniqueQuestions = useMemo(
    () => getFinalUniqueQuestions().slice(0, FINAL_UNIQUE_COUNT),
    [],
  );

  const [randomSelectionIds, setRandomSelectionIds] = useState<string[]>(() => {
    const cached = readCachedRandomIds();
    // Validate cached IDs against the pool
    const poolIds = new Set(getFinalRandomPool().map(q => q.id));
    const validIds = cached.filter(id => poolIds.has(id));

    if (validIds.length === FINAL_RANDOM_COUNT) {
      return validIds;
    }

    // Regenerate if invalid or count mismatch
    const nextIds = pickRandomQuestionIds(getFinalRandomPool(), FINAL_RANDOM_COUNT);
    // Note: writing to localStorage in initializer is okay for client-side initialization
    if (typeof window !== "undefined") {
      window.localStorage.setItem(FINAL_RANDOM_SELECTION_STORAGE_KEY, JSON.stringify(nextIds));
    }
    return nextIds;
  });
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [result, setResult] = useState<QuizResult | undefined>(undefined);
  const [isSavingPass, setIsSavingPass] = useState(false);
  const [alreadyPassed, setAlreadyPassed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(passStorageKey) === "true";
  });

  // Ensure cached IDs are in sync with localStorage if they were regenerated
  useEffect(() => {
    writeCachedRandomIds(randomSelectionIds);
  }, [randomSelectionIds]);

  const selectedRandomQuestions = useMemo(
    () =>
      randomSelectionIds
        .map((id) => poolById.get(id))
        .filter((question): question is QuizQuestion => Boolean(question)),
    [poolById, randomSelectionIds],
  );

  const composedQuestions = useMemo(
    () => [...selectedRandomQuestions, ...uniqueQuestions],
    [selectedRandomQuestions, uniqueQuestions],
  );
  const quiz = useMemo(() => buildFinalQuiz(composedQuestions), [composedQuestions]);

  const submitDisabled = useMemo(
    () => quiz.questions.some((question) => !Number.isInteger(selectedAnswers[question.id])),
    [quiz.questions, selectedAnswers],
  );

  useEffect(() => {
    let active = true;
    void (async () => {
      const snapshot = await getStudentProgress();
      if (!active || !snapshot?.furthest_chapter_id) return;

      const currentIndex = getChapterIndex(FINAL_CHAPTER_ID);
      const furthestIndex = getChapterIndex(snapshot.furthest_chapter_id);
      if (furthestIndex > currentIndex) {
        setAlreadyPassed(true);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

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

    const passed = score >= 40; // Pass rule: 40/50

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
        currentChapterId: FINAL_CHAPTER_ID,
        nextChapterId,
      });

      setIsSavingPass(false);
      // Removed the router.push because this is the final exam.
      // Wait for the popup implementation or just stay on this page for now.
    }
  };

  const handleRetake = () => {
    setResult(undefined);
    setSelectedAnswers({});

    const nextIds = pickRandomQuestionIds(randomPool, FINAL_RANDOM_COUNT);
    setRandomSelectionIds(nextIds);
    writeCachedRandomIds(nextIds);
  };

  const randomReady = selectedRandomQuestions.length === Math.min(FINAL_RANDOM_COUNT, randomPool.length);
  const uniqueReady = uniqueQuestions.length === FINAL_UNIQUE_COUNT;

  return (
    <div className="lms-lesson-shell flex min-h-[80vh] flex-col px-1 py-0 sm:px-2 sm:py-1">
      <header className="lms-lesson-header pb-3">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase">{quiz.description}</p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {quiz.title}
        </h1>
        <p className="lms-muted mt-2.5 text-sm sm:text-base">
          Pass rule: at least 40/50 answers must be correct to pass the course.
        </p>
      </header>

      <main className="flex-grow py-3 sm:py-4">
        {alreadyPassed && !result?.submitted ? (
          <div className="lms-callout lms-callout-info mb-6 rounded-2xl border px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold text-lg">Course Completed! 🎉</h2>
            <p className="mt-1 lms-muted">You have successfully passed the final assessment.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/lms-course">Return to Dashboard</Link>
              </Button>
            </div>
          </div>
        ) : null}

        {result?.submitted && result.passed && !alreadyPassed ? (
          <div className="lms-callout lms-callout-success mb-6 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold text-green-700 dark:text-green-400 text-lg">Congratulations! 🎉</h2>
            <p className="mt-1 text-green-700/80 dark:text-green-400/80">You have passed the final assessment and completed the course.</p>
            {/* Placeholder for the popup window that will be designed later */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/lms-course">Return to Dashboard</Link>
              </Button>
            </div>
          </div>
        ) : null}

        {!randomReady || !uniqueReady ? (
          <QuizSkeleton count={3} />
        ) : (
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
        )}
      </main>
    </div>
  );
}
