"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { QuizView, type QuizResult, type SelectedAnswers } from "@/app/lms-course/_components/quizView";
import { QuizSkeleton } from "@/app/lms-course/_components/quiz-skeleton";
import {
  buildMidSemQuiz,
  getMidSemRandomPool,
  getMidSemUniqueQuestions,
  MIDSEM_CHAPTER_ID,
  MIDSEM_MODULE_ID,
  MIDSEM_RANDOM_COUNT,
  MIDSEM_RANDOM_SELECTION_STORAGE_KEY,
  MIDSEM_UNIQUE_COUNT,
} from "@/app/lms-course/data/modules/midsem-assessment";
import { getChapterIndex } from "@/app/lms-course/data/modules";
import type { QuizQuestion } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { getStudentProgress, handleQuizPassProgress } from "@/lib/lms-progress";
import { QuizSuccessModal } from "@/app/lms-course/_components/quiz-success-modal";

interface MidSemQuizClientProps {
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
    const raw = window.localStorage.getItem(MIDSEM_RANDOM_SELECTION_STORAGE_KEY);
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
  window.localStorage.setItem(MIDSEM_RANDOM_SELECTION_STORAGE_KEY, JSON.stringify(ids));
}

export function MidSemQuizClient({ nextChapterId, nextChapterHref }: MidSemQuizClientProps) {
  const router = useRouter();
  const passStorageKey = `r2d:quiz:passed:${MIDSEM_MODULE_ID}:${MIDSEM_CHAPTER_ID}`;
  const reviewLessonBasePath = "";

  const randomPool = useMemo(() => getMidSemRandomPool(), []);
  const poolById = useMemo(
    () => new Map(randomPool.map((question) => [question.id, question])),
    [randomPool],
  );
  const uniqueQuestions = useMemo(
    () => getMidSemUniqueQuestions().slice(0, MIDSEM_UNIQUE_COUNT),
    [],
  );

  const [randomSelectionIds, setRandomSelectionIds] = useState<string[]>(() => {
    const cached = readCachedRandomIds();
    // Validate cached IDs against the pool
    const poolIds = new Set(getMidSemRandomPool().map(q => q.id));
    const validIds = cached.filter(id => poolIds.has(id));

    if (validIds.length === MIDSEM_RANDOM_COUNT) {
      return validIds;
    }

    // Regenerate if invalid or count mismatch
    const nextIds = pickRandomQuestionIds(getMidSemRandomPool(), MIDSEM_RANDOM_COUNT);
    // Note: writing to localStorage in initializer is okay for client-side initialization
    if (typeof window !== "undefined") {
      window.localStorage.setItem(MIDSEM_RANDOM_SELECTION_STORAGE_KEY, JSON.stringify(nextIds));
    }
    return nextIds;
  });
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [result, setResult] = useState<QuizResult | undefined>(undefined);
  const [isSavingPass, setIsSavingPass] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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
  const quiz = useMemo(() => buildMidSemQuiz(composedQuestions), [composedQuestions]);

  const submitDisabled = useMemo(
    () => quiz.questions.some((question) => !Number.isInteger(selectedAnswers[question.id])),
    [quiz.questions, selectedAnswers],
  );

  useEffect(() => {
    let active = true;
    void (async () => {
      const snapshot = await getStudentProgress();
      if (!active || !snapshot?.furthest_chapter_id) return;

      const currentIndex = getChapterIndex(MIDSEM_CHAPTER_ID);
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
      void handleQuizPassProgress({
        currentChapterId: MIDSEM_CHAPTER_ID,
        nextChapterId,
      });
      setShowSuccessModal(true);
      setIsSavingPass(false);
      return;
    }

    setIsSavingPass(false);
  };

  const handleContinue = () => {
    setShowSuccessModal(false);
    if (nextChapterHref) {
      router.push(nextChapterHref);
      router.refresh();
      return;
    }
    router.push("/lms-course");
    router.refresh();
  };

  const handleReview = () => setShowSuccessModal(false);

  const handleRetake = () => {
    setResult(undefined);
    setSelectedAnswers({});

    const nextIds = pickRandomQuestionIds(randomPool, MIDSEM_RANDOM_COUNT);
    setRandomSelectionIds(nextIds);
    writeCachedRandomIds(nextIds);
  };

  const randomReady = selectedRandomQuestions.length === Math.min(MIDSEM_RANDOM_COUNT, randomPool.length);
  const uniqueReady = uniqueQuestions.length === MIDSEM_UNIQUE_COUNT;

  return (
    <div className="lms-lesson-shell flex min-h-[80vh] flex-col px-1 py-0 sm:px-2 sm:py-1">
      <QuizSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onContinue={handleContinue}
        onReview={handleReview}
        chapterTitle="Mid-Semester Assessment"
      />
      <header className="lms-lesson-header pb-3">
        <p className="lms-lesson-eyebrow text-xs font-semibold uppercase">{quiz.description}</p>
        <h1 className="lms-lesson-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {quiz.title}
        </h1>
        <p className="lms-muted mt-2.5 text-sm sm:text-base">
          Pass rule: at least 40/50 ans
          wers must be correct to unlock the next chapter.
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
