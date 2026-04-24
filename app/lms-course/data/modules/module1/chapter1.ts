import { IdCard, LucideIcon } from "lucide-react";
import { chapter2 } from "./chapter2";

export type ContentBlock =
  | {
      type: "image";
      src: string;
      alt: string;
      layout?: "quarter" | "half" | "threeQuarter" | "full";
      align?: "left" | "center" | "right";
    }
  | {
      type: "imagePlaceholder";
      prompt: string;
      layout?: "quarter" | "half" | "threeQuarter" | "full";
    }
  | { type: "heading"; value: string }
  | { type: "text"; value: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; value: string; variant?: "info" | "warning" | "danger" }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      size?: "default" | "large";
    };

export interface Lesson {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Chapter {
  id: string;
  title: string;
  type: string;
  slug: string;
  completed: boolean;
  lessons: Lesson[];
  unlockedBy?: string;
}

export interface Module {
  id: string;
  title: string;
  slug: string;
  icon?: LucideIcon;
  chapters: Chapter[];
}

const chapter1: Chapter = {
  id: "chapter1",
  title: "How PEI Licensing Works",
  type: "lesson",
  slug: "how-pei-licensing-works",
  completed: false,
  lessons: [
    {
      id: "pg1",
      title: "What a Driver's Licence Really Means",
      content: [
        {
          type: "heading",
          value: "Licence Basics",
        },
        {
          type: "text",
          value:
            "A driver's licence is more than just an ID. It's a legal agreement that you have the skills to drive specific vehicles under safe conditions. In PEI, keeping that privilege depends on following your class rules and making sure your licence stays in good standing.",
        },
        {
          type: "text",
          value:
            "At a deeper level, a licence is a trust system. The government is not watching you every second. Instead, it assumes that you will follow the rules even when no one is around. That means driving is not just a skill, but a responsibility that depends on your decisions when no one is checking.",
        },
        {
          type: "image",
          src: "/module1/peidrivers-licence.jpg",
          alt: "Prince Edward Island driver's licence sample",
          layout: "half",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Think of your licence like a specialized tool that gives you privilege within specified limits.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Real-world thinking: A licence does not make you a safe driver. Your habits do. The licence just proves you reached the minimum standard once.",
        },
      ],
    },
    {
      id: "pg2",
      title: "Licence Validity and Class Conditions",
      content: [
        {
          type: "heading",
          value: "When a Licence Is Not Valid",
        },
        {
          type: "table",
          headers: ["Status", "What It Means for Driving"],
          rows: [
            [
              "Expired",
              "The date has passed; you'll need to renew this before you can legally drive again.",
            ],
            ["Suspended", "Driving privileges are temporarily paused."],
            ["Cancelled", "Driving privileges have been removed."],
            [
              "Other invalid status",
              "Any legal invalid status means it's not safe or legal for you to be behind the wheel.",
            ],
          ],
        },
        {
          type: "heading",
          value: "Why Validity Matters More Than You Think",
        },
        {
          type: "text",
          value:
            "Driving with an invalid licence is not just a technical issue. It means you are no longer recognized as a safe and approved driver under the law. This affects insurance, legal responsibility, and even how fault is determined in an accident.",
        },
        {
          type: "callout",
          variant: "danger",
          value:
            "If you're driving with an invalid licence and something goes wrong, you may be treated as if you should not have been driving at all.",
        },
        {
          type: "heading",
          value: "Class Rules and Condition Rules",
        },
        {
          type: "text",
          value:
            "Your licence is tailored to you. If it lists conditions like needing glasses, those are there to help you drive safely. Following the rules attached to your specific class is the best way to protect your new privilege.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "It's easy to overlook, but please remember: the class number on your card dictates exactly what you're trained for. Remembering your conditions helps you stay compliant.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Tip: Before borrowing a friend's vehicle, double-check that your class allows for it. It only takes a second!",
        },
      ],
    },
    {
      id: "pg3",
      title: "PEI Licence Classes (Class 1-9) Made Simple",
      content: [
        {
          type: "heading",
          value: "How the Class System Works",
        },
        {
          type: "text",
          value:
            "PEI uses classes to match your training with the vehicle's complexity. Each step up the ladder usually involves more weight or more passengers, which means a higher level of responsibility for you as a driver.",
        },
        {
          type: "text",
          value:
            "Instead of memorizing all classes, think in terms of risk and responsibility. The heavier the vehicle or the more passengers it carries, the higher the class. This pattern helps you quickly understand any class even if you forget the exact number.",
        },
        {
          type: "image",
          src: "/module1/class1-9.png",
          alt: "PEI licence classes 1 through 9 overview",
          layout: "half",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Don't worry about memorizing the whole list. The main goal is understanding that each class represents a different level of safety and skill.",
        },
        {
          type: "heading",
          value: "Beginner and Personal Classes",
        },
        {
          type: "list",
          items: [
            "Class 7: Instruction Driver's Permit (Your starting point)",
            "Class 5: Standard cars and light trucks",
            "Class 6: Motorcycles",
            "Class 8: Mopeds or motor-assisted pedal bicycles",
            "Class 9: Farm tractors",
          ],
        },
        {
          type: "heading",
          value: "Commercial and Higher-Risk Classes",
        },
        {
          type: "list",
          items: [
            "Class 1: Large truck tractor and trailer combinations",
            "Class 2: Large buses (over 24 passengers), including school buses",
            "Class 3: Heavy trucks over 14,000 kg",
            "Class 4: Taxis, ambulances, vans, or small buses",
          ],
        },
        {
          type: "heading",
          value: "How to Remember the Pattern",
        },
        {
          type: "list",
          items: [
            "Small vehicle means lower risk and usually a lower class",
            "Heavy vehicle means more damage potential and usually a higher class",
            "Passenger vehicles mean responsibility for other people, so training matters more",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Mental shortcut: If a mistake could harm more people or cause more damage, it usually needs a higher licence class.",
        },
        {
          type: "heading",
          value: "At-a-Glance Class Table Summary",
        },
        {
          type: "table",
          headers: ["Class", "Typical use", "Core idea"],
          rows: [
            ["1", "Truck tractor and trailer combinations", "Advanced commercial towing"],
            ["2", "Large buses and school buses", "High-capacity passenger safety"],
            ["3", "Heavy trucks over 14,000 kg", "Large vehicle management"],
            ["4", "Taxi, ambulance, van, small bus", "Professional passenger transport"],
            ["5", "Regular passenger vehicles", "Daily personal driving"],
            ["6", "Motorcycles", "Two-wheel operation and balance"],
            ["7", "Instruction Driver's Permit", "Guided learning phase"],
            ["8", "Mopeds", "Lower-speed motorized travel"],
            ["9", "Farm tractors", "Essential agricultural operation"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Most drivers find that mastering Class 7 and then Class 5 provides all the freedom they need.",
        },
      ],
    },
    {
      id: "pg4",
      title: "Your Beginner Pathway (GDL): Stage 1 Rules",
      content: [
        {
          type: "heading",
          value: "Where You Start",
        },
        {
          type: "text",
          value:
            "Receiving your Class 7 permit is an exciting first step. You're now part of the Graduated Driver Licensing (GDL) system. This program is designed to give you road experience in a controlled way that keeps you and everyone else safe while you're still learning. Details on how you obtain a Class 7 permit are covered in the next chapter.",
        },
        {
          type: "image",
          src: "/module1/yellow decal.png",
          alt: "GDL Roadmap: Class 7 -> Practice -> Road Test -> Class 5.",
          layout: "half",
          align: "left",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "The first stage of the GDL program focuses on building foundational driving skills. The rules are designed to support safe learning and skill development.",
        },
        {
          type: "heading",
          value: "Stage 1: Requirements, Restrictions, and Timing",
        },
        {
          type: "table",
          size: "large",
          headers: ["Category", "The Rule", "Why"],
          rows: [
            [
              "Supervision",
              "Drive with a qualified supervisor in the front seat.",
              "Provides guidance during real driving situations and helps correct mistakes while you are still learning.",
            ],
            [
              "Supervisor Standard",
              "Supervisor must have 4+ years of driving experience.",
              "Ensures they are experienced enough to guide a learner safely.",
            ],
            [
              "Vehicles Allowed",
              "Supervised driving in cars, motorcycles, or mopeds.",
              "To keep early practice focused on commonly used vehicle types.",
            ],
            [
              "Required Decal",
              "A yellow 'L' decal must be displayed.",
              "To notify other road users that the driver is a learner and asks others for patience and extra space.",
            ],
            [
              "Core Restrictions",
              "Zero alcohol (BAC) and no handheld devices.",
              "To reduce impairment and distraction during early driving practice.",
            ],
            [
              "Night Restriction",
              "No driving between 1:00 a.m. and 5:00 a.m.",
              "Avoids the highest-risk hours for new drivers.",
            ],
            [
              "Road Test Timing",
              "Eligible after 365 days (or 275 with driver ed).",
              "Ensures you've had enough time to practice safely.",
            ],
            [
              "Permit Validity",
              "Valid for two years from issue.",
              "Gives you time to take the test when you're truly ready.",
            ],
          ],
        },
        {
          type: "heading",
          value: "Why These Restrictions Exist",
        },
        {
          type: "text",
          value:
            "Each restriction in Stage 1 is based on real accident data and risk control. New drivers are more likely to make mistakes under pressure, at night, or when distracted. These rules reduce those high-risk situations while your brain is still building automatic driving habits.",
        },
        {
          type: "list",
          items: [
            "Supervision reduces critical mistakes early",
            "Night restriction avoids low-visibility risks",
            "Zero alcohol removes impaired judgment",
            "The decal alerts others to be more cautious around you",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "You're not being restricted because you're untrusted. You're being protected while your skill is still forming.",
        },
      ],
    },
    {
      id: "pg5",
      title: "Completing Your GDL Journey",
      content: [
        {
          type: "heading",
          value: "From Learner to Independent Driver",
        },
        {
          type: "text",
          value:
            "Once you've completed your waiting period and feel confident in your skills, you can book your Class 5 road test. Success here is about showing you've developed the safe habits and maturity needed to drive on your own.",
        },
        {
          type: "text",
          value:
            "Transitioning from Class 7 to Class 5 is not just about passing a test. It reflects a shift in responsibility. You move from guided decision-making to independent judgment, where every action depends on your awareness and habits.",
        },
        {
          type: "heading",
          value: "What Examiners Actually Look For",
        },
        {
          type: "list",
          items: [
            "Consistent awareness of surroundings",
            "Smooth and controlled vehicle handling",
            "Correct decision-making at intersections",
            "Ability to predict and react to other drivers",
          ],
        },
        {
          type: "heading",
          value: "Common Mistakes New Drivers Make",
        },
        {
          type: "list",
          items: [
            "Focusing too much on the car instead of the road",
            "Reacting late instead of anticipating",
            "Forgetting mirror checks under pressure",
            "Driving correctly only when being watched",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Passing the test doesn't mean you've mastered driving. It means you've proven you're safe enough to continue learning on your own.",
        },
        {
          type: "heading",
          value: "A Quick Summary",
        },
        {
          type: "list",
          items: [
            "Class 7 is your learning phase",
            "Always drive with your supervisor",
            "Respect the safety restrictions because they protect you",
            "Focus on experience, and Class 5 will follow naturally",
          ],
        },
        {
          type: "heading",
          value: "Final Mental Model",
        },
        {
          type: "text",
          value:
            "Driving is a layered skill. At first, you consciously think about everything. Over time, actions become automatic. The goal of the GDL system is to move you from conscious effort to safe instinct.",
        },
      ],
    },
  ],
};

export const module1: Module = {
  id: "module1",
  title: "Your Driver's Licence",
  slug: "your-drivers-licence",
  icon: IdCard,
  chapters: [chapter1, chapter2],
};