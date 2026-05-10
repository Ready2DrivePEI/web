import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m2chapter1: Chapter = {
  id: "m2chapter1",
  title: "Traffic Signals, Pavement Markings and Work Zones",
  type: "lesson",
  slug: "traffic-signals-pavement-markings-work-zones",
  completed: false,
  lessons: [
    // PAGE 1
    {
      id: "m2ch1_pg1",
      title: "How Road Communication Works",
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
            "Driving is not just control of a vehicle. It is constant communication between you, the road, and every other road user. Every signal, sign, and marking is part of a **shared language** designed to **prevent conflict before it happens**.",
        },
        {
          type: "heading",
          value: "⚙️ The 3-step decision loop",
        },
        {
          type: "list",
          items: [
            "**Notice early** → what is the road telling me?",
            "**Interpret correctly** → what does this require me to do?",
            "**Act smoothly** → can I do it without shocking other drivers?",
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
            "Advanced mindset: Don’t react to the road. **Predict it 3–5 seconds ahead**.",
        },
      ],
    },

    // PAGE 2
    {
      id: "m2ch1_pg2",
      title: "Traffic Signals: Beyond Colors (Decision Logic)",
      content: [
        {
          type: "image",
          src: "/module2/green light.png",
          alt: "Green light traffic signal",
          layout: "half",
          align: "left",
        },
        {
          type: "heading",
          value: "🟢 Green light",
        },
        {
          type: "text",
          value:
            "**Situation:** Light turns green but intersection is busy.\n**Action:** **Move only if path is fully clear.**\n**Reason:** Green gives legal permission, not physical safety.",
        },

        {
          type: "image",
          src: "/module2/yellow amber light.png",
          alt: "Yellow/Amber light traffic signal",
          layout: "half",
          align: "left",
        },
        {
          type: "heading",
          value: "🟡 Amber light (decision trap)",
        },
        {
          type: "text",
          value:
            "**Situation:** Light turns amber as you approach.\n**Action:** **Decide instantly: brake smoothly or continue.**\n**Reason:** Indecision causes rear-end crashes more than speed does.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Hidden rule: If you’re asking yourself 'should I stop?', you probably had time to stop.",
        },
        {
          type: "image",
          src: "/module2/red light.png",
          alt: "Red light traffic signal",
          layout: "half",
          align: "left",
        },
        {
          type: "heading",
          value: "🔴 Red light",
        },
        {
          type: "text",
          value:
            "**Situation:** Red ahead.\n**Action:** **Stop before line, crosswalk, or intersection.**\n**Reason:** These zones protect invisible risks like crossing pedestrians.",
        },
        {
          type: "heading",
          value: "➡️ Right turn on red",
        },
        {
          type: "text",
          value:
            "**Situation:** Turning right at red.\n**Action:** **Full stop → scan → yield → then move.**\n**Reason:** You are entering someone else’s right-of-way.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Most people treat this like merging. It is not. It is a **controlled re-entry into traffic**.",
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
          value: "🚨 Flashing red",
        },
        {
          type: "text",
          value:
            "**Situation:** Flashing red light.\n**Action:** **Treat exactly like a STOP sign.**\n**Reason:** Full stop ensures all drivers negotiate safely.",
        },
        {
          type: "heading",
          value: "🟡 Flashing amber",
        },
        {
          type: "text",
          value:
            "**Situation:** Flashing amber.\n**Action:** **Slow down, proceed with caution.**\n**Reason:** Danger exists, but traffic flow continues.",
        },
        {
          type: "heading",
          value: "🏫 School signals",
        },
        {
          type: "text",
          value:
            "**Situation:** Flashing school lights.\n**Action:** **Reduce speed immediately and scan for children.**\n**Reason:** Children behave unpredictably and may ignore traffic rules.",
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
            "**Advance sign** → prepare to slow",
            "**Flashing lights** → mandatory stop",
            "**Gate closing** → do not cross under any condition",
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
          value: "🛣️ Yellow lines (opposite traffic)",
        },
        {
          type: "text",
          value:
            "**Solid** = no passing. **Broken** = pass only when fully safe.\n\nWhy: Opposite traffic creates highest fatal risk. These lines are strict for a reason.",
        },
        {
          type: "heading",
          value: "⚪ White lines (same direction)",
        },
        {
          type: "text",
          value:
            "**Solid** = stay in lane. **Broken** = lane change allowed.\n\nWhy: Predictability prevents side collisions.",
        },
        {
          type: "heading",
          value: "Crosshatch zones",
        },
        {
          type: "text",
          value:
            "**Never enter or stop.**\n\nWhy: These are buffer zones that keep traffic flows from blocking each other.",
        },
        {
          type: "heading",
          value: "Arrows and stop lines",
        },
        {
          type: "text",
          value:
            "**Arrows** = commit to direction. **Stop line** = legal stopping boundary.\n\nWhy: Prevents last-second chaos at intersections.",
        },
      ],
    },

    // PAGE 6
    {
      id: "m2ch1_pg6",
      title: "Crosswalks and Pedestrian Priority",
      content: [
        {
          type: "text",
          value:
            "A crosswalk is where small driver mistakes become life-changing injuries. Pedestrians are unpredictable because they make human decisions, not traffic decisions. Someone can step off the curb while looking at a phone, chasing a child, or assuming you will stop. Seeing a pedestrian near a crosswalk is like seeing a football near a child: your brain should already expect sudden movement.",
        },
        {
          type: "heading",
          value: "What Most Drivers Get Wrong",
        },
        {
          type: "list",
          items: [
            "They look only at the person they can see, not the person hidden behind a parked SUV or van",
            "They pass a vehicle that has stopped at a crosswalk, not realizing that vehicle may be yielding to a pedestrian",
            "They assume eye contact means the pedestrian will wait",
            "They keep rolling because the crosswalk looks empty for one second",
          ],
        },
        {
          type: "heading",
          value: "Hidden Dangers You Must Predict",
        },
        {
          type: "text",
          value:
            "**Parked-car blind spots:** A person can appear with almost no warning from between parked vehicles.\n\n**Multi-lane crosswalk trap:** If one lane stops and another lane keeps moving, the moving lane is often the impact lane.\n\n**School-zone behavior:** Children can run backward, sideways, or suddenly return for something they dropped. Do not assume linear movement.",
        },
        {
          type: "heading",
          value: "Practical Yielding Technique",
        },
        {
          type: "list",
          items: [
            "**Lift off the accelerator early** when approaching any crosswalk with people nearby",
            "**Cover the brake** before the conflict point so your stop is smooth, not panicked",
            "**Stop early enough** that drivers behind you can understand your intention",
            "**Wait until the pedestrian has clearly finished crossing your path** before continuing",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Do not trust eye contact alone. People make unpredictable moves under stress, in rain, at night, and in school areas. Drive based on space and risk, not assumptions.",
        },
      ],
    },

    // PAGE 7
    {
      id: "m2ch1_pg7",
      title: "Work Zones: Temporary Reality Shift",
      content: [
        {
          type: "text",
          value:
            "Work zones feel confusing because your normal road map no longer applies. Lane lines may disappear, cones create temporary lanes, and traffic can compress suddenly. Treat a work zone as a **temporary reality shift**: same vehicle, different rules, less margin for error.",
        },
        {
          type: "heading",
          value: "Why Drivers Misjudge Work Zones",
        },
        {
          type: "list",
          items: [
            "Temporary lanes feel wider or safer than they are, so speed creeps up without noticing",
            "Cones look light and harmless, so drivers underestimate how little room remains",
            "When workers are not visible, drivers assume danger is gone even though road geometry is still unstable",
            "The flow seems smooth for a moment, creating a false sense of safety",
          ],
        },
        {
          type: "heading",
          value: "Cone-Following and Lane Psychology",
        },
        {
          type: "text",
          value:
            "In work zones, cones are the lane boundaries. Your job is to follow the path early and smoothly, not make late corrections. Last-second lane shifts force chain reactions behind you and can push nearby vehicles toward barriers or workers.",
        },
        {
          type: "heading",
          value: "Worker Exposure and Blind Spots",
        },
        {
          type: "text",
          value:
            "Workers may be near equipment, behind barriers, or stepping between machines where they cannot see you. Large trucks and machinery also create blind zones where your car can disappear. Reduced speed is not just a legal request; it is extra decision time for everyone in a constrained space.",
        },
        {
          type: "heading",
          value: "How to Drive It Correctly",
        },
        {
          type: "list",
          items: [
            "**Read the zone early** and pick your lane before the taper begins",
            "**Hold steady spacing** and avoid unnecessary lane changes",
            "**Keep speed consistently reduced** all the way through, not only at the first sign",
            "**Treat every flagger instruction as immediate traffic control**, not optional guidance",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Construction-zone illusion: \"It looks clear, so I can speed up.\" This is where many crashes start. In work zones, visual calm can hide sudden lane shifts, debris, and human movement.",
        },
      ],
    },

    // PAGE 8
    {
      id: "m2ch1_pg8",
      title: "Advance Warning Signs and Anticipation",
      content: [
        {
          type: "text",
          value:
            "Anticipation is a survival skill, not an advanced bonus. Warning signs are placed before danger so you can prepare while you still have options. If you wait until the hazard is visible, your choices shrink to hard braking or risky swerving.",
        },
        {
          type: "heading",
          value: "Why Early Information Matters",
        },
        {
          type: "list",
          items: [
            "At 50 km/h, each second of delay carries you much farther than most beginners realize",
            "Your reaction time and braking distance stack together, especially on wet or loose surfaces",
            "**Early adjustment** is smooth and controlled; late adjustment is abrupt and unstable",
          ],
        },
        {
          type: "heading",
          value: "How Expert Drivers Think 5 Seconds Ahead",
        },
        {
          type: "list",
          items: [
            "**Scan far ahead** for the next change in road condition or traffic behavior",
            "**Convert early clues into a plan**: slow, cover brake, change lane, or increase space",
            "**Confirm mirrors before you need them**, not during panic",
            "**Arrive at hazards prepared**, not surprised",
          ],
        },
        {
          type: "heading",
          value: "Real Situations",
        },
        {
          type: "list",
          items: [
            "Road work ahead: late lane changes cause side-swipe crashes and sudden braking waves",
            "Sharp curve ahead: entering too fast leads to overcorrection and lane departure",
            "Railway crossing ahead: delayed preparation causes rushed stops on slippery surfaces",
            "Pedestrian activity ahead: late recognition turns a controlled yield into an emergency stop",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Predictive rule: Every warning sign is a countdown, not decoration. Use it to set speed, space, and attention before the road demands it.",
        },
      ],
    },

    // PAGE 9
    {
      id: "m2ch1_pg9",
      title: "Chapter Wrap-Up: Predictive Driving Habit",
      content: [
        {
          type: "heading",
          value: "The Predictive Driver Framework",
        },
        {
          type: "text",
          value:
            "Strong drivers do not wait to be surprised. They run a short mental loop all the time: **read early, predict early, act early**. This chapter is not about memorizing isolated rules. It is about building a thinking pattern you can use under pressure.",
        },
        {
          type: "heading",
          value: "Use This 5-Step Checklist in Real Time",
        },
        {
          type: "list",
          items: [
            "**What is controlling my movement right now?** (signal, marking, temporary lane, crosswalk activity)",
            "**What is the most likely conflict in the next 3 to 5 seconds?**",
            "**Where is my escape space** if something changes suddenly?",
            "**What can I do now to make my next move smooth and obvious?**",
            "**Will my action reduce stress for everyone around me or create it?**",
          ],
        },
        {
          type: "heading",
          value: "Memory Anchor",
        },
        {
          type: "text",
          value:
            "If you can predict it, you can manage it. If you wait to react, the road manages you.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "The goal of skilled driving is simple: be early, be smooth, be predictable. When others do not need to make emergency adjustments because of you, your decisions are working.",
        },
      ],
    },
  ],
};