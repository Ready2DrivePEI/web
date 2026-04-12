import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const chapter3Quiz: ChapterQuiz = {
  id: "chapter3-quiz",
  chapterId: "chapter3",
  title: "Chapter 3 Quiz",
  description: "Knowledge, Vision, and Road Test Prep",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "What are the three core areas covered by the knowledge test?",
      options: [
        "Insurance rates, weather, and parking fees",
        "Traffic laws, safe driving practices, and road signs",
        "Vehicle brands, fuel type, and highway speed only",
        "Mechanical repairs, tire replacement, and car cleaning",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The knowledge test focuses on traffic laws, safe driving practices, and road sign recognition.",
      sourceLessonId: "pg1",
    },
    {
      id: "q2",
      question: "If a student cannot read the written test comfortably, what option is available?",
      options: [
        "No alternative is available",
        "The test is automatically waived",
        "An oral version of the test can be requested",
        "Only a practical test is required instead",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Students may request an oral test version where questions are asked verbally.",
      sourceLessonId: "pg1",
    },
    {
      id: "q3",
      question: "If you fail the knowledge test, what should you do next?",
      options: [
        "You are permanently disqualified",
        "Wait one year before any retest",
        "Book another appointment and retake later",
        "Skip directly to the road test",
      ],
      correctAnswerIndex: 2,
      explanation:
        "You can schedule another attempt on a later date if you do not pass.",
      sourceLessonId: "pg1",
    },
    {
      id: "q4",
      question: "Which of the following is part of the vision test scope?",
      options: [
        "Only ability to read one line of text",
        "Visual acuity, field of vision, and color recognition",
        "Hearing ability and reaction time only",
        "Memory recall and concentration tasks",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The vision test evaluates multiple dimensions needed for safe driving decisions.",
      sourceLessonId: "pg1",
    },
    {
      id: "q5",
      question: "Which item is required on road test day?",
      options: [
        "A rental agreement",
        "A second learner passenger",
        "A valid proof of insurance card",
        "A letter from your employer",
      ],
      correctAnswerIndex: 2,
      explanation:
        "You must bring a valid proof of insurance card for the vehicle used in the road test.",
      sourceLessonId: "pg2",
    },
    {
      id: "q6",
      question: "Who must accompany you to the road test location?",
      options: [
        "No one",
        "A licensed driver",
        "Any friend over age 18",
        "A driving school owner only",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A licensed driver must accompany you to the test.",
      sourceLessonId: "pg2",
    },
    {
      id: "q7",
      question: "What happens if the vehicle fails pre-test inspection checks?",
      options: [
        "Test continues but with penalty",
        "Test proceeds only in daylight",
        "Road test does not proceed",
        "Only parking section is skipped",
      ],
      correctAnswerIndex: 2,
      explanation:
        "If required safety or legal checks fail, the road test cannot proceed.",
      sourceLessonId: "pg2",
    },
    {
      id: "q8",
      question: "Which behavior is evaluated during the road test?",
      options: [
        "Only top speed performance",
        "Starting/stopping, turning, parking, and hazard response",
        "How quickly music can be changed in the car",
        "Number of lane changes per minute",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The examiner evaluates a full set of practical and safety behaviors in real traffic conditions.",
      sourceLessonId: "pg2",
    },
    {
      id: "q9",
      question: "Are extra passengers allowed in the vehicle during the road test?",
      options: ["Yes, if they remain quiet", "Yes, if they are family", "No", "Only on weekends"],
      correctAnswerIndex: 2,
      explanation:
        "Additional passengers are not permitted during the road test.",
      sourceLessonId: "pg2",
    },
    {
      id: "q10",
      question: "In this LMS, when does the next chapter unlock?",
      options: [
        "After viewing all images only",
        "After passing the chapter quiz",
        "As soon as the chapter page opens",
        "After logging out",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Progression remains quiz-gated; the next chapter unlocks only after quiz pass.",
      sourceLessonId: "pg2",
    },
  ],
};
