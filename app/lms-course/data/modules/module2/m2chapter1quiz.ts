import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m2chapter1Quiz: ChapterQuiz = {
  id: "m2chapter1-quiz",
  chapterId: "m2chapter1",
  title: "Chapter 1 Quiz",
  description: "Traffic Signs, Signals, Pavement Markings and Work Zones",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "A green traffic signal means:",
      options: [
        "You have complete right-of-way in all cases",
        "You may proceed carefully and still yield where required",
        "You may enter even if the intersection is blocked",
        "Pedestrians must always wait for you",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Green is qualified permission to proceed carefully, not absolute right-of-way.",
      sourceLessonId: "m2ch1_pg2",
    },
    {
      id: "q2",
      question: "At an amber light, the best handbook-aligned action is to:",
      options: [
        "Accelerate to beat red",
        "Proceed exactly as if it were green",
        "Enter only if stopping safely is not possible",
        "Ignore the signal if no police are present",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Entering on amber is a violation unless stopping cannot be done safely.",
      sourceLessonId: "m2ch1_pg2",
    },
    {
      id: "q3",
      question: "A flashing red light should be treated as:",
      options: ["Yield only", "Complete stop", "No turn allowed", "Pedestrian only signal"],
      correctAnswerIndex: 1,
      explanation:
        "Flashing red requires a full stop, then proceed when safe.",
      sourceLessonId: "m2ch1_pg3",
    },
    {
      id: "q4",
      question: "Which statement about pavement lines is correct?",
      options: [
        "Solid yellow means passing is encouraged",
        "Broken white means lane changes are prohibited",
        "Solid white means lane changes should not be made",
        "Yellow lines separate lanes moving in the same direction",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Solid white lines indicate lane changes should not be made in that area.",
      sourceLessonId: "m2ch1_pg5",
    },
    {
      id: "q5",
      question:
        "At a railway crossing with flashing lights and bell, you should:",
      options: [
        "Proceed if you cannot see a train immediately",
        "Stop and wait until warning devices stop and tracks are clear",
        "Slow down but keep moving",
        "Stop only for freight trains",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Active railway warning devices require a stop until warnings cease and crossing is safe.",
      sourceLessonId: "m2ch1_pg4",
    },
    {
      id: "q6",
      question: "The shape that always identifies a stop sign is:",
      options: ["Triangle", "Rectangle", "Octagon", "Circle"],
      correctAnswerIndex: 2,
      explanation: "Stop signs are uniquely octagonal for fast recognition.",
      sourceLessonId: "m2ch1_pg6",
    },
    {
      id: "q7",
      question: "Construction-zone speed limits apply:",
      options: [
        "Only when workers are visibly present",
        "Only during daylight",
        "At all times in the zone",
        "Only when police are directing traffic",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Handbook guidance says temporary construction speed limits must be obeyed even if workers or equipment are not active.",
      sourceLessonId: "m2ch1_pg7",
    },
    {
      id: "q8",
      question:
        "Best sequence for making a safe approach at a complex intersection is:",
      options: [
        "Check speed only",
        "Signal, sign, pavement marking, then zone conditions",
        "Follow the vehicle ahead without scanning",
        "Watch pedestrians only",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A full scan across signal, sign, marking, and zone context supports safer, earlier decisions.",
      sourceLessonId: "m2ch1_pg8",
    },
  ],
};
