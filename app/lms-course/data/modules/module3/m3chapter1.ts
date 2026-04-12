import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m3chapter1: Chapter = {
  id: "m3chapter1",
  title: "Speed Management and Following Distance",
  type: "lesson",
  slug: "speed-management-and-following-distance",
  completed: false,
  lessons: [
    {
      id: "m3ch1_pg1",
      title: "The Reality of Speed Limits",
      content: [
        { type: "heading", value: "What Is a Safe Speed?" },
        {
          type: "text",
          value:
            "A speed limit is not a target you must hit. It is the absolute maximum speed allowed only under ideal, favourable driving conditions.",
        },
        {
          type: "text",
          value:
            "The foundational rule of PEI driving is that you must never drive faster than is reasonable and prudent for the conditions. When weather, traffic, or visibility drops, your speed must drop too.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a visual showing a speed limit sign (80) with a sunny background, next to the same sign fading out in heavy rain with an arrow pointing down from 80.",
        },
        {
          type: "heading",
          value: "PEI Default Speed Limits",
        },
        {
          type: "table",
          headers: ["Area / Condition", "Maximum Permitted Speed"],
          rows: [
            ["Most municipalities / urban areas", "50 km/h (unless posted 40 km/h)"],
            ["School zones (when children present)", "60 km/h"],
            ["Most provincial highways", "80 km/h"],
            ["Trans-Canada and designated highways", "90 km/h"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "The safest speed is not always the slowest. Driving dangerously slow can frustrate others and cause dangerous passing situations.",
        },
      ],
    },
    {
      id: "m3ch1_pg2",
      title: "The Physics of Stopping (Why You Can't Stop Instantly)",
      content: [
        { type: "heading", value: "The Three Steps to Stop" },
        {
          type: "text",
          value:
            "Vehicles cannot stop instantly. A complete stop happens in three required phases. Understanding this is critical for passing the road test and staying safe.",
        },
        {
          type: "list",
          items: [
            "1. See the Problem: You must first recognize a reason to stop.",
            "2. React: The average driver takes ¾ of a second just to move their foot to the brake.",
            "3. Brake: The vehicle's mechanics take over, and stopping distance depends on speed, tires, and road conditions.",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          value:
            "At 50 km/h, your vehicle travels about 10 metres (two car lengths) just during your ¾ second reaction time, before you even touch the brake pedal.",
        },
        {
          type: "heading",
          value: "Adverse Conditions Alter the Math",
        },
        {
          type: "text",
          value:
            "Wet or icy roads drastically extend the third phase (braking distance). If your car does not have Anti-Lock Brakes (ABS), applying hard steady pressure will lock the wheels and cause a skid. You must pump the brakes instead.",
        },
      ],
    },
    {
      id: "m3ch1_pg3",
      title: "The 3-Second Rule (Time-Interval Formula)",
      content: [
        { type: "heading", value: "How to Measure Safe Distance" },
        {
          type: "text",
          value:
            "Because stopping takes time, you must maintain a safety gap between you and the car ahead. PEI uses the 3-Second Time-Interval Formula for normal driving conditions.",
        },
        {
          type: "list",
          items: [
            "Step 1: Pick a fixed marker ahead (a sign, pole, or shadow).",
            "Step 2: When the rear of the car ahead passes it, count: 'one thousand and one, one thousand and two, one thousand and three'.",
            "Step 3: If the front of your car reaches the marker before you finish counting, you are too close. Ease off the gas.",
          ],
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A diagram showing Car A and Car B travelling in the same direction. A tree acts as a marker. A countdown clock runs from 3 seconds between the two cars.",
        },
        {
          type: "heading",
          value: "When to Add More Time",
        },
        {
          type: "table",
          headers: ["Situation", "Required Adjustment"],
          rows: [
            ["Pulling a trailer", "Increase to 4+ seconds (extra weight needs more stopping space)"],
            ["Following a motorcycle", "Increase time (motorcycles can stop faster than cars)"],
            ["Bad weather / poor visibility", "Increase to 4+ seconds (roads are slick and reaction is slower)"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Every chapter completed marks progress toward passing your road test. The examiner will specifically watch for your 3-second gap in traffic to verify you understand these survival mechanics.",
        },
      ],
    },
  ],
};
