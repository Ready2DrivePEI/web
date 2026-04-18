import { Bike } from "lucide-react";
import type { Module } from "@/app/lms-course/data/modules/module1/chapter1";
import { m5chapter1 } from "@/app/lms-course/data/modules/module5/m5chapter1";
import { m5chapter2 } from "@/app/lms-course/data/modules/module5/m5chapter2";

export const module5: Module = {
  id: "module5",
  title: "Cyclists and the Road",
  slug: "cyclists-and-the-road",
  icon: Bike,
  chapters: [m5chapter1, m5chapter2],
};
