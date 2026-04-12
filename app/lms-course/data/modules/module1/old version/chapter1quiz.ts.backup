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
  description: "Understanding Your Driver's Licence",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "Driving in Prince Edward Island is considered:",
      options: [
        "A right for all residents",
        "A privilege granted by the province",
        "A personal freedom that cannot be removed",
        "A privilege granted by the police",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Driving is a privilege granted by the province. If traffic laws are broken or driving is unsafe, that privilege can be suspended or removed.",
      sourceLessonId: "pg1",
    },
    {
      id: "q2",
      question: "Which of the following means your driver's licence is NOT valid?",
      options: [
        "It is renewed every year",
        "It is suspended",
        "It is class-specific",
        "It has your address on it",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A suspended licence is not valid. You cannot legally drive until the suspension is lifted.",
      sourceLessonId: "pg1",
    },
    {
      id: "q3",
      question: "Your driver's licence allows you to drive:",
      options: [
        "Any vehicle on the road",
        "Only vehicles listed under your licence class",
        "Only vehicles owned by you",
        "Only vehicles under 10 years old",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A licence is class-specific. You may only drive vehicle types covered by your licence class.",
      sourceLessonId: "pg1",
    },
    {
      id: "q4",
      question: "A restriction on a licence means:",
      options: [
        "You can only drive during the day",
        "A condition that limits how or when you may drive",
        "You must take another road test",
        "Your licence is cancelled",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A restriction is a licence condition you must follow, such as wearing corrective lenses while driving.",
      sourceLessonId: "pg1",
    },
    {
      id: "q5",
      question: "Which of these could be a licence restriction?",
      options: [
        "Wearing glasses while driving",
        "Driving only on highways",
        "Driving only in your city",
        "Driving only electric vehicles",
      ],
      correctAnswerIndex: 0,
      explanation:
        "A common restriction is requiring corrective lenses. If your licence lists that condition, you must follow it every time you drive.",
      sourceLessonId: "pg1",
    },
    {
      id: "q6",
      question: "Which licence class is the Instruction Permit for learners?",
      options: ["Class 1", "Class 5", "Class 6", "Class 7"],
      correctAnswerIndex: 3,
      explanation:
        "Class 7 is the instruction permit class used by learners in Prince Edward Island.",
      sourceLessonId: "pg2",
    },
    {
      id: "q7",
      question: "Which licence class allows you to drive standard passenger vehicles?",
      options: ["Class 5", "Class 7", "Class 6", "Class 9"],
      correctAnswerIndex: 0,
      explanation:
        "Class 5 is the standard licence for everyday passenger vehicles.",
      sourceLessonId: "pg2",
    },
    {
      id: "q8",
      question: "When does a driver's licence expire in PEI?",
      options: [
        "January 1st",
        "At midnight on the holder's birthday",
        "After 5 years automatically",
        "At the end of the year",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Driver's licences expire at midnight on the licence holder's birthday.",
      sourceLessonId: "pg2",
    },
    {
      id: "q9",
      question: "How long is an Instruction Permit (Class 7) valid?",
      options: ["6 months", "1 year", "2 years", "5 years"],
      correctAnswerIndex: 2,
      explanation:
        "A Class 7 instruction permit is valid for two years from the issue date.",
      sourceLessonId: "pg2",
    },
    {
      id: "q10",
      question: "Failing to follow the conditions on your driver's licence is:",
      options: [
        "Allowed if the road is empty",
        "A warning only",
        "An offence under the Highway Traffic Act",
        "Only illegal for commercial drivers",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Not following licence conditions is an offence under the Highway Traffic Act.",
      sourceLessonId: "pg1",
    },
  ],
};
