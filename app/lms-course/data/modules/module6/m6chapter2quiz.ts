import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m6chapter2Quiz: ChapterQuiz = {
  id: "m6chapter2-quiz",
  chapterId: "m6chapter2",
  title: "Chapter Quiz",
  description: "The Balanced Driver",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "What is one key reason to monitor your driving ability over time?",
      options: [
        "Physical changes can happen gradually and be hard to notice",
        "Experienced drivers never need to adjust habits",
        "Self-assessment replaces all health checkups",
        "Traffic laws stop changing after age 55",
      ],
      correctAnswerIndex: 0,
      explanation: "Correct Answer: A",
      sourceLessonId: "m6ch2_pg1",
    },
    {
      id: "q2",
      question: "Which of the following is a sign that a driver should assess their performance?",
      options: [
        "Driving on familiar routes without getting lost",
        "Being frequently surprised by the sudden presence of other vehicles",
        "Feeling confident and relaxed after a long drive",
        "Having no traffic violations in the past few years",
      ],
      correctAnswerIndex: 1,
      explanation: "Correct Answer: B",
      sourceLessonId: "m6ch2_pg2",
    },
    {
      id: "q3",
      question: "What is a recommended strategy for a driver who finds night driving difficult?",
      options: [
        "Switch to high-beam lights at all times",
        "Limit trips to daylight hours only",
        "Drive faster to spend less time on the road",
        "Follow other vehicles closely to see their taillights",
      ],
      correctAnswerIndex: 1,
      explanation: "Correct Answer: B",
      sourceLessonId: "m6ch2_pg3",
    },
    {
      id: "q4",
      question: "(Tricky) Which vehicle feature is explicitly recommended to improve comfort and safety?",
      options: [
        "Smaller side mirrors to reduce wind resistance",
        "Adjustable seats, large mirrors, and legible instruments",
        "Non-adjustable seats with a low driving position",
        "Darkly tinted windows for all glass surfaces",
      ],
      correctAnswerIndex: 1,
      explanation: "Correct Answer: B",
      sourceLessonId: "m6ch2_pg4",
    },
    {
      id: "q5",
      question: "How does the \"55 Alive\" course help mature drivers?",
      options: [
        "It guarantees they will never be involved in a crash",
        "It exempts them from all future vision tests",
        "It helps identify bad habits and updates them on new traffic laws",
        "It provides a new vehicle for all participants",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m6ch2_pg4",
    },
  ],
};
