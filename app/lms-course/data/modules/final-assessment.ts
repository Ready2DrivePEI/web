import { FileCheck2 } from "lucide-react";
import type { ChapterQuiz, QuizQuestion } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";

// Import all module quizzes
import { chapter1Quiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { chapter2Quiz } from "@/app/lms-course/data/modules/module1/chapter2quiz";
import { m2chapter1Quiz } from "@/app/lms-course/data/modules/module2/m2chapter1quiz";
import { m2chapter2Quiz } from "@/app/lms-course/data/modules/module2/m2chapter2quiz";
import { m2chapter3Quiz } from "@/app/lms-course/data/modules/module2/m2chapter3quiz";
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
  { moduleId: "module2", chapterId: "m2chapter3", quiz: m2chapter3Quiz },
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
    imageSrc: "/final/q1.png",
    imageAlt: "A driver's view from inside a car in heavy traffic, a large SUV is tailgating extremely close behind, visible in the rearview mirror",
    question: "Scenario: You are driving in moderate traffic and the vehicle behind you is tailgating aggressively and flashing its headlights. How should you respond defensively?",
    options: [
      "Lightly tap your brakes to warn them to back off",
      "Accelerate to create a larger gap between your vehicles",
      "Maintain your speed, stay calm, and safely change lanes or pull over to let them pass",
      "Honk your horn and make eye contact in the mirror to assert your space",
    ],
    correctAnswerIndex: 2,
    explanation: "Aggressive drivers pose a severe hazard. The safest action is to de-escalate by calmly removing your vehicle from their path without unpredictable braking or speeding.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q2",
    question: "Scenario: You are leaving a gathering. A friend who holds a GDL (Graduated Driver Licence) drank one beer over an hour ago. They say they feel completely sober and offer to drive. What is the legal reality?",
    options: [
      "They are safe to drive because the body processes one drink per hour",
      "GDL drivers are subject to a zero-tolerance policy for blood alcohol content; they cannot drive legally",
      "They can drive legally as long as they stay in the right lane and drive under the speed limit",
      "You can let them drive but you must remain awake to help them navigate",
    ],
    correctAnswerIndex: 1,
    explanation: "Graduated licensing programs strictly mandate zero blood alcohol concentration. Even a small amount of alcohol violates this rule and carries severe licence suspensions.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q3",
    question: "Scenario: A fully licensed (Class 5) driver is pulled over by law enforcement and their breathalyzer test registers a Blood Alcohol Concentration (BAC) over the legal limit. What happens immediately at the roadside?",
    options: [
      "They receive a severe warning and must arrange for another driver",
      "Their vehicle is impounded for 24 hours, but they keep their physical licence",
      "Their licence is suspended for 24 hours and they receive a court summons",
      "Their driver's licence is suspended immediately, and their vehicle is impounded",
    ],
    correctAnswerIndex: 3,
    explanation: "Failing a breathalyzer test results in immediate, mandatory roadside administrative penalties, which include immediate licence suspension and vehicle impoundment before any criminal conviction.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q4",
    imageSrc: "/final/q4.png",
    imageAlt: "A car signaling right at a city intersection. A cyclist is riding straight in a painted bike lane on the right side of the car.",
    question: "Scenario: You are preparing to make a right turn at an intersection. A cyclist is traveling straight in the designated bike lane to your right. Who has the right-of-way?",
    options: [
      "You have the right-of-way because motor vehicles turn faster than bicycles travel",
      "The cyclist has the right-of-way. You must yield, check your blind spot, and turn only when clear",
      "Honk to alert the cyclist, then merge into the bike lane to block them before turning",
      "Yield only if the cyclist is signaling a left turn",
    ],
    correctAnswerIndex: 1,
    explanation: "Cyclists traveling straight have the right-of-way over turning vehicles. A driver turning right must shoulder-check and yield to any through-traffic in the bike lane.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q5",
    question: "Scenario: You are driving on a narrow two-lane rural road. You approach a cyclist riding near the right edge. Oncoming traffic is heavy. What is the safest course of action?",
    options: [
      "Squeeze past the cyclist within your lane to avoid crossing the center line",
      "Honk your horn continuously so the cyclist moves onto the unpaved shoulder",
      "Slow down to the cyclist's speed and wait until oncoming traffic clears to pass with at least 1 meter of space",
      "Pass immediately but accelerate rapidly to minimize the time spent beside the cyclist",
    ],
    correctAnswerIndex: 2,
    explanation: "You must share the road safely. When passing a cyclist is impossible due to oncoming traffic, you must slow down and wait behind them until a safe, 1-meter passing gap opens.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q6",
    imageSrc: "/final/q6.png",
    imageAlt: "Driver's perspective waiting to turn left at an intersection. A single motorcycle approaches from the opposite direction with its right turn signal blinking.",
    question: "Scenario: You are waiting to turn left at an open intersection. A motorcycle is approaching from the opposite direction with its turn signal flashing. What should you do?",
    options: [
      "Proceed with your turn immediately because motorcycles stop faster than cars",
      "Wait until the motorcycle actually begins its turn or comes to a complete stop before you turn",
      "Flash your high beams to instruct the motorcyclist to yield to your turn",
      "Turn left quickly because the motorcycle takes up less physical lane space",
    ],
    correctAnswerIndex: 1,
    explanation: "Motorcycle turn signals often do not self-cancel and may be left on by mistake. Never assume a motorcycle is turning until you see the rider physically initiate the maneuver.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q7",
    question: "Scenario: You are involved in a minor fender bender on a busy multi-lane highway. No one is injured, and both vehicles are perfectly drivable. What is your immediate priority?",
    options: [
      "Leave the vehicles exactly where they are until the police arrive to document the scene",
      "Move the vehicles out of the traveled lanes to a safe spot, like the shoulder, then exchange information",
      "Exchange insurance information quickly through the window and drive away",
      "Stand in the lane behind your vehicle to wave traffic around the crash",
    ],
    correctAnswerIndex: 1,
    explanation: "In a minor collision with no injuries, leaving vehicles in active traffic creates a severe secondary crash hazard. Move them to the shoulder immediately before exchanging info.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q8",
    imageSrc: "/final/q8.png",
    imageAlt: "A severe single-car collision off the side of a rural road, smoke is coming from the hood, the driver is slumped inside.",
    question: "Scenario: You are the first to arrive at a severe single-vehicle collision. The driver is unconscious inside, and smoke is coming from the hood. After ensuring your own safety and calling 911, what should you do?",
    options: [
      "Pull the driver out of the vehicle immediately through the window",
      "Try to wake the driver by shaking their shoulders vigorously",
      "Turn off the vehicle's ignition to reduce fire risk, but do not move the injured person unless there is an immediate, deadly threat",
      "Start searching the vehicle's trunk for a first-aid kit",
    ],
    correctAnswerIndex: 2,
    explanation: "Moving an injured person can cause permanent spinal damage. Unless there is an active fire or deadly hazard, secure the scene (turn off ignition) and wait for emergency responders.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q9",
    question: "Scenario: You have a 2-hour drive ahead. You just took an over-the-counter allergy medication that carries a warning about drowsiness. You feel perfectly fine right now. What is the correct decision?",
    options: [
      "Drink a caffeinated beverage before leaving to counteract the medication's side effects",
      "Drive normally, but keep the windows rolled down for fresh air to stay alert",
      "Do not drive. Find an alternative mode of transportation or wait until the medication's effects have fully worn off",
      "Drive, but stay in the right lane and keep your speed 10 km/h under the limit",
    ],
    correctAnswerIndex: 2,
    explanation: "Over-the-counter drugs can impair reaction time and judgment as severely as alcohol. If a medication warns of drowsiness, you cannot safely or legally operate a vehicle.",
    sourceLessonId: "lms-course/assessment/final",
  },
  {
    id: "scenario-q10",
    imageSrc: "/final/q10.png",
    imageAlt: "A driver's view at night in heavy rain, following a large transport truck. The truck's tires are throwing up a massive cloud of water spray, severely reducing visibility.",
    question: "Scenario: It is raining heavily at night. You are driving behind a large transport truck that is throwing up a massive cloud of water spray, drastically reducing your visibility. What is the safest action?",
    options: [
      "Follow closer so your headlights can better illuminate the back of the truck trailer",
      "Turn on your high beams to cut through the water spray and see the road ahead",
      "Increase your following distance significantly and ensure your low-beam headlights are on",
      "Overtake the truck immediately, regardless of passing zones, to escape the spray",
    ],
    correctAnswerIndex: 2,
    explanation: "Large vehicles create dangerous spray in wet conditions. You must drop back to increase your safety margin and visibility. High beams will reflect off the water and blind you.",
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
