import { ShieldAlert } from "lucide-react";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { m2chapter1 } from "@/app/lms-course/data/modules/module2/m2chapter1";
import { m2chapter2 } from "@/app/lms-course/data/modules/module2/m2chapter2";
import { m2chapter3 } from "@/app/lms-course/data/modules/module2/m2chapter3";

export const module2: Module = {
  id: "module2",
  title: "Defensive Driving",
  slug: "defensive-driving",
  icon: ShieldAlert,
  chapters: [m2chapter1, m2chapter2, m2chapter3],
};
