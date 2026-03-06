import { Car, LucideIcon } from "lucide-react";

export type ContentBlock = 
  | { type: "image"; alt: string; value?: never; items?: never }
  | { type: "text"; value: string; alt?: never; items?: never }
  | { type: "list"; items: string[]; value?: never; alt?: never };

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
  lessons: Lesson[]; // Ensure this is always an array
  unlockedBy?: string;
}

export interface Module {
  id: string;
  title: string;
  slug: string;
  icon?: LucideIcon; // Made optional here so we can override it in Nav
  chapters: Chapter[];
}

export const module1: Module = {
  id: "module1",
  title: "Rules of the Road",
  slug: "rules-of-the-road",
  icon: Car,
  chapters: [
    {
      id: "signs",
      title: "Traffic Signs & Signals",
      type: "lesson",
      slug: "speed-limits",
      completed: true,
      lessons: [
        {
          id: "pg1",
          title: "What Is a Driver’s Licence?",
          content: [
            { type: "image", alt: "Image of a Prince Edward Island driver's licence" },
            { type: "text", value: "A driver’s licence is official permission from the province..." },
            { type: "text", value: "In Prince Edward Island, you must have a valid licence..." },
            { type: "text", value: "If you drive without one, you are breaking the law." }
          ]
        },
        {
          id: "pg2",
          title: "A Licence Is a Privilege",
          content: [
            { type: "text", value: "Driving is not a guaranteed right. It is a privilege." },
            { type: "list", items: ["Break traffic laws", "Drive carelessly", "Ignore restrictions"] },
          ]
        }
      ]
    },
  ]
};