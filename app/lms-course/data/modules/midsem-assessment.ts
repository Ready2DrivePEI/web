import { FileCheck2 } from "lucide-react";
import type { ChapterQuiz, QuizQuestion } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { chapter1Quiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";
import { chapter2Quiz } from "@/app/lms-course/data/modules/module1/chapter2quiz";
import { m2chapter1Quiz } from "@/app/lms-course/data/modules/module2/m2chapter1quiz";
import { m2chapter2Quiz } from "@/app/lms-course/data/modules/module2/m2chapter2quiz";
import { m2chapter3Quiz } from "@/app/lms-course/data/modules/module2/m2chapter3quiz";
import { m3chapter1Quiz } from "@/app/lms-course/data/modules/module3/m3chapter1quiz";
import { m3chapter2Quiz } from "@/app/lms-course/data/modules/module3/m3chapter2quiz";
import { m3chapter3Quiz } from "@/app/lms-course/data/modules/module3/m3chapter3quiz";

export const MIDSEM_MODULE_ID = "midsem";
export const MIDSEM_CHAPTER_ID = "midsem-assessment";
export const MIDSEM_QUIZ_ID = "midsem-assessment-quiz";
export const MIDSEM_ASSESSMENT_HREF = "/lms-course/assessment/mid-sem";
export const MIDSEM_RANDOM_COUNT = 40;
export const MIDSEM_UNIQUE_COUNT = 10;
export const MIDSEM_RANDOM_SELECTION_STORAGE_KEY = "r2d:assessment:midsem:random-selection";

type QuizSource = {
  moduleId: string;
  chapterId: string;
  quiz: ChapterQuiz;
};

const previousQuizSources: QuizSource[] = [
  { moduleId: "module1", chapterId: "chapter1", quiz: chapter1Quiz },
  { moduleId: "module1", chapterId: "chapter2", quiz: chapter2Quiz },
  { moduleId: "module2", chapterId: "m2chapter1", quiz: m2chapter1Quiz },
  { moduleId: "module2", chapterId: "m2chapter2", quiz: m2chapter2Quiz },
  { moduleId: "module2", chapterId: "m2chapter3", quiz: m2chapter3Quiz },
  { moduleId: "module3", chapterId: "m3chapter1", quiz: m3chapter1Quiz },
  { moduleId: "module3", chapterId: "m3chapter2", quiz: m3chapter2Quiz },
  { moduleId: "module3", chapterId: "m3chapter3", quiz: m3chapter3Quiz },
];

const uniqueMidSemQuestions: QuizQuestion[] = [
  {
    id: "unique-q1",
    imageSrc: "/midsem/q1.png",
    layout: "half",
    imageAlt:
      "A dark night scene from inside a car looking out, the dashboard clock reads 1:30 AM, a yellow L decal is visible on the rear window, streetlights illuminating a quiet road",
    question:
      "A 16-year-old driver with a Class 7 Instruction Permit finishes their part-time job at 1:30 a.m. Their supervisor (who has 5 years of driving experience) is in the passenger seat. Are they legally allowed to drive home?",
    options: [
      "Yes, because they have a qualified supervisor in the front seat",
      "Yes, as long as they take a direct route home without stops",
      "No, because Class 7 drivers cannot drive between 1:00 a.m. and 5:00 a.m.",
      "No, because the supervisor must have at least 10 years of experience",
    ],
    correctAnswerIndex: 2,
    explanation:
      "The Class 7 night restriction prohibits driving between 1:00 a.m. and 5:00 a.m., regardless of supervision, to avoid high-risk low-visibility hours.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
  id: "unique-q2",
  question:
    "A driver holds a Class 5 licence and is asked to drive a 30-passenger school bus for a weekend field trip. The driver says, 'I have driven large SUVs before, so I should be fine.' Why is this reasoning incorrect?",
  options: [
    "Because vehicle size alone determines licence class requirements",
    "Because experience in similar vehicles automatically upgrades your licence",
    "Because passenger transport involves higher legal responsibility and requires specific training and classification",
    "Because school buses are only allowed to be driven by teachers",
  ],
  correctAnswerIndex: 2,
  explanation:
    "Licence classes are based on formal training and responsibility level, especially passenger transport rules, not personal confidence or informal experience.",
  sourceLessonId: "lms-course/assessment/mid-sem",
},
  {
    id: "unique-q3",
    question:
      "Sarah just moved to a new apartment in Charlottetown. She holds a valid PEI driver's licence. Under the rules for keeping her licence updated, what is she required to do?",
    options: [
      "Report the address change within 30 days to avoid a Highway Traffic Act offence",
      "Wait until her licence expires to update her address",
      "Report the address change within 10 days",
      "Nothing, as long as her name has not changed",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Address changes must be reported within 30 days so the system can verify identity and assign legal responsibility correctly.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
    id: "unique-q4",
    imageSrc: "/midsem/q4.png",
    imageAlt:
      "A deserted four-way intersection late at night, a traffic light hanging in the center is flashing bright red in all directions, no cars or pedestrians visible",
    question:
      "You approach an intersection late at night. The traffic signal is flashing red in all directions. There is no other traffic visible. What is the correct action?",
    options: [
      "Slow down, scan the intersection, and proceed without stopping if clear",
      "Come to a complete stop, just as you would at a stop sign, before proceeding",
      "Stop only if you see headlights approaching from the cross street",
      "Yield to the right and proceed at your current speed",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A flashing red light must be treated exactly like a STOP sign, requiring a full stop before the line or crosswalk.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
    id: "unique-q5",
    imageSrc: "/midsem/q5.png",
    imageAlt:
      "A railway crossing from the driver's perspective, a freight train has just passed out of frame to the right, but the crossing gates are still lowered and the red lights are still flashing",
    question:
      "You are stopped at a railway crossing with flashing lights and a closed gate. A freight train passes. The train clears the crossing, but the lights are still flashing and the gate is down. What is the safest and legal action?",
    options: [
      "Drive around the gate if you can clearly see down the tracks in both directions",
      "Wait until the gate is fully raised and the lights stop flashing completely",
      "Proceed slowly under the gate since the train has passed",
      "Honk to alert the operator to raise the gates quickly",
    ],
    correctAnswerIndex: 1,
    explanation:
      "You must never move until the signals stop completely and the gates rise. Moving early is dangerous because a second train could be approaching.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
    id: "unique-q6",
    imageSrc: "/midsem/q6.png",
    imageAlt:
      "A car's perspective stopped at an intersection showing a solid red traffic light, the right turn signal is blinking on the dashboard, cross traffic is moving slightly ahead",
    question:
      "You are approaching an intersection with a solid red light and intend to turn right. What is the correct procedure for a right turn on red?",
    options: [
      "Treat it like a yield sign; slow down and merge if there is a gap in traffic",
      "Come to a complete stop, scan for pedestrians and traffic, yield the right-of-way, then turn when safe",
      "Maintain your speed and turn sharply to avoid holding up traffic behind you",
      "Stop, wait for the light to turn green, then turn right",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A right turn on red requires a full stop first. It is a controlled re-entry into traffic, not a rolling merge.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
    id: "unique-q7",
    imageSrc: "/midsem/q7.png",
    imageAlt:
      "A bright orange diamond-shaped construction sign indicating a reduced speed zone on a highway, orange traffic cones lining the shoulder, no workers or heavy equipment visible in the area",
    question:
      "You are driving on a highway and enter a marked construction zone. The speed limit is reduced, but you cannot see any workers or equipment. What should you do?",
    options: [
      "Maintain the normal highway speed until you actually see workers",
      "Reduce your speed only if traffic ahead of you is slowing down",
      "Follow the reduced speed limit throughout the zone, regardless of visible activity",
      "Drive in the left lane to avoid potential debris on the shoulder",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Work zones override normal rules. Reduced speeds must be obeyed even if workers aren't visible, as the temporary road conditions themselves may be hazardous.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
    id: "unique-q8",
    question:
      "A driver is preparing to take their Class 5 road test in their own vehicle. When they arrive, the examiner notices the car has a severely cracked windshield on the driver's side. What will happen next?",
    options: [
      "The examiner will proceed with the test but deduct points for the windshield",
      "The road test will not begin because the vehicle failed the basic safety check",
      "The examiner will ask the driver to only make right turns to avoid the crack",
      "The test will proceed if the driver promises to fix it within 30 days",
    ],
    correctAnswerIndex: 1,
    explanation:
      "The vehicle must pass safety and equipment checks before the test. If visibility is compromised, the vehicle fails the check and the test cannot begin.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
    id: "unique-q9",
    imageSrc: "/midsem/q9.png",
    imageAlt:
      "Driver's view of a two-lane rural highway, the center pavement marking has a broken yellow line on the driver's side and a solid yellow line on the oncoming traffic side",
    question:
      "You are driving on a two-lane road. On your side of the center line, there is a broken yellow line. On the opposite side, the yellow line is solid. What does this mean for your vehicle?",
    options: [
      "You may pass if it is fully safe to do so",
      "Passing is strictly prohibited for vehicles in your lane",
      "You must change lanes immediately",
      "The road is about to turn into a one-way street",
    ],
    correctAnswerIndex: 0,
    explanation:
      "A broken yellow line on your side indicates that passing is permitted when the oncoming lane is clear and it is safe to do so.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
  {
    id: "unique-q10",
    imageSrc: "/midsem/q10.png",
    imageAlt:
      "A pedestrian standing on the curb at an intersection with a clearly painted white crosswalk, waiting to cross, a car is approaching the crosswalk with no traffic lights present",
    question:
      "A driver approaches an intersection with a marked crosswalk. A pedestrian is waiting on the curb, looking to cross, but there is no stop sign or traffic light for the vehicles. What is the driver's responsibility?",
    options: [
      "Honk to warn the pedestrian not to cross until the car has passed",
      "Maintain speed; vehicles always have the right-of-way unless there is a red light",
      "Slow down slightly, but proceed if the pedestrian hasn't stepped off the curb",
      "Yield to the pedestrian, as the law prioritizes their safety over vehicle flow at crosswalks",
    ],
    correctAnswerIndex: 3,
    explanation:
      "The law prioritizes vulnerable road users. Drivers must yield to pedestrians crossing legally at marked or unmarked crosswalks.",
    sourceLessonId: "lms-course/assessment/mid-sem",
  },
];

export const midSemModule: Module = {
  id: MIDSEM_MODULE_ID,
  title: "Mid-Sem Assessment",
  slug: "mid-sem-assessment",
  icon: FileCheck2,
  chapters: [
    {
      id: MIDSEM_CHAPTER_ID,
      title: "Mid-Sem Assessment",
      type: "assessment",
      slug: "mid-sem-assessment",
      completed: false,
      lessons: [
        {
          id: "assessment-entry",
          title: "Mid-Sem Assessment",
          content: [
            {
              type: "text",
              value:
                "This assessment combines previous module quizzes plus unique mid-sem questions.",
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

export function getMidSemRandomPool(): QuizQuestion[] {
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

export function getMidSemUniqueQuestions(): QuizQuestion[] {
  return uniqueMidSemQuestions.map((question) => ({
    ...question,
    id: `midsem::${question.id}`,
  }));
}

export function buildMidSemQuiz(combinedQuestions: QuizQuestion[]): ChapterQuiz {
  return {
    id: MIDSEM_QUIZ_ID,
    chapterId: MIDSEM_CHAPTER_ID,
    title: "Mid-Sem Assessment Quiz",
    description: "50 questions: 40 mixed + 10 unique",
    passRule: "all-correct",
    questions: combinedQuestions,
  };
}
