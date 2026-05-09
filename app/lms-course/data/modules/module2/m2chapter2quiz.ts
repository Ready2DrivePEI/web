import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m2chapter2Quiz: ChapterQuiz = {
  id: "m2chapter2-quiz",
  chapterId: "m2chapter2",
  title: "Chapter 2 Quiz",
  description: "Traffic Signs",
  passRule: "all-correct",
  questions: [
    {
      id: "q0",
      question: "The shape that always identifies a stop sign is:",
      options: ["Triangle", "Rectangle", "Octagon", "Circle"],
      correctAnswerIndex: 2,
      explanation: "Stop signs are uniquely octagonal for fast recognition.",
      sourceLessonId: "m2ch2_pg1",
    },
    {
      id: "q1",
      question:
        "You approach a stop sign on a quiet street with no visible cars. What is the correct legal action?",
      options: [
        "Slow to walking speed and continue",
        "Come to a complete stop, scan all directions, then proceed when safe",
        "Honk and continue through to warn others",
        "Stop only if a pedestrian is visible",
      ],
      correctAnswerIndex: 1,
      explanation:
        "A stop sign always requires a full stop. Rolling stops are illegal and remove your hazard-check time.",
      sourceLessonId: "m2ch2_pg2",
    },
    {
      id: "q2",
      question:
        "At a yield sign, traffic is approaching from your left but there appears to be a gap. What should guide your decision?",
      options: [
        "How quickly you can accelerate",
        "Whether others must brake or swerve because of your entry",
        "Whether your passenger says go",
        "Whether the car behind you is impatient",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Yield is a judgement test. Enter only when your move does not force conflict.",
      sourceLessonId: "m2ch2_pg2",
    },
    {
      id: "q3",
      question:
        "A 'Do Not Enter' sign at an on-ramp means:",
      options: [
        "Entry is allowed if traffic looks light",
        "Entry is prohibited because traffic is moving against you",
        "Entry is allowed for short distances",
        "Entry is allowed if you turn on hazard lights",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Do Not Enter protects against wrong-way entry and head-on crash risk.",
      sourceLessonId: "m2ch2_pg3",
    },
    {
      id: "q4",
      question:
        "Why are warning signs placed before hazards rather than at the hazard itself?",
      options: [
        "To make roads look organized",
        "To provide reaction and preparation time before conflict",
        "To test sign memorization only",
        "To reduce sign manufacturing costs",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Warning signs are timing tools that let drivers adjust early.",
      sourceLessonId: "m2ch2_pg4",
    },
    {
      id: "q5",
      question:
        "You see a traffic-light-ahead warning sign on a downhill approach. What is the best immediate action?",
      options: [
        "Maintain speed until the light is visible",
        "Ease off the accelerator, cover the brake, and scan ahead early",
        "Switch lanes quickly to avoid stopping",
        "Ignore it because the light might be green",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Predictive driving means preparing before the hazard appears.",
      sourceLessonId: "m2ch2_pg5",
    },
    {
      id: "q6",
      question:
        "In a construction zone with cones and temporary lane shifts, which approach is safest?",
      options: [
        "Rely on memory from your last drive through",
        "Read temporary signs and cones in real time, merge early, and keep speed controlled",
        "Follow the fastest vehicle",
        "Change lanes late to stay ahead of traffic",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Construction zones override normal patterns and require fresh reading of conditions.",
      sourceLessonId: "m2ch2_pg6",
    },
    {
      id: "q7",
      question:
        "A flag person ahead sign means:",
      options: [
        "You can continue normally unless workers are visible",
        "A human may directly control traffic and must be obeyed immediately",
        "Only heavy trucks need to slow",
        "It applies only during daytime",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Flagger control is active traffic direction, not optional guidance.",
      sourceLessonId: "m2ch2_pg6",
    },
    {
      id: "q8",
      question:
        "Near a school zone sign at dismissal time, what mindset is most defensive?",
      options: [
        "Assume children will wait for vehicles",
        "Expect sudden movement and reduce speed early",
        "Maintain speed unless a crossing guard is visible",
        "Focus only on the lane center line",
      ],
      correctAnswerIndex: 1,
      explanation:
        "School zones require expectation of unpredictable child behavior.",
      sourceLessonId: "m2ch2_pg2",
    },
    {
      id: "q9",
      question:
        "You are approaching your freeway exit and see advance direction signs. What causes fewer crashes?",
      options: [
        "Moving to the correct lane early",
        "Staying fast and cutting across lanes late",
        "Following the nearest vehicle without checking signs",
        "Waiting until the exit gore to decide",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Early positioning prevents abrupt conflict and panic maneuvers.",
      sourceLessonId: "m2ch2_pg7",
    },
    {
      id: "q10",
      question:
        "A deer crossing sign appears at dusk. Which response reflects predictive hazard awareness?",
      options: [
        "Keep speed and scan only your lane",
        "Reduce speed, widen scan to shoulders, and expect more than one animal",
        "Honk continuously and accelerate through",
        "Ignore it unless another car brakes first",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Wildlife often moves unpredictably and in groups, so speed and scan strategy should change early.",
      sourceLessonId: "m2ch2_pg4",
    },
  ],
};
