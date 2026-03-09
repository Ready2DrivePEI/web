"use client";

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
        const correctOptionLabel = String.fromCharCode(65 + question.correctAnswerIndex);
        const correctOptionText = normalizeOptionText(
          question.options[question.correctAnswerIndex] ?? "",
          correctOptionLabel,
        );

        return (
          <section
            key={question.id}
            className="lms-nav-footer space-y-4 rounded-2xl border p-4 sm:p-5"
          >
            <header className="space-y-1.5">
              <p className="lms-muted text-[11px] font-semibold uppercase tracking-wide">
                Question {idx + 1}
              </p>
              <h2 className="text-base font-semibold leading-6 sm:text-lg">
                {question.question}
              </h2>
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
                        <span className="min-w-0">{normalizedOption}</span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            {showFeedback && !isCorrect ? (
              <div className="lms-callout lms-callout-success space-y-3 rounded-xl border px-3 py-3 sm:px-4">
                <p className="lms-feedback-explanation text-sm leading-6 sm:text-base">
                  <span className="lms-feedback-wrong font-semibold">Incorrect.</span>{" "}
                  {question.explanation}
                </p>
                <p className="lms-feedback-correct text-sm leading-6 sm:text-base">
                  Correct answer: <span className="font-semibold">{correctOptionLabel}.</span>{" "}
                  {correctOptionText}
                </p>
                <div>
                  <Button variant="outline" asChild className="lms-button-outline text-black hover:text-black">
                    <Link href={`${reviewLessonBasePath}/${question.sourceLessonId}`}>
                      Go to lesson
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
        <footer className="fixed right-5 bottom-5 left-5 z-40 sm:left-[calc(var(--lms-sidebar-width,20rem)+1rem)] sm:right-5">
          <div className="lms-floating-footer mx-auto w-fit max-w-full rounded-2xl border px-3 py-2.5">
            <div className="flex items-center gap-3">
              <p className="lms-muted text-sm whitespace-nowrap">
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
