import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m2chapter2: Chapter = {
  id: "m2chapter2",
  title: "Right-of-Way, Intersections, Pedestrians and Core Legal Duties",
  type: "lesson",
  slug: "right-of-way-intersections-pedestrians-core-legal-duties",
  completed: false,
  lessons: [
    {
      id: "m2ch2_pg1",
      title: "Driver Responsibility and Occupant Safety Basics",
      content: [
        {
          type: "text",
          value:
            "Defensive driving starts before the car moves. Safety inside the vehicle is your first legal and practical responsibility.",
        },
        {
          type: "heading",
          value: "👶 Seat belts and child restraints in real life",
        },
        {
          type: "text",
          value:
            "**Situation:** You are about to start a short trip.\n**Action:** Make sure everyone is properly restrained before moving.\n**Reason:** Many serious injuries happen close to home at low-to-medium speed.",
        },
        {
          type: "list",
          items: [
            "Passengers 16+ should wear seat belts whenever available",
            "Driver is responsible for passengers under 16 being properly restrained",
            "Children need approved restraints matched to size and age",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: delaying seat-belt use for 'just a short drive.'",
        },
      ],
    },
    {
      // Merged: pg2 (Right-of-Way Fundamentals) + pg3 (Stop Signs, Yield, Left Turns)
      // Rationale: Both pages address right-of-way rules at intersections. pg2 introduces
      // the concept and scanning behaviour; pg3 applies it to specific control types.
      // The progression is continuous — no meaningful cognitive break between them.
      id: "m2ch2_pg2",
      title: "Right-of-Way Rules: Intersections, Signs, and Turns",
      content: [
        {
          type: "text",
          value:
            "Right-of-way decides who should move first, but safe driving still requires checking for hazards before you go.",
        },
        {
          type: "heading",
          value: "🤝 Same-time arrival at a 4-way stop",
        },
        {
          type: "text",
          value:
            "**Situation:** You and another car arrive at the same time.\n**Action:** If the other vehicle is on your right, let them go first.\n**Reason:** Shared expectations reduce intersection confusion.",
        },
        {
          type: "heading",
          value: "🔍 When visibility is poor",
        },
        {
          type: "text",
          value:
            "**Situation:** Parked vehicles block your view.\n**Action:** Move only after slow, full scanning.\n**Reason:** Priority means little if you cannot see conflicting road users.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: assuming right-of-way means you can enter without checking.",
        },
        {
          type: "heading",
          value: "🛑 Stop sign",
        },
        {
          type: "text",
          value:
            "**Situation:** Quiet neighbourhood stop sign with no obvious traffic.\n**Action:** Stop completely at the correct point, then continue when safe.\n**Reason:** Full stops create predictable movement for all users.",
        },
        {
          type: "heading",
          value: "🔻 Yield sign",
        },
        {
          type: "text",
          value:
            "**Situation:** You approach a merge or uncontrolled entry with a yield sign.\n**Action:** Slow enough to stop and enter only when a safe gap exists.\n**Reason:** Forcing entry causes chain braking.",
        },
        {
          type: "heading",
          value: "⬅️ Left turn",
        },
        {
          type: "text",
          value:
            "**Situation:** You turn left across oncoming lanes.\n**Action:** Signal, choose the proper lane, yield to traffic and pedestrians, then complete the turn.\n**Reason:** Left turns combine multiple conflict points at once.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: watching only oncoming cars and missing pedestrians in the crosswalk.",
        },
      ],
    },
    {
      id: "m2ch2_pg3",
      title: "Entering from Driveways, Lanes, and Alleys",
      content: [
        {
          type: "text",
          value:
            "When entering from a driveway or alley, you are joining active traffic from a lower-priority position.",
        },
        {
          type: "heading",
          value: "🧭 Driveway entry sequence",
        },
        {
          type: "list",
          items: [
            "Stop before entering the roadway or crosswalk path",
            "Look both directions and check sidewalks",
            "Yield until entry can happen without forcing another road user to brake",
            "Join traffic smoothly once the gap is truly safe",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "If your entry makes another driver brake hard, the gap was not safe.",
        },
      ],
    },
    {
  id: "m2ch2_pg4",
  title: "Special Right-of-Way: Emergency and Funeral Vehicles",
  content: [
    {
      type: "heading",
      value: "🚨 Emergency vehicles",
    },
    {
      type: "text",
      value:
        "**Situation:** You hear a siren and see flashing lights coming toward you.\n**Action:** Get out of the intersection first, then pull to the right and stop until they pass.\n**Reason:** Every second counts for emergency responders, and a blocked road can cost someone their life.",
    },
    {
      type: "list",
      items: [
        "Always pull to the right, not the left, even on a one-way road",
        "Do not stop inside an intersection, clear it first and then pull over",
        "Do not follow behind an emergency vehicle or drive in the path it just cleared",
        "Stay stopped until the vehicle has fully passed you",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      value:
        "Common mistake: freezing and stopping inside the intersection because you panicked. Always clear it first, then pull over.",
    },
    {
      type: "heading",
      value: "⚰️ Funeral processions",
    },
    {
      type: "text",
      value:
        "**Situation:** A long line of cars is driving together as a procession. You can usually spot one by headlights on during the day, hazard lights flashing, or a lead escort vehicle at the front.\n**Action:** Do not cut through the line of cars. Slow down and wait for the whole procession to pass.\n**Reason:** If you cut through, the cars behind you get separated at the intersection and have to stop in the middle of traffic, which causes confusion and risk for everyone.",
    },
    {
      type: "list",
      items: [
        "Procession vehicles are allowed to go through red lights to stay together as a group",
        "Do not pull into an intersection to cut through, even if your light is green",
        "Pull to the side and wait until the last car in the procession has cleared",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      value:
        "Common mistake: thinking your green light gives you the right of way over a procession that is already moving through the intersection. It does not.",
    },
 
      ],
    },
    {
      // Merged: pg6 (Pedestrian Rights) + pg7 (No-Pass Rule at Pedestrian Stops)
      // Rationale: pg7 contains a single rule that is a direct behavioural extension of
      // pedestrian crosswalk scenarios in pg6. It is too brief to justify a standalone page
      // and reads as a natural "also note" addendum to the crosswalk section.
      id: "m2ch2_pg5",
      title: "Pedestrian Rights and the No-Pass Rule at Crossings",
      content: [
        {
          type: "text",
          value:
            "Pedestrians are less protected than vehicle occupants. At crossings, your lane priority is secondary to pedestrian safety.",
        },
        {
          type: "heading",
          value: "🚦 Signalized crossing",
        },
        {
          type: "text",
          value:
            "**Situation:** You want to turn right and a pedestrian has a walk signal.\n**Action:** Wait until your path is fully clear.\n**Reason:** Turning across an active crossing is a common collision pattern.",
        },
        {
          type: "heading",
          value: "🚸 Unsignalized crossing",
        },
        {
          type: "text",
          value:
            "**Situation:** A person steps into a marked crosswalk without traffic lights.\n**Action:** Yield and stop as needed before the crossing.\n**Reason:** Pedestrians have crossing priority here.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a simple SVG visual with two scenes: right-turn at walk signal and unsignalized crosswalk yield.",
        },
        {
          type: "heading",
          value: "⛔ No-pass rule when a vehicle is stopped for a pedestrian",
        },
        {
          type: "text",
          value:
            "**Situation:** A stopped vehicle ahead blocks your view of the crosswalk.\n**Action:** Remain behind and slow down — do not pass.\n**Reason:** A pedestrian may be hidden in front of that vehicle.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: passing because the next lane 'looks clear' for a second.",
        },
      ],
    },
    {
      id: "m2ch2_pg6",
      title: "Chapter Wrap-Up: Intersection and Pedestrian Decision Flow",
      content: [
        {
          type: "text",
          value:
            "At intersections, safe driving is about patient sequencing, not speed.",
        },
        {
          type: "heading",
          value: "🔄 Practical 5-step flow",
        },
        {
          type: "list",
          items: [
            "1) Identify the control (stop, yield, signal, flashing signal)",
            "2) Stop at the correct point",
            "3) Scan for vehicles, pedestrians, and cyclists",
            "4) Confirm priority",
            "5) Move only if no one else must brake or swerve because of you",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "If your move is legal and predictable for others, it is usually the correct defensive move.",
        },
      ],
    },
  ],
};