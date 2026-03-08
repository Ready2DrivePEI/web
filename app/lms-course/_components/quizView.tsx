export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex?: number;
  explanation?: string;
}

export function QuizView({
  questions,
  showAnswers = false,
}: {
  questions: QuizQuestion[];
  showAnswers?: boolean;
}) {
  return (
    <div className="lms-reading space-y-6 text-base leading-8 sm:text-lg">
      {questions.map((question, idx) => (
        <section key={question.id} className="lms-callout lms-callout-info space-y-4 rounded-2xl border p-4 sm:p-5">
          <header className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide">Question {idx + 1}</p>
            <h2 className="text-lg font-semibold leading-7 sm:text-xl">{question.question}</h2>
          </header>

          <ul className="space-y-2">
            {question.options.map((option, optionIndex) => {
              const isCorrect = optionIndex === question.answerIndex;
              const optionLabel = String.fromCharCode(65 + optionIndex);

              return (
                <li
                  key={`${question.id}-${optionIndex}`}
                  className={`rounded-xl border px-3 py-2 sm:px-4 sm:py-3 ${
                    showAnswers && isCorrect ? "lms-callout-warning" : ""
                  }`}
                >
                  <span className="font-medium">{optionLabel}.</span> {option}
                </li>
              );
            })}
          </ul>

          {showAnswers && question.explanation ? (
            <p className="lms-muted rounded-xl border px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base">
              {question.explanation}
            </p>
          ) : null}
        </section>
      ))}
    </div>
  );
}
