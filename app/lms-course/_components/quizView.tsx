"use client";

import Image from "next/image";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export interface QuizResult {
  submitted: boolean;
  score: number;
  passed: boolean;
}

export type SelectedAnswers = Record<string, number | undefined>;

export interface QuizViewProps {
  questions: QuizQuestion[];
  selectedAnswers: SelectedAnswers;
  reviewLessonBasePath: string;
  onSelect: (questionId: string, optionIndex: number) => void;
  onSubmit: () => void;
  onRetake: () => void;
  result?: QuizResult;
  submitDisabled?: boolean;
  nextChapterHref?: string | null;
}

const normalizeOptionText = (option: string, optionLabel: string) =>
  option.replace(new RegExp(`^\\s*${optionLabel}\\s*(?:[\\.)\\:\\-]\\s*|\\s+)`, "i"), "").trim();

export function QuizView({
  questions,
  selectedAnswers,
  reviewLessonBasePath,
  onSelect,
  onSubmit,
  onRetake,
  result,
  submitDisabled = false,
  nextChapterHref,
}: QuizViewProps) {
  const imageLayoutClassMap: Record<NonNullable<QuizQuestion["layout"]>, string> = {
    quarter: "w-full sm:w-1/4",
    half: "w-full sm:w-1/2",
    threeQuarter: "w-full sm:w-3/4",
    full: "w-full",
  };

  const answeredCount = questions.filter((question) =>
    Number.isInteger(selectedAnswers[question.id]),
  ).length;
  const isSubmitted = Boolean(result?.submitted);

  return (
    <div className="lms-reading space-y-5 pb-28 text-[0.97rem] leading-7 sm:text-base sm:pb-32">
      {questions.map((question, idx) => {
        const selectedOption = selectedAnswers[question.id];
        const isCorrect = selectedOption === question.correctAnswerIndex;
        const isAnswered = Number.isInteger(selectedOption);
        const showFeedback = isSubmitted && isAnswered;
        const optionGroupName = `quiz-${question.id}`;

        return (
          <section
            key={question.id}
            className="lms-nav-footer space-y-4 rounded-2xl border p-4 sm:p-5"
          >
            <header className="space-y-1.5">
              <p className="lms-muted text-[11px] font-semibold uppercase tracking-wide">
                Question {idx + 1}
              </p>
              <h2 className="whitespace-pre-wrap text-base font-semibold leading-6 sm:text-lg">
                {question.question}
              </h2>
              {question.imageSrc ? (
                <figure
                  className={`mt-3 overflow-hidden rounded-xl border ${
                    imageLayoutClassMap[question.layout ?? "full"]
                  }`}
                >
                  <Image
                    src={question.imageSrc}
                    alt={question.imageAlt ?? "Question image"}
                    width={960}
                    height={540}
                    className="h-auto w-full object-cover"
                  />
                </figure>
              ) : null}
            </header>

            <ul className="space-y-2">
              {question.options.map((option, optionIndex) => {
                const optionLabel = String.fromCharCode(65 + optionIndex);
                const isSelected = selectedOption === optionIndex;
                const isCorrectOption = optionIndex === question.correctAnswerIndex;
                const showCorrectHighlight = isSubmitted && isCorrectOption;
                const showWrongHighlight = isSubmitted && isSelected && !isCorrectOption;
                const showSelectedHighlight = !isSubmitted && isSelected;
                const normalizedOption = normalizeOptionText(option, optionLabel);

                return (
                  <li
                    key={`${question.id}-${optionIndex}`}
                    className={`lms-quiz-option rounded-xl border px-3 py-2.5 sm:px-4 ${
                      showCorrectHighlight
                        ? "lms-quiz-option-correct"
                        : showWrongHighlight
                          ? "lms-quiz-option-wrong"
                          : showSelectedHighlight
                            ? "lms-quiz-option-selected"
                            : ""
                    }`}
                  >
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="radio"
                        name={optionGroupName}
                        checked={isSelected}
                        onChange={() => onSelect(question.id, optionIndex)}
                        disabled={isSubmitted}
                        className="lms-quiz-radio mt-1 h-4 w-4"
                      />
                      <span className="flex min-w-0 gap-2">
                        <span className="font-medium">{optionLabel}.</span>
                        <span className="min-w-0 whitespace-pre-wrap">{normalizedOption}</span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            {showFeedback ? (
              <div className={`lms-callout space-y-3 rounded-xl border px-3 py-3 sm:px-4 ${isCorrect ? 'lms-callout-success' : 'lms-callout-danger'}`}>
                <p className="lms-feedback-explanation whitespace-pre-wrap text-sm leading-6 sm:text-base">
                  <span className={`font-bold ${isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'lms-feedback-wrong'}`}>
                    {isCorrect ? 'Correct.' : 'Incorrect.'}
                  </span>{" "}
                  {question.explanation}
                </p>
                <div>
                  <Button variant="outline" asChild className="group lms-button-outline gap-1">
                    <Link href={`${reviewLessonBasePath}/${question.sourceLessonId}`}>
                      <svg
                        className="h-4 w-4 shrink-0 overflow-visible transition-transform duration-200"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M14 8H2.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="origin-right scale-x-0 opacity-0 transition-all duration-200 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                        />
                        <path
                          d="M6 5L2.5 8L6 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transform transition-transform duration-200 ease-out translate-x-[3.5px] group-hover:translate-x-0"
                        />
                      </svg>
                      <span>{isCorrect ? 'Review lesson' : 'Go to lesson'}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            ) : null}
          </section>
        );
      })}

      {result?.submitted ? (
        <div className="lms-nav-footer space-y-4 rounded-2xl border p-4 sm:p-5">
          <div
            className={`lms-callout rounded-2xl border px-4 py-3 ${
              result.passed ? "lms-callout-success" : "lms-callout-danger"
            }`}
          >
            <p className="font-semibold">
              Score: {result.score}/{questions.length}
            </p>
            <p className="text-sm sm:text-base">
              {result.passed
                ? "Perfect score. You passed this chapter quiz."
                : "You need all answers correct to pass. Review the missed topics and try again."}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" className="lms-button-outline" onClick={onRetake}>
              <RotateCcw />
              Retake Quiz
            </Button>

            {result.passed && nextChapterHref ? (
              <Button asChild>
                <Link href={nextChapterHref}>Go to Next Chapter</Link>
              </Button>
            ) : null}

            {result.passed && !nextChapterHref ? (
              <Button asChild>
                <Link href="/lms-course">Course Complete</Link>
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}

      {!isSubmitted ? (
        <footer className="fixed right-5 bottom-10 sm:bottom-12 left-5 z-40 sm:left-[calc(var(--lms-sidebar-width,20rem)+1rem)] sm:right-5">
          <div className="lms-floating-footer mx-auto w-fit max-w-full rounded-2xl border px-3 py-2.5">
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold whitespace-nowrap">
                Answered {answeredCount} of {questions.length}
              </p>
              <Button onClick={onSubmit} disabled={submitDisabled} size="lg">
                Submit Quiz
              </Button>
            </div>
          </div>
        </footer>
      ) : null}
    </div>
  );
}
