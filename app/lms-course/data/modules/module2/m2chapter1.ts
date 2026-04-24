import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m2chapter1: Chapter = {
  id: "m2chapter1",
  title: "Traffic Signs, Signals, Pavement Markings and Work Zones",
  type: "lesson",
  slug: "traffic-signs-signals-pavement-markings-work-zones",
  completed: false,
  lessons: [

    // PAGE 1
    {
      id: "m2ch1_pg1",
      title: "How Road Communication Works (Advanced Driver Model)",
      content: [
        {
          type: "image",
          src: "/module2/m2ch1pg1.png",
          alt: "Road scene showing signal, stop sign, lane marking, and work-zone cones",
          layout: "threeQuarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Driving is not just control of a vehicle. It is constant communication between you, the road, and every other road user. Every signal, sign, and marking is part of a shared language designed to prevent conflict before it happens.",
        },
        {
          type: "heading",
          value: "🧠 The 3-step decision loop",
        },
        {
          type: "list",
          items: [
            "Notice early → what is the road telling me?",
            "Interpret correctly → what does this require me to do?",
            "Act smoothly → can I do it without shocking other drivers?",
          ],
        },
        {
          type: "text",
          value:
            "Most crashes are not caused by lack of skill. They are caused by delayed decisions or misreading signals. The earlier you process information, the safer your actions become.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Advanced mindset: Don’t react to the road. Predict it 3–5 seconds ahead.",
        },
      ],
    },

    // PAGE 2
    {
      id: "m2ch1_pg2",
      title: "Traffic Signals: Beyond Colors (Decision Logic)",
      content: [
        {
          type: "heading",
          value: "🟢 Green light",
        },
        {
          type: "text",
          value:
            "**Situation:** Light turns green but intersection is busy.\n**Action:** Move only if path is fully clear.\n**Reason:** Green gives legal permission, not physical safety.",
        },
        {
          type: "heading",
          value: "🟡 Amber light (decision trap)",
        },
        {
          type: "text",
          value:
            "**Situation:** Light turns amber as you approach.\n**Action:** Decide instantly: brake smoothly or continue.\n**Reason:** Indecision causes rear-end crashes more than speed does.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Hidden rule: If you’re asking yourself 'should I stop?', you probably had time to stop.",
        },
        {
          type: "heading",
          value: "🔴 Red light",
        },
        {
          type: "text",
          value:
            "**Situation:** Red ahead.\n**Action:** Stop before line, crosswalk, or intersection.\n**Reason:** These zones protect invisible risks like crossing pedestrians.",
        },
        {
          type: "heading",
          value: "➡️ Right turn on red",
        },
        {
          type: "text",
          value:
            "**Situation:** Turning right at red.\n**Action:** Full stop → scan → yield → then move.\n**Reason:** You are entering someone else’s right-of-way.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Most people treat this like merging. It is not. It is a controlled re-entry into traffic.",
        },
      ],
    },

    // PAGE 3
    {
      id: "m2ch1_pg3",
      title: "Flashing Signals and Special Light Systems",
      content: [
        {
          type: "image",
          src: "/module2/m2ch1pg3.png",
          alt: "Flashing signal comparison",
          layout: "threeQuarter",
        },
        {
          type: "heading",
          value: "🔴 Flashing red",
        },
        {
          type: "text",
          value:
            "**Situation:** Flashing red light.\n**Action:** Treat exactly like a STOP sign.\n**Reason:** Full stop ensures all drivers negotiate safely.",
        },
        {
          type: "heading",
          value: "🟡 Flashing amber",
        },
        {
          type: "text",
          value:
            "**Situation:** Flashing amber.\n**Action:** Slow down, proceed with caution.\n**Reason:** Danger exists, but traffic flow continues.",
        },
        {
          type: "heading",
          value: "🏫 School signals",
        },
        {
          type: "text",
          value:
            "**Situation:** Flashing school lights.\n**Action:** Reduce speed immediately and scan for children.\n**Reason:** Children behave unpredictably and may ignore traffic rules.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Adult logic fails here. Children don’t calculate speed, they run.",
        },
      ],
    },

    // PAGE 4
    {
      id: "m2ch1_pg4",
      title: "Railway Crossings: High-Risk Decision Zones",
      content: [
        {
          type: "text",
          value:
            "Railway crossings are one of the few places where your mistake cannot be corrected. Trains cannot stop quickly, so your decision must happen early.",
        },
        {
          type: "heading",
          value: "🚆 Warning sequence",
        },
        {
          type: "list",
          items: [
            "Advance sign → prepare to slow",
            "Flashing lights → mandatory stop",
            "Gate closing → do not cross under any condition",
          ],
        },
        {
          type: "heading",
          value: "🧠 Critical mistake pattern",
        },
        {
          type: "text",
          value:
            "Many drivers move after one train passes. This is dangerous because a second train may come from the opposite direction.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Rule: Never move until signals stop completely. Not when you feel safe.",
        },
      ],
    },

    // PAGE 5
    {
      id: "m2ch1_pg5",
      title: "Pavement Markings: Hidden Control System",
      content: [
        {
          type: "image",
          src: "/module2/m2ch1pg5.png",
          alt: "Road markings legend",
          layout: "threeQuarter",
        },
        {
          type: "heading",
          value: "🟡 Yellow lines (opposite traffic)",
        },
        {
          type: "text",
          value:
            "Solid = no passing. Broken = pass only when fully safe.\n\nWhy: Opposite traffic creates highest fatal risk. These lines are strict for a reason.",
        },
        {
          type: "heading",
          value: "⚪ White lines (same direction)",
        },
        {
          type: "text",
          value:
            "Solid = stay in lane. Broken = lane change allowed.\n\nWhy: Predictability prevents side collisions.",
        },
        {
          type: "heading",
          value: "Crosshatch zones",
        },
        {
          type: "text",
          value:
            "Never enter or stop.\n\nWhy: These are buffer zones that keep traffic flows from blocking each other.",
        },
        {
          type: "heading",
          value: "Arrows and stop lines",
        },
        {
          type: "text",
          value:
            "Arrows = commit to direction. Stop line = legal stopping boundary.\n\nWhy: Prevents last-second chaos at intersections.",
        },
      ],
    },

    // PAGE 6
    {
      id: "m2ch1_pg6",
      title: "Crosswalks and Pedestrian Priority",
      content: [
        {
          type: "heading",
          value: "🚶 Crosswalk types",
        },
        {
          type: "list",
          items: [
            "Marked crosswalks → clearly painted",
            "Unmarked crosswalks → exist at intersections",
          ],
        },
        {
          type: "heading",
          value: "Action",
        },
        {
          type: "text",
          value:
            "Always yield to pedestrians crossing legally, even if they move slowly or unexpectedly.",
        },
        {
          type: "heading",
          value: "Reason",
        },
        {
          type: "text",
          value:
            "Pedestrians are the most vulnerable road users. Law prioritizes their safety over vehicle flow.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Hidden danger: A car stopped in another lane may be hiding a pedestrian.",
        },
      ],
    },

    // PAGE 7
    {
      id: "m2ch1_pg7",
      title: "Sign Systems: Shapes, Colors, and Meaning",
      content: [
        {
          type: "heading",
          value: "⚖️ Regulatory signs",
        },
        {
          type: "text",
          value:
            "These are laws. Ignoring them is not a mistake, it’s an offence.",
        },
        {
          type: "heading",
          value: "⚠️ Warning signs",
        },
        {
          type: "text",
          value:
            "These prepare you for hazards ahead. They are early signals, not immediate commands.",
        },
        {
          type: "heading",
          value: "🟧 Construction signs",
        },
        {
          type: "text",
          value:
            "Temporary but higher priority than permanent signs.",
        },
        {
          type: "heading",
          value: "Shape shortcuts",
        },
        {
          type: "list",
          items: [
            "Octagon → STOP",
            "Triangle → YIELD",
            "Diamond → WARNING",
          ],
        },
      ],
    },

    // PAGE 8
    {
      id: "m2ch1_pg8",
      title: "Work Zones: Temporary Reality Shift",
      content: [
        {
          type: "text",
          value:
            "Work zones override normal driving rules. Think of them as a temporary new road.",
        },
        {
          type: "list",
          items: [
            "Follow cones as lane boundaries",
            "Obey flagperson instantly",
            "Maintain reduced speed throughout",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Danger illusion: Just because workers aren’t visible doesn’t mean the risk is gone.",
        },
      ],
    },

    // PAGE 9
    {
      id: "m2ch1_pg9",
      title: "Advance Warning Signs and Anticipation",
      content: [
        {
          type: "text",
          value:
            "Advance warning signs exist to shift your thinking before the hazard appears.",
        },
        {
          type: "heading",
          value: "Examples",
        },
        {
          type: "list",
          items: [
            "Curve ahead → reduce speed early",
            "Railway crossing ahead → prepare to stop",
            "Construction ahead → expect lane change",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Best drivers don’t react late. They prepare early.",
        },
      ],
    },

    // PAGE 10
    {
      id: "m2ch1_pg10",
      title: "Chapter Wrap-Up: Predictive Driving Habit",
      content: [
        {
          type: "heading",
          value: "🧠 Final decision checklist",
        },
        {
          type: "list",
          items: [
            "What is controlling me right now?",
            "What is likely to happen next?",
            "Am I forcing someone else to react suddenly?",
            "Is my move predictable to others?",
          ],
        },
        {
          type: "text",
          value:
            "Driving well is not about being fast or confident. It is about being predictable, smooth, and early in every decision.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "If others don’t need to adjust because of you, you are driving correctly.",
        },
      ],
    },

  ],
};