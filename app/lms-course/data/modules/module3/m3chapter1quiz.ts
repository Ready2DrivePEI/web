import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m3chapter1Quiz: ChapterQuiz = {
  id: "m3chapter1-quiz",
  chapterId: "m3chapter1",
  title: "Chapter Quiz",
  description: "Speed Management and Following Distance",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "Which of the following best describes a posted speed limit?",
      options: [
        "A recommended target speed for all traffic conditions",
        "The absolute maximum speed allowed only under favourable conditions",
        "The minimum speed you must maintain on the highway",
        "A suggestion that applies only during daylight hours",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A speed limit implies ideal conditions. The foundational rule is to drive at a speed that is reasonable and prudent for the current weather and traffic conditions.",
      sourceLessonId: "m3ch1_pg1",
    },
    {
      id: "q2",
      question: "Unless otherwise posted, the maximum speed limit on most PEI provincial highways is:",
      options: ["50 km/h", "80 km/h", "90 km/h", "100 km/h"],
      correctAnswerIndex: 1,
      explanation:
        "Unless posted otherwise, most provincial highways default to 80 km/h, while urban areas typically default to 50 km/h.",
      sourceLessonId: "m3ch1_pg1",
    },
    {
      id: "q3",
      question: "At 50 km/h, how far does a vehicle travel during an average driver's ¾-second reaction time (before they can even apply the brake)?",
      options: [
        "It stops instantly",
        "About 2 metres",
        "About 10 metres",
        "About 30 metres",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Stopping happens in three phases. During just the reaction phase (before braking begins), a vehicle at 50 km/h covers about 10 metres (two car lengths).",
      sourceLessonId: "m3ch1_pg2",
    },
    {
      id: "q4",
      question: "Under normal, favourable driving conditions, PEI advises keeping what minimum following distance from the vehicle ahead?",
      options: [
        "1 car length for every 10 km/h",
        "1 second",
        "2 seconds",
        "3 seconds",
      ],
      correctAnswerIndex: 3,
      explanation:
        "PEI uses the 3-Second Time-Interval Formula. You count three seconds from when the car ahead passes a fixed marker until you reach it.",
      sourceLessonId: "m3ch1_pg3",
    },
    {
      id: "q5",
      question: "If you are following a motorcycle, or pulling a trailer, your following distance should:",
      options: [
        "Stay at 3 seconds",
        "Be reduced to 2 seconds",
        "Be increased to at least 4 seconds",
        "Ignore the time-interval formula",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Motorcycles can stop very quickly, and trailers add significant weight making it harder to stop. In both cases, increase your distance to 4+ seconds.",
      sourceLessonId: "m3ch1_pg3",
    },
  ],
};
