import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m2chapter2Quiz: ChapterQuiz = {
  id: "m2chapter2-quiz",
  chapterId: "m2chapter2",
  title: "Chapter 2 Quiz",
  description: "Right-of-Way, Intersections, Pedestrians and Core Legal Duties",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question:
        "At a four-way stop, when two vehicles arrive at the same time, who yields?",
      options: [
        "Vehicle on the right yields to vehicle on the left",
        "Vehicle on the left yields to vehicle on the right",
        "Whoever entered the block first has right-of-way",
        "The larger vehicle always goes first",
      ],
      correctAnswerIndex: 1,
      explanation:
        "At same-time arrival, the vehicle on the left yields to the vehicle on the right.",
      sourceLessonId: "m2ch2_pg2",
    },
    {
      id: "q2",
      question: "Which stop-sign behavior is correct?",
      options: [
        "Slow and roll through if no one is visible",
        "Make a full stop at the proper stopping point",
        "Stop only during daytime",
        "Stop only if cross-traffic is heavy",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Rolling stops are illegal. A full stop is required at the proper location.",
      sourceLessonId: "m2ch2_pg3",
    },
    {
      id: "q3",
      question: "When turning left, a driver must:",
      options: [
        "Proceed quickly to claim space",
        "Yield to vehicles and pedestrians that create collision risk",
        "Ignore pedestrians if the turn signal is on",
        "Turn from any lane when clear",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Left turns require proper lane position, signaling, and yielding to conflicting traffic and pedestrians.",
      sourceLessonId: "m2ch2_pg3",
    },
    {
      id: "q4",
      question: "A driver entering from a private driveway should:",
      options: [
        "Merge first, then check pedestrians",
        "Enter if other traffic seems fast enough to avoid you",
        "Stop, yield, and enter only when no one must brake or swerve",
        "Assume main-road traffic will yield",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Do not enter if another driver would need to brake or swerve to avoid a collision.",
      sourceLessonId: "m2ch2_pg4",
    },
    {
      id: "q5",
      question:
        "When an emergency vehicle with active siren/warning signals approaches, you must:",
      options: [
        "Maintain speed unless it is directly behind you",
        "Move aside and stop until it has passed",
        "Stop only if other drivers stop first",
        "Accelerate through the next intersection",
      ],
      correctAnswerIndex: 1,
      explanation:
        "You must clear the way and remain stopped until emergency vehicles pass.",
      sourceLessonId: "m2ch2_pg5",
    },
    {
      id: "q6",
      question:
        "At a signalized intersection, a pedestrian in the crosswalk with a walk/green signal has:",
      options: [
        "No priority over turning traffic",
        "Right-of-way over vehicles",
        "Right-of-way only if crossing quickly",
        "Priority only at school zones",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Pedestrians entering with walk/green have right-of-way over vehicles.",
      sourceLessonId: "m2ch2_pg6",
    },
    {
      id: "q7",
      question: "At a flashing amber intersection, drivers should:",
      options: [
        "Come to a complete stop each time",
        "Proceed with caution and yield to pedestrians in crosswalks",
        "Ignore pedestrians unless they wave",
        "Treat it as a green arrow",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Flashing amber means caution; drivers must yield to pedestrians in crosswalks.",
      sourceLessonId: "m2ch2_pg6",
    },
    {
      id: "q8",
      question:
        "If a vehicle ahead is stopped for a pedestrian, what is the correct action?",
      options: [
        "Pass quickly in the next lane",
        "Honk and continue through",
        "Do not pass the stopped vehicle",
        "Pass only if visibility seems clear",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Passing a vehicle stopped for a pedestrian is prohibited and dangerous.",
      sourceLessonId: "m2ch2_pg7",
    },
    {
      id: "q9",
      question:
        "Who is legally responsible for ensuring passengers under 16 are properly restrained?",
      options: ["The rear passenger", "The parent only", "The driver", "The vehicle owner only"],
      correctAnswerIndex: 2,
      explanation:
        "The driver is responsible for passengers under 16 being properly restrained.",
      sourceLessonId: "m2ch2_pg1",
    },
    {
      id: "q10",
      question: "Which sequence best reflects safe right-of-way decision-making?",
      options: [
        "Enter first, then scan for hazards",
        "Control -> stop position -> conflict check -> right-of-way -> proceed",
        "Signal and go if there is no horn sound",
        "Watch only the vehicle in front",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A repeatable step-by-step sequence improves legal compliance and collision avoidance.",
      sourceLessonId: "m2ch2_pg8",
    },
  ],
};
