import { Shield } from "lucide-react";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { m6chapter1 } from "@/app/lms-course/data/modules/module6/m6chapter1";
import { m6chapter2 } from "@/app/lms-course/data/modules/module6/m6chapter2";

export const module6: Module = {
  id: "module6",
  title: "Collision Response and Emergency Safety",
  slug: "collision-response-and-emergency-safety",
  icon: Shield,
  chapters: [m6chapter1, m6chapter2],
};
