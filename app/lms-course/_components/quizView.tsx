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

  return (
    <div className="lms-reading space-y-6 text-base leading-8 sm:text-lg">
      {questions.map((question, idx) => {
        const selectedOption = selectedAnswers[question.id];
        const isCorrect = selectedOption === question.correctAnswerIndex;
        const isAnswered = Number.isInteger(selectedOption);
        const showFeedback = Boolean(result?.submitted) && isAnswered;
        const optionGroupName = `quiz-${question.id}`;

        return (
          <section
            key={question.id}
            className="lms-callout lms-callout-info space-y-4 rounded-2xl border p-4 sm:p-5"
          >
            <header className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wide">
                Question {idx + 1}
              </p>
              <h2 className="text-lg font-semibold leading-7 sm:text-xl">
                {question.question}
              </h2>
            </header>

            <ul className="space-y-2">
              {question.options.map((option, optionIndex) => {
                const optionLabel = String.fromCharCode(65 + optionIndex);
                const isSelected = selectedOption === optionIndex;
                const isCorrectOption = optionIndex === question.correctAnswerIndex;
                const isSubmitted = Boolean(result?.submitted);
                const showCorrectHighlight = isSubmitted && isCorrectOption;
                const showWrongHighlight =
                  isSubmitted && isSelected && !isCorrectOption;

                return (
                  <li
                    key={`${question.id}-${optionIndex}`}
                    className={`rounded-xl border px-3 py-2 sm:px-4 sm:py-3 ${
                      showCorrectHighlight
                        ? "lms-callout-warning"
                        : showWrongHighlight
                          ? "lms-callout-danger"
                          : ""
                    }`}
                  >
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="radio"
                        name={optionGroupName}
                        checked={isSelected}
                        onChange={() => onSelect(question.id, optionIndex)}
                        disabled={isSubmitted}
                      />
                      <span>
                        <span className="font-medium">{optionLabel}.</span> {option}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            {showFeedback && !isCorrect ? (
              <div className="space-y-3 rounded-xl border px-3 py-3 sm:px-4">
                <p className="text-sm sm:text-base">
                  Incorrect. {question.explanation}
                </p>
                <Button variant="outline" asChild className="lms-button-outline">
                  <Link href={`${reviewLessonBasePath}/${question.sourceLessonId}`}>
                    Go to lesson
                  </Link>
                </Button>
              </div>
            ) : null}
          </section>
        );
      })}

      <div className="lms-nav-footer space-y-4 rounded-2xl border p-4 sm:p-5">
        <p className="lms-muted text-sm">
          Answered {answeredCount} of {questions.length}
        </p>

        {result?.submitted ? (
          <div
            className={`lms-callout rounded-2xl border px-4 py-3 ${
              result.passed ? "lms-callout-info" : "lms-callout-danger"
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
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={onSubmit} disabled={submitDisabled || Boolean(result?.submitted)}>
            Submit Quiz
          </Button>

          {result?.submitted ? (
            <Button variant="outline" className="lms-button-outline" onClick={onRetake}>
              <RotateCcw />
              Retake Quiz
            </Button>
          ) : null}

          {result?.submitted && result.passed && nextChapterHref ? (
            <Button asChild>
              <Link href={nextChapterHref}>Go to Next Chapter</Link>
            </Button>
          ) : null}

          {result?.submitted && result.passed && !nextChapterHref ? (
            <Button asChild>
              <Link href="/lms-course">Course Complete</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
