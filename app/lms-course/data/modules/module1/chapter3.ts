import type { Chapter } from "./chapter1";

export const chapter3: Chapter = {
  id: "chapter3",
  title: "Knowledge, Vision, and Road Test Prep",
  type: "lesson",
  slug: "knowledge-vision-road-test-prep",
  completed: false,
  lessons: [
    {
      id: "pg1",
      title: "Knowledge Test and Vision Test Essentials",
      content: [
        {
          type: "text",
          value:
            "The knowledge test checks your understanding of traffic laws, safe driving practices, and road signs. Questions come from this handbook.",
        },
        {
          type: "text",
          value:
            "The written test covers three main areas: laws and regulations, safe driving practices, and recognition of standard road signs by shape, color, and meaning.",
        },
        {
          type: "image",
          src: "/module1/chapter3-knowledge-test.svg",
          alt: "Knowledge test study materials with road signs and checklist",
          layout: "half",
        },
        {
          type: "text",
          value:
            "If reading is difficult, you may request an oral test version. If you do not pass, you can book another attempt for a later date.",
        },
        {
          type: "text",
          value:
            "The vision test evaluates more than basic clarity. It checks multiple aspects of eyesight needed for safe driving decisions.",
        },
        {
          type: "list",
          items: [
            "Visual acuity for clear distance vision",
            "Field of vision for awareness around the vehicle",
            "Color recognition for traffic light and signal interpretation",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "If a deficiency is found, you may receive conditions like required corrective lenses or equipment adjustments.",
        },
      ],
    },
    {
      id: "pg2",
      title: "Road Test Readiness and Test-Day Expectations",
      content: [
        {
          type: "text",
          value:
            "The road test evaluates your ability to operate a vehicle safely in real traffic situations. You must bring your own prepared vehicle.",
        },
        {
          type: "image",
          src: "/module1/chapter3-road-test.svg",
          alt: "Road test day checklist with vehicle safety inspection points",
          layout: "half",
        },
        {
          type: "text",
          value: "Bring the following on test day:",
        },
        {
          type: "list",
          items: [
            "Your own vehicle",
            "A licensed driver to accompany you to the test",
            "Valid proof of insurance (pink card)",
            "Valid vehicle registration",
          ],
        },
        {
          type: "text",
          value: "Before the test starts, your vehicle is inspected for safety compliance.",
        },
        {
          type: "table",
          headers: ["Inspection Category", "Examples"],
          rows: [
            ["Exterior and legal items", "Licence plates, inspection sticker, windshield condition"],
            ["Core controls", "Brakes, horn, speedometer, mirrors, seat belts"],
            ["Visibility and signaling", "All lights, wipers, window glass condition"],
            ["Mechanical basics", "Muffler and tire condition"],
          ],
        },
        {
          type: "text",
          value:
            "During the drive, the examiner observes starting, stopping, turning, parking, sign compliance, intersection handling, hazard anticipation, and overall safe attitude.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Follow examiner instructions carefully and keep communication focused. Additional passengers are not permitted during the road test.",
        },
      ],
    },
  ],
};
