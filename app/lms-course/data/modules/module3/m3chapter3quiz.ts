import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m3chapter3Quiz: ChapterQuiz = {
  id: "m3chapter3-quiz",
  chapterId: "m3chapter3",
  title: "Chapter Quiz",
  description: "Night, Winter, and Reduced-Traction Driving",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "What does it mean if you are 'over-driving' your headlights?",
      options: [
        "You are using your high beams in city limits",
        "Your headlights are aimed too high",
        "You are driving too fast to stop within the distance illuminated by your lights",
        "You are leaving your lights on during the daytime",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Over-driving your headlights means you are carrying too much speed to stop if a hazard suddenly appears at the far edge of your headlight beam. You would hit it before the car could stop.",
      sourceLessonId: "m3ch3_pg1",
    },
    {
      id: "q2",
      question: "When driving at night, PEI law requires that you dim your high-beam headlights within what distance of an oncoming vehicle?",
      options: [
        "50 metres",
        "150 metres",
        "300 metres",
        "You only dim them if the other driver flashes theirs first",
      ],
      correctAnswerIndex: 1,
      explanation:
        "You must dim your high beams within 150 metres (approx. 500 feet) to prevent blinding the oncoming driver.",
      sourceLessonId: "m3ch3_pg1",
    },
    {
      id: "q3",
      question: "During a rainstorm, when are the road surfaces generally at their most slippery?",
      options: [
        "After it has been raining steadily for several hours",
        "Right after it stops raining",
        "Just after the rain begins",
        "When driving through deep puddles",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Fresh rain mixes with accumulated oil, grease, and dirt on the road surface to create a highly slick film, making the road extraordinarily dangerous right as the rain starts.",
      sourceLessonId: "m3ch3_pg4",
    },
    {
      id: "q4",
      question: "What is the correct procedure for recovering from a loss of control (a skid) on icy roads?",
      options: [
        "Slam the brakes as hard as you can",
        "Accelerate quickly to pull the car straight",
        "Pull the emergency brake",
        "Take your foot off the gas and gently steer in the direction the rear of the vehicle is skidding",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Never slam the brakes in a skid without ABS, as this guarantees a complete loss of control. Ease off the pedals and gently steer your front wheels in the same direction the back wheels are sliding.",
      sourceLessonId: "m3ch3_pg3",
    },
    {
      id: "q5",
      question: "Which statement about winter driving hazards is true?",
      options: [
        "The highway freezes before bridges do",
        "Bridges freeze before the main highway does",
        "Black ice is highly visible due to its bright white colour",
        "Snow tires completely eliminate stopping distance differences",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Cold air flows underneath and over the top of elevated bridge decks, causing them to freeze into solid ice much faster than the connecting highways.",
      sourceLessonId: "m3ch3_pg2",
    },
    {
      id: "q6",
      question: "If your car starts to hydroplane (water-ski) at 90 km/h during severe rain, what should you do?",
      options: [
        "Pump your brakes repeatedly",
        "Turn the steering wheel sharply completely off the road",
        "Take your foot off the accelerator and let the car naturally slow down",
        "Speed up to drive over the water faster",
      ],
      correctAnswerIndex: 2,
      explanation:
        "In a hydroplane, your tires lose contact with the road. The safest action is to ease off the gas pedal entirely and let the car slow down on its own until standard traction resumes.",
      sourceLessonId: "m3ch3_pg4",
    },
  ],
};
