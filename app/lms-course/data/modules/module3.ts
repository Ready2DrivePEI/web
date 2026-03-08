import { ClipboardCheck } from "lucide-react";
import { type Module } from "./module1/chapter1";

export const module3: Module = {
  id: "module3",
  title: "Safety & Maintenance",
  slug: "safety-maintenance",
  icon: ClipboardCheck,
  chapters: [
    {
      id: "pre-trip",
      title: "Pre-Trip Inspection",
      type: "lesson",
      slug: "pre-trip-check",
      completed: false,
      lessons: [
        {
          id: "m3-p1",
          title: "Walk-Around Check",
          content: [
            { type: "text", value: "Before you start the engine, you should perform a basic safety check." },
            { type: "image", alt: "Diagram of car tire pressure check" },
            { type: "list", items: ["Check tire pressure", "Ensure lights are clean", "Look for fluid leaks under the car"] }
          ]
        }
      ]
    }
  ]
};