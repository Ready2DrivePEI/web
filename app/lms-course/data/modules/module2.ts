import { ShieldAlert } from "lucide-react";
import { type Module } from "./module1/chapter1"; // Importing types from module1 to keep it DRY

export const module2: Module = {
  id: "module2",
  title: "Defensive Driving",
  slug: "defensive-driving",
  icon: ShieldAlert,
  chapters: [
    {
      id: "scanning",
      title: "Scanning the Road",
      type: "lesson",
      slug: "scanning-road",
      completed: false,
      lessons: [
        {
          id: "m2-p1",
          title: "The 12-Second Rule",
          content: [
            { type: "text", value: "Defensive driving means looking ahead to anticipate hazards before they happen." },
            { type: "text", value: "Always maintain a 12-second lead time in city driving." },
            { type: "list", items: ["Check mirrors every 5-8 seconds", "Keep your eyes moving", "Identify an escape route"] }
          ]
        }
      ]
    }
  ]
};