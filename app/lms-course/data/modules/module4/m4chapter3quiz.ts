import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m4chapter3Quiz: ChapterQuiz = {
  id: "m4chapter3-quiz",
  chapterId: "m4chapter3",
  title: "Chapter Quiz",
  description: "ðŸš— Core Vehicle Registration Requirements",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "How long is a typical passenger vehicle registration valid in PEI?",
      options: [
        "2 years",
        "Until the end of the calendar year",
        "Until the registered owner's birthday",
        "5 years",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m4ch3_pg2",
    },
    {
      id: "q2",
      question: "What documents must you keep inside your vehicle at all times while driving?",
      options: [
        "Your original birth certificate and passport",
        "A single-journey in-transit permit",
        "The vehicle registration permit and passed inspection report",
        "Proof of dangerous goods certification",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m4ch3_pg4",
    },
    {
      id: "q3",
      question: "If you move or change your address, how soon must you notify Highway Safety?",
      options: [
        "Within 7 days",
        "Within 30 days",
        "It isn't required until your next registration renewal",
        "Only when your licence expires",
      ],
      correctAnswerIndex: 1,
      explanation: "Correct Answer: B",
      sourceLessonId: "m4ch3_pg2",
    },
    {
      id: "q4",
      question: "What is the rule for an out-of-province visitor driving their own passenger vehicle in PEI?",
      options: [
        "They must register the vehicle immediately upon arrival",
        "They can drive for up to four months without registering the vehicle in PEI",
        "They are limited to 10 days before getting a PEI licence plate",
        "They must obtain an In-Transit Permit beforehand",
      ],
      correctAnswerIndex: 1,
      explanation: "Correct Answer: B",
      sourceLessonId: "m4ch3_pg2",
    },
    {
      id: "q5",
      question: "Which of the following is true regarding transporting dangerous goods?",
      options: [
        "You can transport them if they fit securely in your trunk",
        "Anyone with a Class 5 licence can occasionally haul explosives",
        "Only qualified people are legally allowed to transport them",
        "They can be safely transported at night to minimize danger",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m4ch3_pg5",
    },
    {
      id: "q6",
      question: "You buy an unregistered car and need to drive it to a mechanic before getting it officially registered. What should you do?",
      options: [
        "Drive carefully on the shoulder of the road to avoid traffic",
        "Borrow a licence plate from a friend's legally registered car",
        "Obtain an In-Transit Permit for a single journey",
        "Register it temporarily as an off-highway vehicle",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m4ch3_pg2",
    },
  ],
};

