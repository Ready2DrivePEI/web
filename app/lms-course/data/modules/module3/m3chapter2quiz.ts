import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m3chapter2Quiz: ChapterQuiz = {
  id: "m3chapter2-quiz",
  chapterId: "m3chapter2",
  title: "Chapter Quiz",
  description: "Core Maneuvers and Safely Sharing the Road",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "Why is a physical shoulder check required before making a lane change?",
      options: [
        "To check the blind spots that your mirrors cannot see",
        "To satisfy a very old driving law that is no longer needed",
        "To check if your seatbelt is securely fastened",
        "To see if any passengers in the back seat need assistance",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Mirrors alone are not enough. A physical shoulder check is the only way to see if another vehicle is hiding in the lateral blind spot over your shoulder.",
      sourceLessonId: "m3ch2_pg1",
    },
    {
      id: "q2",
      question: "When waiting in an intersection to make a left turn, how should your front wheels be positioned?",
      options: [
        "Turned sharply to the left",
        "Turned slightly to the right",
        "Turned slightly to the left",
        "Perfectly straight",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Keeping your wheels straight ensures that if you are rear-ended while waiting, your car will be pushed straight ahead rather than directly into the path of oncoming traffic.",
      sourceLessonId: "m3ch2_pg2",
    },
    {
      id: "q3",
      question: "What is the correct signaling procedure when exiting a roundabout?",
      options: [
        "You do not need to signal",
        "Signal left when you are passing your exit",
        "Signal right just before you reach your exit",
        "Turn on your hazard lights",
      ],
      correctAnswerIndex: 2,
      explanation:
        "You must always signal right before exiting. This communicates your intention clearly so waiting vehicles know it is safe for them to enter.",
      sourceLessonId: "m3ch2_pg2",
    },
    {
      id: "q4",
      question: "When a school bus is stopped and alternating flashing RED lights are activated, what is the required legal action?",
      options: [
        "Pass very slowly on the left",
        "Stop at least 2 metres away",
        "Stop completely not less than 6 metres (20 feet) away and remain stopped",
        "Honk your horn and proceed cautiously",
      ],
      correctAnswerIndex: 2,
      explanation:
        "It is strictly illegal to pass a school bus with flashing red lights. You must come to a complete stop at least 6 metres away until the lights are deactivated.",
      sourceLessonId: "m3ch2_pg3",
    },
    {
      id: "q5",
      question: "When traveling behind a heavy truck, how do you know if you are sitting invisibly in the driver's 'Side No-Zone'?",
      options: [
        "If you cannot see the truck's rear bumper",
        "If you are closer than 10 metres",
        "If you cannot see the truck driver's face in their side-view mirror",
        "If your radio signal drops",
      ],
      correctAnswerIndex: 2,
      explanation:
        "A truck's blind spots are massive. The rule of thumb is: if you can't see the truck driver in their side mirror, they definitely cannot see you.",
      sourceLessonId: "m3ch2_pg3",
    },
    {
      id: "q6",
      question: "When you are driving in reverse (backing up), what is the safest and correct way to look?",
      options: [
        "Stare exclusively at your dashboard backup camera.",
        "Turn your body and physically look out the rear window.",
        "Rely only on your side and interior mirrors.",
        "Lean your head out the driver side window.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Mirrors and cameras distort distance and have blind zones. Relying only on them will cause you to lose points on a road test. You must physically turn your head and look out the back window.",
      sourceLessonId: "m3ch2_pg4",
    },
  ],
};
