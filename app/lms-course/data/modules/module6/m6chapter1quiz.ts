import type { ChapterQuiz } from "@/app/lms-course/data/modules/module1/chapter1quiz";

export const m6chapter1Quiz: ChapterQuiz = {
  id: "m6chapter1-quiz",
  chapterId: "m6chapter1",
  title: "Chapter Quiz",
  description: "What to Do If You Are in a Collision",
  passRule: "all-correct",
  questions: [
    {
      id: "q1",
      question: "When are you legally required to report a collision to the police immediately?",
      options: [
        "Only if someone requests medical attention",
        "Only if you are at fault for the crash",
        "If there is death, injury, or combined property damage exceeding $1,000",
        "If the damage involves public road signs",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m6ch1_pg1",
    },
    {
      id: "q2",
      question: "You are the first person to arrive at a serious collision. Your very first action should be to:",
      options: [
        "Run to the crashed vehicles to pull the passengers out",
        "Park your vehicle off the road and far enough away to secure the scene",
        "Direct traffic around the crashed vehicles",
        "Apply first aid to the most severely injured person",
      ],
      correctAnswerIndex: 1,
      explanation: "Correct Answer: B",
      sourceLessonId: "m6ch1_pg2",
    },
    {
      id: "q3",
      question: "Why is it important to turn off the ignitions of the vehicles involved in a collision?",
      options: [
        "It prevents the battery from draining",
        "It stops the vehicle's alarm system from sounding",
        "It prevents short-circuited wiring from starting a vehicle fire",
        "It allows the doors to automatically unlock",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m6ch1_pg2",
    },
    {
      id: "q4",
      question: "(Tricky) You find a driver trapped tightly behind the steering wheel after a crash. They are awake and say they are not injured anywhere. What should you do?",
      options: [
        "Wait for paramedics to handle all extrication, even if the person is uninjured",
        "Recline the seat to try and forcefully pull their legs out from under the dashboard",
        "Try to pull them over the steering wheel and out the window",
        "Crawl in, release the seat catch, and pull the seat back to ease the pressure",
      ],
      correctAnswerIndex: 3,
      explanation: "Correct Answer: D",
      sourceLessonId: "m6ch1_pg3",
    },
    {
      id: "q5",
      question: "How should you treat an injured crash victim if you are completely untrained in first aid?",
      options: [
        "Carefully pull them out of the vehicle and lay them flat on the ground",
        "Give them water or medication to help calm their nerves",
        "Cover them with a blanket to keep them warm and loosen tight collars",
        "Turn their head sideways to ensure they do not choke",
      ],
      correctAnswerIndex: 2,
      explanation: "Correct Answer: C",
      sourceLessonId: "m6ch1_pg3",
    },
    {
      id: "q6",
      question: "When calling 911 from a cell phone at a collision scene, what is the most critical piece of personal information you must provide right away?",
      options: [
        "Your driver's licence number",
        "Your exact home address",
        "The make and model of your vehicle",
        "Your name and cell phone number with the area code",
      ],
      correctAnswerIndex: 3,
      explanation: "Correct Answer: D",
      sourceLessonId: "m6ch1_pg4",
    }
  ],
};
