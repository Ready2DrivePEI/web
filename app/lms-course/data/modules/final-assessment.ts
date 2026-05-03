import { FileCheck2 } from "lucide-react";
import type { ChapterQuiz, QuizQuestion } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";

// Import all module quizzes
import { chapter1Quiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { chapter2Quiz } from "@/app/lms-course/data/modules/module1/chapter2quiz";
import { m2chapter1Quiz } from "@/app/lms-course/data/modules/module2/m2chapter1quiz";
import { m2chapter2Quiz } from "@/app/lms-course/data/modules/module2/m2chapter2quiz";
import { m3chapter1Quiz } from "@/app/lms-course/data/modules/module3/m3chapter1quiz";
import { m3chapter2Quiz } from "@/app/lms-course/data/modules/module3/m3chapter2quiz";
import { m3chapter3Quiz } from "@/app/lms-course/data/modules/module3/m3chapter3quiz";
import { m4chapter1Quiz } from "@/app/lms-course/data/modules/module4/m4chapter1quiz";
import { m4chapter2Quiz } from "@/app/lms-course/data/modules/module4/m4chapter2quiz";
import { m4chapter3Quiz } from "@/app/lms-course/data/modules/module4/m4chapter3quiz";
import { m5chapter1Quiz } from "@/app/lms-course/data/modules/module5/m5chapter1quiz";
import { m5chapter2Quiz } from "@/app/lms-course/data/modules/module5/m5chapter2quiz";
import { m6chapter1Quiz } from "@/app/lms-course/data/modules/module6/m6chapter1quiz";
import { m6chapter2Quiz } from "@/app/lms-course/data/modules/module6/m6chapter2quiz";

export const FINAL_MODULE_ID = "final";
export const FINAL_CHAPTER_ID = "final-assessment";
export const FINAL_QUIZ_ID = "final-assessment-quiz";
export const FINAL_ASSESSMENT_HREF = "/lms-course/assessment/final";
export const FINAL_RANDOM_COUNT = 40;
export const FINAL_UNIQUE_COUNT = 10;
export const FINAL_RANDOM_SELECTION_STORAGE_KEY = "r2d:assessment:final:random-selection";

type QuizSource = {
  moduleId: string;
  chapterId: string;
  quiz: ChapterQuiz;
};

const previousQuizSources: QuizSource[] = [
  // Module 1
  { moduleId: "module1", chapterId: "chapter1", quiz: chapter1Quiz },
  { moduleId: "module1", chapterId: "chapter2", quiz: chapter2Quiz },
  // Module 2
  { moduleId: "module2", chapterId: "m2chapter1", quiz: m2chapter1Quiz },
  { moduleId: "module2", chapterId: "m2chapter2", quiz: m2chapter2Quiz },
  // Module 3
  { moduleId: "module3", chapterId: "m3chapter1", quiz: m3chapter1Quiz },
  { moduleId: "module3", chapterId: "m3chapter2", quiz: m3chapter2Quiz },
  { moduleId: "module3", chapterId: "m3chapter3", quiz: m3chapter3Quiz },
  // Module 4
  { moduleId: "module4", chapterId: "m4chapter1", quiz: m4chapter1Quiz },
  { moduleId: "module4", chapterId: "m4chapter2", quiz: m4chapter2Quiz },
  { moduleId: "module4", chapterId: "m4chapter3", quiz: m4chapter3Quiz },
  // Module 5
  { moduleId: "module5", chapterId: "m5chapter1", quiz: m5chapter1Quiz },
  { moduleId: "module5", chapterId: "m5chapter2", quiz: m5chapter2Quiz },
  // Module 6
  { moduleId: "module6", chapterId: "m6chapter1", quiz: m6chapter1Quiz },
  { moduleId: "module6", chapterId: "m6chapter2", quiz: m6chapter2Quiz },
];

const uniqueFinalQuestions: QuizQuestion[] = [
  {
    id: "scenario-q1",
    question: "Scenario 1: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q2",
    question: "Scenario 2: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q3",
    question: "Scenario 3: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q4",
    question: "Scenario 4: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q5",
    question: "Scenario 5: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q6",
    question: "Scenario 6: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q7",
    question: "Scenario 7: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q8",
    question: "Scenario 8: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q9",
    question: "Scenario 9: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q10",
    question: "Scenario 10: Placeholder question for the final assessment.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswerIndex: 0,
    explanation: "Placeholder explanation.",
    sourceLessonId: "lms-course/assessment/final",
  },
];

export const finalAssessmentModule: Module = {
  id: FINAL_MODULE_ID,
  title: "Final Assessment",
  slug: "final-assessment",
  icon: FileCheck2,
  chapters: [
    {
      id: FINAL_CHAPTER_ID,
      title: "Final Assessment",
      type: "assessment",
      slug: "final-assessment",
      completed: false,
      lessons: [
        {
          id: "assessment-entry",
          title: "Final Assessment",
          content: [
            {
              type: "text",
              value: "This is the final assessment for the course.",
            },
          ],
        },
      ],
    },
  ],
};

function buildScopedQuestion(source: QuizSource, question: QuizQuestion): QuizQuestion {
  return {
    ...question,
    id: `${source.chapterId}::${question.id}`,
    sourceLessonId: `lms-course/module/${source.moduleId}/chapter/${source.chapterId}/lesson/${question.sourceLessonId}`,
  };
}

export function getFinalRandomPool(): QuizQuestion[] {
  const seen = new Set<string>();
  const pool: QuizQuestion[] = [];

  for (const source of previousQuizSources) {
    for (const question of source.quiz.questions) {
      const scoped = buildScopedQuestion(source, question);
      if (seen.has(scoped.id)) continue;
      seen.add(scoped.id);
      pool.push(scoped);
    }
  }

  return pool;
}

export function getFinalUniqueQuestions(): QuizQuestion[] {
  return uniqueFinalQuestions.map((question) => ({
    ...question,
    id: `final::${question.id}`,
  }));
}

export function buildFinalQuiz(combinedQuestions: QuizQuestion[]): ChapterQuiz {
  return {
    id: FINAL_QUIZ_ID,
    chapterId: FINAL_CHAPTER_ID,
    title: "Final Assessment Quiz",
    description: "50 questions: 40 mixed + 10 scenario",
    passRule: "all-correct", // Will be overridden in client logic, but we can keep it standard here
    questions: combinedQuestions,
  };
}
