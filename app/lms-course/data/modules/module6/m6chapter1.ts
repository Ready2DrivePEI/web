import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m6chapter1: Chapter = {
  id: "m6chapter1",
  title: "What to Do If You Are in a Collision",
  type: "lesson",
  slug: "what-to-do-if-you-are-in-a-collision",
  completed: false,
  lessons: [
    {
      id: "m6ch1_pg1",
      title: "What to Do If You Are in a Collision",
      content: [
        {
          type: "text",
          value:
            "Sometimes, despite all efforts, collisions happen. The law requires you to fulfil specific duties if you are involved in a crash.",
        },
        {
          type: "text",
          value:
            "You must report the collision to the police immediately if there is a death, an injury, or if the total damage to all property exceeds $1,000. Failing to report a serious crash carries stiff legal penalties.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A top-down view of two drivers exchanging information at a safe location near their parked vehicles, highlighting the process of sharing licence and insurance details.",
        },
        {
          type: "text",
          value:
            "Q: Does the $1,000 damage limit apply to just my car or all vehicles involved?\nA: The limit applies to the combined damage to ALL property involved in the collision. If the total damage among everyone involved is over $1,000, you must report it.",
        },
        { type: "heading", value: "Rules to Remember" },
        {
          type: "list",
          items: [
            "**Give your details:** Share your name, address, driver's licence, registration, and insurance information with the other drivers.",
            "**Get their details:** Collect the same facts from everyone else involved.",
            "**Gather the facts:** Note the exact location, time, and nature of damages and injuries.",
            "**Find witnesses:** Get the names and addresses of anyone who saw the crash happen.",
          ],
        },
      ],
    },
    {
      id: "m6ch1_pg2",
      title: "Being the First to Arrive at a Scene",
      content: [
        {
          type: "text",
          value:
            "If you witness a collision but were not part of it, your actions as the first person on the scene could save lives.",
        },
        {
          type: "text",
          value:
            "Your first instinct might be to rush over and pull people out of their vehicles. However, untrained rescue attempts often make injuries much worse.",
        },
        {
          type: "text",
          value:
            "Before helping anyone, you must make sure the area is safe. Park your own vehicle completely off the road and far away from the crash to prevent further collisions. Once stopped, immediately call 911.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A diagram showing a driver safely pulling their vehicle completely off the shoulder of the road, well away from a collision scene ahead, to establish a safe zone.",
        },
        { type: "heading", value: "Common Mistakes" },
        {
          type: "list",
          items: [
            "**Rushing in blindly:** Failing to park your own car safely first creates a new crash hazard.",
            "**Leaving the engine running:** Always turn off the ignitions of the crashed cars to prevent electrical fires.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Fire Risk Most vehicle fires start from short-circuited wiring. If a fire breaks out, try to extinguish it with dirt, a blanket, or a fire extinguisher.",
        },
      ],
    },
    {
      id: "m6ch1_pg3",
      title: "Helping the Injured Safely",
      content: [
        {
          type: "text",
          value:
            "Once the scene is secure and emergency services are on the way, you can focus on the people inside the vehicles.",
        },
        {
          type: "text",
          value:
            "If people are hurt, leave them in the car until trained medical help arrives. Do not twist, turn, or move them under any circumstances.",
        },
        {
          type: "text",
          value:
            "Moving an injured person can cause permanent damage if they have a fractured spine or neck. The only time you should move someone is if they are pinned by the vehicle but otherwise completely uninjured. If a driver is trapped by the steering wheel, you can ease the pressure by releasing the seat catch and pulling the seat back.",
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "text",
          value:
            "If you are not trained in first aid, follow these basic steps to comfort the injured:",
        },
        {
          type: "list",
          items: [
            "Cover them with coats or blankets to keep them warm.",
            "Loosen tight collars, ties, or belts to help them breathe easily.",
            "Speak calmly, reassure them, and tell them help is on the way.",
            "Keep curious spectators away to give the victims space and privacy.",
          ],
        },
      ],
    },
    {
      id: "m6ch1_pg4",
      title: "How to Call 911 Effectively",
      content: [
        {
          type: "text",
          value:
            "While securing the scene and comforting victims are critical steps, your main priority is getting professional help to the location quickly.",
        },
        {
          type: "text",
          value:
            "When you reach the 911 operator, immediately give them your name and cell phone number (including the area code). This ensures they can call you back if the connection drops.",
        },
        {
          type: "text",
          value:
            "Listen carefully and answer the operator's questions calmly. First responders cannot help if they cannot find you. Concentrate on finding nearby civic numbers, street names, or the nearest intersection.",
        },
        {
          type: "text",
          value:
            "If you lose connection, move to an area with better reception and call back immediately.",
        },
        { type: "heading", value: "Remember" },
        {
          type: "list",
          items: [
            "**Ask for help:** If you do not know the area, ask a nearby resident or another driver to describe the exact location.",
            "**Guide the responders:** Start walking or driving to the nearest intersection to meet the emergency vehicles and guide them to the crash if necessary.",
          ],
        },
        { type: "heading", value: "Summary" },
        {
          type: "text",
          value:
            "If you are in a collision involving injury, death, or over $1,000 in damage, you must report it to the police and exchange information with the other drivers. If you are the first to arrive at a scene, secure the area by parking safely off the road, turn off the crashed vehicles' ignitions, and call 911. Never move an injured person unless they are uninjured but trapped, as this can worsen spinal injuries. Keep victims warm and reassured until emergency services arrive.",
        },
      ],
    }
  ],
};
