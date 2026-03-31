import { IdCard, LucideIcon } from "lucide-react";
import { chapter2 } from "./chapter2";

export type ContentBlock =
  | { type: "image"; src: string; alt: string; layout?: "quarter" | "half" }
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

export const module1: Module = {
  id: "module1",
  title: "Your Driver's Licence",
  slug: "your-drivers-licence",
  icon: IdCard,
  chapters: [
    {
      id: "chapter1",
      title: "Understanding Your Driver's Licence",
      type: "lesson",
      slug: "understanding-your-drivers-licence",
      completed: true,
      lessons: [
        {
          id: "pg1",
          title: "What Is a Driver's Licence?",
          content: [
            {
              type: "image",
              src: "/module1/peidrivers-licence.jpg",
              alt: "Image of a Prince Edward Island driver's licence",
              layout: "quarter",
            },
            {
              type: "text",
              value:
                "A driver's licence is official permission from the province to drive a motor vehicle.",
            },
            {
              type: "text",
              value:
                "In Prince Edward Island, you must have a valid driver's licence to legally drive on public roads.",
            },
            {
              type: "text",
              value: "If you drive without one, you are breaking the law.",
            },
            {
              type: "text",
              value:
                "Driving is a privilege, not a right. Your driver's licence gives you that privilege only while you follow the law and drive responsibly.",
            },
            {
              type: "callout",
              variant: "info",
              value:
                "Always carry a valid licence and follow every licence condition whenever you drive.",
            },
            {
              type: "text",
              value: "Your licence must stay valid at all times. It cannot be:",
            },
            {
              type: "list",
              items: [
                "Expired (the date has passed)",
                "Suspended (temporarily taken away)",
                "Cancelled (completely removed)",
                "Invalid for any reason",
              ],
            },
            {
              type: "text",
              value:
                "Your licence is class-specific. It only allows you to drive vehicles covered by your licence class.",
            },
            {
              type: "text",
              value:
                "It may include conditions, such as requiring corrective lenses. If your licence has conditions, you must follow them every time you drive.",
            },
            {
              type: "callout",
              variant: "warning",
              value:
                "Failure to follow the conditions on your driver's licence is an offence under the Highway Traffic Act.",
            },
          ],
        },

        {
          id: "pg2",
          title: "Licence Classes — What Are You Licensed to Drive?",
          content: [
            {
              type: "text",
              value:
                "Prince Edward Island uses a classified licence system. This means you are licensed specifically for the type of vehicle you are qualified to drive.",
            },
            {
              type: "text",
              value:
                "Each licence class requires meeting vision, knowledge, physical fitness, and driving skill standards.",
            },
            {
              type: "image",
              src: "/module1/class1-9.png",
              alt: "Diagram showing different licence classes and vehicle types",
              layout: "half",
            },
            {
              type: "table",
              headers: ["Class", "Licence Type", "Who It's For"],
              rows: [
                ["Class 7", "Instruction Permit", "Learners who must drive with a qualified supervisor"],
                ["Class 5", "Standard Car Licence", "Full licence for everyday passenger vehicles"],
                ["Class 6", "Motorcycle Licence", "Motorcycle operation"],
                ["Class 1–4", "Commercial Vehicles", "Large trucks and buses (requires Class 5 for at least 2 years)"],
                ["Class 9", "Farm Tractor", "Farm tractor operation on highways"]
              ],
            },
            {
              type: "text",
              value: "Two important expiry rules to remember:",
            },
            {
              type: "list",
              items: [
                "Driver's licences expire at midnight on the holder's birthday.",
                "Instruction Permits (Class 7) are valid for two years from the date of issue.",
              ],
            },
            {
              type: "callout",
              variant: "info",
              value:
                "Make sure you know your licence class and what vehicles it allows you to drive.",
            },
          ],
        },
      ],
    },
    chapter2,
  ],
};
