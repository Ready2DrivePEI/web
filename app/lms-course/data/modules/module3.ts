import { ClipboardCheck } from "lucide-react";
import { type Module } from "./module1/chapter1";
import { m3chapter1 } from "@/app/lms-course/data/modules/module3/m3chapter1";
import { m3chapter2 } from "@/app/lms-course/data/modules/module3/m3chapter2";
import { m3chapter3 } from "@/app/lms-course/data/modules/module3/m3chapter3";

export const module3: Module = {
  id: "module3",
  title: "Vehicle Control and Everyday Driving Skills",
  slug: "vehicle-control-and-everyday-driving-skills",
  icon: ClipboardCheck,
  chapters: [m3chapter1, m3chapter2, m3chapter3],
};
