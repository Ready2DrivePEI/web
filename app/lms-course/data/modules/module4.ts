import { AlertTriangle } from "lucide-react";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { m4chapter1 } from "@/app/lms-course/data/modules/module4/m4chapter1";
import { m4chapter2 } from "@/app/lms-course/data/modules/module4/m4chapter2";
import { m4chapter3 } from "@/app/lms-course/data/modules/module4/m4chapter3";

export const module4: Module = {
  id: "module4",
  title: "High-Risk Decisions: Distraction, Impairment, and Aggressive Driving",
  slug: "high-risk-decisions-distraction-impairment-and-aggressive-driving",
  icon: AlertTriangle,
  chapters: [m4chapter1, m4chapter2, m4chapter3],
};
