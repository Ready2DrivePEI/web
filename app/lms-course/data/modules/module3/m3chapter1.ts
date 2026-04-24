import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m3chapter1: Chapter = {
  id: "m3chapter1",
  title: "Speed Management and Following Distance",
  type: "lesson",
  slug: "speed-management-and-following-distance",
  completed: false,
  lessons: [

    // PAGE 1
    {
      id: "m3ch1_pg1",
      title: "The Reality of Speed Limits",
      content: [
        { type: "heading", value: "What Is a Safe Speed?" },
        {
          type: "text",
          value:
            "A speed limit is not a target you must hit. It is the absolute maximum speed allowed only under ideal conditions. Think of it as the ceiling, not the goal.",
        },
        {
          type: "text",
          value:
            "Real driving happens in imperfect conditions. Rain, darkness, traffic, road quality, and even your own mental state affect what speed is actually safe.",
        },
        {
          type: "text",
          value:
            "The rule is simple but strict: you must never drive faster than is reasonable for the conditions. If grip drops, your speed must drop. If visibility drops, your speed must drop. If your brain feels overloaded, your speed must drop.",
        },
        {
          type: "image",
          src: "/module3/m3ch1pg1.png",
          alt: "Speed limit visual showing lower safe speed in heavy rain",
          layout: "threeQuarter",
          align: "left",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** The speed limit is 80 km/h, but it is raining heavily and visibility is low. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Reduce your speed below the limit.",
        },
        {
          type: "text",
          value:
            "Why: The posted limit assumes dry roads and clear visibility. Rain reduces tire grip and increases stopping distance. Driving at the limit in poor conditions is effectively unsafe, even if it is technically legal.",
        },

        {
          type: "heading",
          value: "🧠 Hidden Risk Most People Miss",
        },
        {
          type: "text",
          value:
            "Speed doesn’t just affect stopping distance. It reduces your thinking time. At higher speeds, your brain has less time to interpret situations, which means more mistakes happen before you even reach the brake.",
        },

        {
          type: "heading",
          value: "PEI Default Speed Limits",
        },
        {
          type: "table",
          headers: ["Area / Condition", "Maximum Permitted Speed"],
          rows: [
            ["Most municipalities", "50 km/h"],
            ["School zones", "60 km/h"],
            ["Highways", "80 km/h"],
            ["Major highways", "90 km/h"],
          ],
        },

        {
          type: "callout",
          variant: "warning",
          value:
            "Driving slower than traffic without reason can also be dangerous. The goal is not slow driving. The goal is appropriate speed.",
        },
      ],
    },

    // PAGE 2
    {
      id: "m3ch1_pg2",
      title: "The Physics of Stopping (Why You Can't Stop Instantly)",
      content: [
        { type: "heading", value: "The Three Steps to Stop" },
        {
          type: "text",
          value:
            "Stopping is not one action. It is a sequence of events that takes time, whether you like it or not.",
        },
        {
          type: "list",
          items: [
            "1. See the problem (visual detection)",
            "2. React (brain → foot delay)",
            "3. Brake (vehicle slows down physically)",
          ],
        },

        {
          type: "text",
          value:
            "Most drivers only think about braking. But the first two steps happen before braking even begins, and that’s where most accidents are decided.",
        },

        {
          type: "callout",
          variant: "danger",
          value:
            "At 50 km/h, your car travels about 10 metres before your foot even touches the brake.",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are driving at 60 km/h and a car suddenly brakes ahead. What is the biggest delay before your car starts slowing down?",
        },
        {
          type: "text",
          value:
            "**Answer:** Your reaction time.",
        },
        {
          type: "text",
          value:
            "Why: Before braking begins, your brain must process the situation and send a signal to your foot. This delay exists no matter how good your brakes are.",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** The road becomes wet but your speed stays the same. What changes the most?",
        },
        {
          type: "text",
          value:
            "**Answer:** Your braking distance increases.",
        },
        {
          type: "text",
          value:
            "Why: Wet roads reduce friction between tire and road. Less friction means longer stopping distance, even if your reaction time stays the same.",
        },

        {
          type: "heading",
          value: "🧠 Deeper Insight",
        },
        {
          type: "text",
          value:
            "Speed increases stopping distance exponentially, not linearly. That means doubling your speed more than doubles your stopping distance. This is why small speed increases create big risk jumps.",
        },
      ],
    },

    // PAGE 3
    {
      id: "m3ch1_pg3",
      title: "The 3-Second Rule (Time-Interval Formula)",
      content: [
        { type: "heading", value: "How to Measure Safe Distance" },
        {
          type: "text",
          value:
            "Distance is hard to judge with your eyes. Time is easier. That’s why we use seconds instead of metres.",
        },
        {
          type: "list",
          items: [
            "Pick a fixed object ahead",
            "When the car ahead passes it, start counting",
            "You should reach it after at least 3 seconds",
          ],
        },

        {
          type: "image",
          src: "/module2/m2ch1pg3.png",
          alt: "Following distance visual",
          layout: "threeQuarter",
          align: "left",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You reach the marker in two seconds instead of three. What does this mean?",
        },
        {
          type: "text",
          value:
            "**Answer:** You are following too closely.",
        },
        {
          type: "text",
          value:
            "Why: Less than 3 seconds means you don’t have enough time to react and stop safely if the vehicle ahead brakes suddenly.",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are following a motorcycle. Should you keep the same distance?",
        },
        {
          type: "text",
          value:
            "**Answer:** No, you should increase your following distance.",
        },
        {
          type: "text",
          value:
            "Why: Motorcycles can stop faster than cars. If you follow too closely, you may not be able to react in time.",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** A car cuts into your safe gap. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Ease off the accelerator and rebuild your distance.",
        },
        {
          type: "text",
          value:
            "Why: Safe gaps are not something you defend. They are something you maintain. Reacting emotionally makes the situation worse.",
        },

        {
          type: "heading",
          value: "🧠 When 3 Seconds Is Not Enough",
        },
        {
          type: "table",
          headers: ["Situation", "Required Adjustment"],
          rows: [
            ["Bad weather", "4+ seconds"],
            ["Towing trailer", "4+ seconds"],
            ["Low visibility", "4+ seconds"],
            ["Following large vehicle", "Increase distance to see ahead"],
          ],
        },

        {
          type: "callout",
          variant: "info",
          value:
            "Think of following distance as time to think, not just space to stop.",
        },
      ],
    },
  ],
};