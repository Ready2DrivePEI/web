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
          value: "Seat belts and child restraints in real life",
        },
        {
          type: "text",
          value:
            "Situation: You are about to start a short trip. Action: make sure everyone is properly restrained before moving. Reason: many serious injuries happen close to home at low-to-medium speed.",
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
      id: "m2ch2_pg2",
      title: "Right-of-Way Fundamentals at Intersections",
      content: [
        {
          type: "text",
          value:
            "Right-of-way decides who should move first, but safe driving still requires checking for hazards before you go.",
        },
        {
          type: "heading",
          value: "Same-time arrival at a 4-way stop",
        },
        {
          type: "text",
          value:
            "Situation: You and another car stop at the same time. Action: if the other vehicle is on your right, let them go first. Reason: shared expectations reduce intersection confusion.",
        },
        {
          type: "heading",
          value: "When visibility is poor",
        },
        {
          type: "text",
          value:
            "Situation: Parked vehicles block your view. Action: move only after slow, full scanning. Reason: priority means little if you cannot see conflicting road users.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: assuming right-of-way means you can enter without checking.",
        },
      ],
    },
    {
      id: "m2ch2_pg3",
      title: "Stop Signs, Yield Signs, and Left Turns",
      content: [
        {
          type: "heading",
          value: "Stop sign",
        },
        {
          type: "text",
          value:
            "Situation: Quiet neighborhood stop sign with no obvious traffic. Action: stop completely at the correct point, then continue when safe. Reason: full stops create predictable movement for all users.",
        },
        {
          type: "heading",
          value: "Yield sign",
        },
        {
          type: "text",
          value:
            "Situation: You approach a merge or uncontrolled entry with yield sign. Action: slow enough to stop and enter only when a safe gap exists. Reason: forcing entry causes chain braking.",
        },
        {
          type: "heading",
          value: "Left turn",
        },
        {
          type: "text",
          value:
            "Situation: You turn left across oncoming lanes. Action: signal, choose proper lane, yield to traffic and pedestrians, then complete turn. Reason: left turns combine multiple conflict points at once.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: watching only oncoming cars and missing pedestrians in crosswalk.",
        },
      ],
    },
    {
      id: "m2ch2_pg4",
      title: "Entering from Driveways, Lanes, and Alleys",
      content: [
        {
          type: "text",
          value:
            "When entering from a driveway or alley, you are joining active traffic from a lower-priority position.",
        },
        {
          type: "heading",
          value: "Driveway entry sequence",
        },
        {
          type: "list",
          items: [
            "Stop before entering roadway or crosswalk path",
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
      id: "m2ch2_pg5",
      title: "Special Right-of-Way: Emergency and Funeral Vehicles",
      content: [
        {
          type: "heading",
          value: "Emergency vehicles",
        },
        {
          type: "text",
          value:
            "Situation: You hear a siren and see flashing lights approaching. Action: clear the intersection, move to the side safely, and stop until they pass. Reason: response time is critical and blocked paths cost lives.",
        },
        {
          type: "heading",
          value: "Funeral processions",
        },
        {
          type: "text",
          value:
            "Situation: A line of vehicles moves together as a procession. Action: do not cut through from behind; reduce speed and stay cautious. Reason: breaking the procession creates unpredictable crossing conflicts.",
        },
      ],
    },
    {
      id: "m2ch2_pg6",
      title: "Pedestrian Rights at Signalized and Unsignalized Intersections",
      content: [
        {
          type: "text",
          value:
            "Pedestrians are less protected than vehicle occupants. At crossings, your lane priority is secondary to pedestrian safety.",
        },
        {
          type: "heading",
          value: "Signalized crossing example",
        },
        {
          type: "text",
          value:
            "Situation: You want to turn right, and a pedestrian has a walk signal. Action: wait until your path is fully clear. Reason: turning across an active crossing is a common collision pattern.",
        },
        {
          type: "heading",
          value: "Unsignalized crossing example",
        },
        {
          type: "text",
          value:
            "Situation: A person steps into a marked crosswalk without traffic lights. Action: yield and stop as needed before the crossing. Reason: pedestrians have crossing priority here.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a simple SVG visual with two scenes: right-turn at walk signal and unsignalized crosswalk yield.",
        },
      ],
    },
    {
      id: "m2ch2_pg7",
      title: "No-Pass Rule at Pedestrian Stops",
      content: [
        {
          type: "text",
          value:
            "If a car ahead stops for a pedestrian, you must stay behind it and not pass.",
        },
        {
          type: "heading",
          value: "Why this rule exists",
        },
        {
          type: "text",
          value:
            "Situation: A stopped vehicle blocks your view of the crosswalk. Action: remain behind and slow. Reason: a pedestrian may be hidden in front of that vehicle.",
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
      id: "m2ch2_pg8",
      title: "Chapter Wrap-Up: Intersection and Pedestrian Decision Flow",
      content: [
        {
          type: "text",
          value:
            "At intersections, safe driving is about patient sequencing, not speed.",
        },
        {
          type: "heading",
          value: "Practical 5-step flow",
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
