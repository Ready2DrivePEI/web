export type QuizPassRule = "all-correct";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  sourceLessonId: string;
}

export interface ChapterQuiz {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  passRule: QuizPassRule;
  questions: QuizQuestion[];
}

export const chapter1Quiz: ChapterQuiz = {
  id: "chapter1-quiz",
  chapterId: "chapter1",
  title: "Chapter 1 Quiz",
  description: "How PEI Licensing Works",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "A driver's licence in PEI is best described as:",
      options: [
        "A permanent personal right",
        "A legal privilege with conditions",
        "An ID card that never expires",
        "Permission to drive any vehicle",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A driver's licence is a legal privilege. It comes with conditions and can be suspended or cancelled.",
      sourceLessonId: "pg1",
    },
    {
      id: "q2",
      question: "Which licence class is the instruction permit for learners?",
      options: ["Class 1", "Class 5", "Class 6", "Class 7"],
      correctAnswerIndex: 3,
      explanation:
        "Class 7 is the instruction permit class used by learners in Prince Edward Island.",
      sourceLessonId: "pg2",
    },
    {
      id: "q3",
      question: "A Class 7 permit holder in Stage 1 must:",
      options: [
        "Drive alone at all times",
        "Drive only after midnight",
        "Drive with a qualified supervising driver beside them",
        "Skip the Novice Driver Course",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Stage 1 requires a qualified supervising driver beside the learner while driving.",
      sourceLessonId: "pg3",
    },
    {
      id: "q4",
      question: "Which statement about licence conditions is correct?",
      options: [
        "Conditions are optional suggestions for new drivers only",
        "Conditions only apply to commercial drivers",
        "If your licence lists a condition like corrective lenses, you must follow it",
        "Conditions stop applying after you pass your first road test",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Licence conditions are part of your legal driving privilege and must be followed.",
      sourceLessonId: "pg1",
    },
    {
      id: "q5",
      question: "When can a Class 7 driver usually become eligible for the Class 5 road test?",
      options: [
        "After 30 days of driving",
        "After 365 days, or 275 days with driver education",
        "As soon as the written test is passed",
        "Only after turning 18",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The waiting period is 365 days, or 275 days with driver education.",
      sourceLessonId: "pg3",
    },
  ],
};
