import { IdCard, LucideIcon } from "lucide-react";
import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";

export type ContentBlock =
  | { type: "image"; src: string; alt: string; layout?: "quarter" | "half" }
  | { type: "imagePlaceholder"; prompt: string; layout?: "quarter" | "half" }
  | { type: "heading"; value: string }
  | { type: "text"; value: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; value: string; variant?: "info" | "warning" | "danger" }
  | { type: "table"; headers: string[]; rows: string[][] };

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
            "A driver's licence is legal permission to drive, but only under specific conditions. In PEI, driving is a privilege that must be maintained through legal and safe behavior.",
        },
        {
          type: "image",
          src: "/module1/peidrivers-licence.jpg",
          alt: "Prince Edward Island driver's licence sample",
          layout: "half",
        },
        {
          type: "heading",
          value: "When a Licence Is Not Valid",
        },
        {
          type: "table",
          headers: ["Status", "What It Means for Driving"],
          rows: [
            ["Expired", "The licence date has passed, so you cannot legally drive"],
            ["Suspended", "Driving privilege is temporarily removed"],
            ["Cancelled", "Driving privilege is fully removed"],
            ["Other invalid status", "Any legal invalid status means you cannot drive"],
          ],
        },
        {
          type: "heading",
          value: "Class and Condition Rules",
        },
        {
          type: "text",
          value:
            "Your licence only allows the vehicle class listed on it. If your licence has conditions, such as corrective lenses, those conditions are enforceable every time you drive.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Example scenario: \"I have a licence, so I can drive anything.\" Not correct. Your licence class determines what you can legally operate.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "A valid licence is not just ID. It is active legal permission tied to class limits and mandatory conditions.",
        },
      ],
    },
    {
      id: "pg2",
      title: "PEI Licence Classes (Class 1-9) Without the Confusion",
      content: [
        {
          type: "heading",
          value: "How the Class System Works",
        },
        {
          type: "text",
          value:
            "PEI uses a classified licensing system. Different vehicle categories require different legal privileges and qualifications.",
        },
        {
          type: "image",
          src: "/module1/class1-9.png",
          alt: "PEI licence classes 1 through 9 overview",
          layout: "half",
        },
        {
          type: "heading",
          value: "Beginner and Personal Classes",
        },
        {
          type: "list",
          items: [
            "Class 7: Instruction permit (beginner stage)",
            "Class 5: Standard passenger vehicle licence",
            "Class 6: Motorcycle",
            "Class 8: Moped (pedal-assisted)",
            "Class 9: Farm tractor",
          ],
        },
        {
          type: "heading",
          value: "Commercial Awareness",
        },
        {
          type: "list",
          items: [
            "Class 1: Truck-tractor and trailer combinations",
            "Class 2: Buses with more than 24 passengers",
            "Class 3: Heavy trucks over 14,000 kg",
            "Class 4: Taxi, ambulance, and buses with 24 or fewer passengers",
          ],
        },
        {
          type: "heading",
          value: "At-a-Glance Class Table",
        },
        {
          type: "table",
          headers: ["Class", "Typical use", "Minimum age in handbook"],
          rows: [
            ["1", "Tractor-trailer combinations", "19"],
            ["2", "Large buses / school buses", "19 (21 for school bus)"],
            ["3", "Heavy trucks (>14,000 kg)", "19"],
            ["4", "Taxi / ambulance / small bus", "19"],
            ["5", "Regular passenger vehicles", "17 (after GDL completion)"],
            ["6", "Motorcycles", "17"],
            ["7", "Instruction permit", "16"],
            ["8", "Mopeds (pedal-assisted)", "17"],
            ["9", "Farm tractors", "14"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Most learners move from Class 7 to Class 5. Higher-risk and commercial classes have stricter entry standards.",
        },
      ],
    },
    {
      id: "pg3",
      title: "Your Beginner Pathway (GDL) From Day 1",
      content: [
        {
          type: "heading",
          value: "Where You Start",
        },
        {
          type: "text",
          value:
            "When you receive a Class 7 instruction permit, you enter the Graduated Driver Licensing (GDL) system.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a simple roadmap: Class 7 Stage 1 -> waiting period + novice course -> road test -> Class 5 photo licence.",
        },
        {
          type: "heading",
          value: "Stage 1: Requirements, Restrictions, and Timing",
        },
        {
          type: "table",
          headers: ["Category", "Rule"],
          rows: [
            [
              "Supervision requirement",
              "You must drive with a qualified supervising driver seated beside you",
            ],
            [
              "Supervisor standard",
              "Supervisor must have held a valid licence for at least 4 years and remain below BAC 0.05",
            ],
            [
              "Core restrictions",
              "Zero BAC, visible L decal, no handheld devices, and passenger/time restrictions as listed in the handbook",
            ],
            [
              "Night restriction",
              "No driving from 1:00 a.m. to 5:00 a.m. (with limited handbook exceptions)",
            ],
            [
              "Progress control",
              "Demerit-point violations can trigger permit suspension",
            ],
            [
              "Eligibility milestone",
              "Novice Driver Course completion is required before road test eligibility",
            ],
            [
              "Road test timing",
              "Earliest test: 275 days with driver education, 365 days without",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "GDL progression is not only about time. You must meet supervision, behavior, and course requirements to move forward.",
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
  chapters: [chapter1, chapter2, chapter3],
};
