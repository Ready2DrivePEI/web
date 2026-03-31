import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const chapter2Quiz: ChapterQuiz = {
  id: "chapter2-quiz",
  chapterId: "chapter2",
  title: "Chapter 2 Quiz",
  description: "Getting Your Instruction Permit (Class 7)",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "What is the minimum age to apply for a Class 7 Instruction Permit in PEI?",
      options: ["14", "15", "16", "18"],
      correctAnswerIndex: 2,
      explanation:
        "You can apply for a Class 7 Instruction Permit at 16 years old if your driving privilege is not under suspension.",
      sourceLessonId: "pg1",
    },
    {
      id: "q2",
      question: "Which document is acceptable as proof of identity?",
      options: ["Gym membership card", "Birth certificate", "Library card", "School timetable"],
      correctAnswerIndex: 1,
      explanation:
        "A birth certificate is listed as valid proof of identity for the Instruction Permit application.",
      sourceLessonId: "pg1",
    },
    {
      id: "q3",
      question: "How many proof-of-address documents are required for PEI address verification?",
      options: ["One", "Two", "Three", "None"],
      correctAnswerIndex: 1,
      explanation:
        "Applicants must bring two acceptable documents as proof of PEI address.",
      sourceLessonId: "pg1",
    },
    {
      id: "q4",
      question: "If your previous address was outside Canada, what extra record may be required?",
      options: [
        "Vehicle registration from previous country",
        "Canadian Immigration Identification Record of Entry form",
        "Passport-sized photo from local studio",
        "Employer reference letter only",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Applicants from outside Canada may need to provide their Canadian Immigration Identification Record of Entry form.",
      sourceLessonId: "pg1",
    },
    {
      id: "q5",
      question: "Which route has the shorter minimum wait before the road test?",
      options: [
        "Self-study route",
        "Driver Education route",
        "Both are the same",
        "No waiting period applies",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Driver Education route has a shorter minimum waiting period (275 days) compared to self-study (365 days).",
      sourceLessonId: "pg2",
    },
    {
      id: "q6",
      question: "What is the minimum licence experience required for the supervising driver?",
      options: ["1 year", "2 years", "3 years", "4 years"],
      correctAnswerIndex: 3,
      explanation:
        "The supervising driver must have held a driver's licence for at least four years.",
      sourceLessonId: "pg2",
    },
    {
      id: "q7",
      question: "What BAC limit applies to the supervising driver while accompanying a learner?",
      options: ["Under 0.08", "Under 0.05", "Exactly 0.05", "No limit applies"],
      correctAnswerIndex: 1,
      explanation:
        "The supervising driver must keep BAC below 0.05 while accompanying a learner.",
      sourceLessonId: "pg2",
    },
    {
      id: "q8",
      question: "Where should the yellow 'L' decal be placed?",
      options: [
        "Inside the windshield",
        "On the rear bumper",
        "Above the Motor Vehicle Inspection sticker",
        "On the front passenger door",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The learner decal should be placed just above the Motor Vehicle Inspection sticker.",
      sourceLessonId: "pg2",
    },
    {
      id: "q9",
      question: "Before taking the road test, which course is mandatory?",
      options: [
        "Commercial Driving Intro",
        "Novice Driver Course",
        "Defensive Winter Driving Course",
        "Traffic Court Awareness Workshop",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The Novice Driver Course is required before you are eligible for the road test.",
      sourceLessonId: "pg2",
    },
    {
      id: "q10",
      question: "In this LMS, when does the next chapter unlock?",
      options: [
        "After reading all lesson pages only",
        "After opening the quiz page",
        "After passing the chapter quiz",
        "After logging out and in again",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The system unlocks the next chapter only after the current chapter quiz is passed.",
      sourceLessonId: "pg2",
    },
  ],
};
