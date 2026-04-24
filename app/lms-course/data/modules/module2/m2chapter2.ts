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
            "Defensive driving starts before the car moves. Safety inside the vehicle is not a side topic, it is the first legal and practical duty of the driver.",
        },
        {
          type: "heading",
          value: "👶 Seat belts and child restraints in real life",
        },
        {
          type: "text",
          value:
            "**Situation:** You are about to start a short trip.\n**Action:** Make sure everyone is properly restrained before moving.\n**Reason:** Many serious injuries happen close to home at low to moderate speed, because people relax too early and get lazy with the belt. The road does not care that the trip is short.",
        },
        {
          type: "list",
          items: [
            "Passengers 16+ should wear seat belts whenever available",
            "The driver is responsible for passengers under 16 being properly restrained",
            "Children need approved restraints matched to size and age",
            "Never let a child travel on an adult lap",
            "Never put two people in one seat belt",
          ],
        },
        {
          type: "heading",
          value: "🧷 Proper fit matters, not just wearing it",
        },
        {
          type: "text",
          value:
            "A belt worn badly is a false sense of security. The handbook says lap belts should sit snugly and low across the hips, shoulder belts should never be worn without a lap belt, and there should be about a fist’s width between the chest and the belt. Shoulder belts are not recommended for a child or adult under 140 cm in height.",
        },
        {
          type: "heading",
          value: "🪑 Child restraint logic",
        },
        {
          type: "list",
          items: [
            "Infants travel rear-facing in an approved child restraint system",
            "Toddlers use a proper child restraint seat matched to weight and standard",
            "Children too small for the adult belt system need booster support",
            "Children under 12 should ride in the back seat when possible",
          ],
        },
        {
          type: "heading",
          value: "🛡️ Air bags are not a substitute for restraint",
        },
        {
          type: "text",
          value:
            "Air bags protect the head and upper body, but they do not replace seat belts. They deploy in frontal impacts, not in rear-end collisions, side impacts, or rollovers. That means the seat belt is the body restraint and the air bag is the impact cushion. One without the other is weaker than people like to pretend.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: treating a seat belt like a decoration and the air bag like a magic spell. Neither works that way.",
        },
      ],
    },
    {
      id: "m2ch2_pg2",
      title: "Right-of-Way Fundamentals: Intersections and Shared Space",
      content: [
        {
          type: "text",
          value:
            "Right-of-way decides who should move first, but safe driving still requires scanning for hazards before you go. Legal priority is not the same thing as physical safety.",
        },
        {
          type: "heading",
          value: "🤝 Same-time arrival at a 4-way stop",
        },
        {
          type: "text",
          value:
            "**Situation:** You and another car arrive at the same time.\n**Action:** If the other vehicle is on your right, let them go first.\n**Reason:** Shared expectations reduce intersection confusion and make the scene predictable.",
        },
        {
          type: "heading",
          value: "🔍 When visibility is poor",
        },
        {
          type: "text",
          value:
            "**Situation:** Parked vehicles, curves, snowbanks, or darkness block your view.\n**Action:** Slow down, scan longer, and enter only when you can clearly judge the gap.\n**Reason:** Priority means little if you cannot actually see the conflict.",
        },
        {
          type: "heading",
          value: "🛣️ Uncontrolled intersection mindset",
        },
        {
          type: "text",
          value:
            "At open intersections, nobody gets to act like the main character. You must read the scene, predict the other drivers, and avoid forcing a decision on them. The safest driver is not the boldest one, it is the one who leaves everyone else enough room to breathe.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: assuming you win because you reached the intersection first. That is not how collision law or physics works.",
        },
      ],
    },
    {
      id: "m2ch2_pg3",
      title: "Stop Signs, Yield Signs, and Left Turns",
      content: [
        {
          type: "heading",
          value: "🛑 Stop sign",
        },
        {
          type: "text",
          value:
            "**Situation:** Quiet neighbourhood stop sign with no obvious traffic.\n**Action:** Stop completely at the correct point, then continue only when safe.\n**Reason:** Full stops create predictable movement for all users, especially where visibility is limited.",
        },
        {
          type: "list",
          items: [
            "In a city or town, stop before the crosswalk, stop line, or nearest point to the intersection",
            "In rural areas, stop before entering the roadway",
            "Look carefully in both directions, then look again",
            "Yield to traffic that is close enough to create danger",
            "Rolling a stop sign is illegal",
          ],
        },
        {
          type: "heading",
          value: "🔻 Yield sign",
        },
        {
          type: "text",
          value:
            "**Situation:** You approach a merge, ramp, or controlled entry with a yield sign.\n**Action:** Slow enough to stop, then enter only when a safe gap exists.\n**Reason:** Yield means you are the guest. If the host is already busy, wait outside.",
        },
        {
          type: "heading",
          value: "⬅️ Left turn",
        },
        {
          type: "text",
          value:
            "**Situation:** You turn left across oncoming lanes.\n**Action:** Signal, choose the proper lane, and yield to vehicles and pedestrians within, or close enough to, the intersection.\n**Reason:** Left turns combine multiple conflict points at once, which is why they are high-risk if rushed.",
        },
        {
          type: "heading",
          value: "🏘️ Driveways, lanes, and alleys",
        },
        {
          type: "text",
          value:
            "**Situation:** You are entering a road from a driveway, private lane, or alley.\n**Action:** Stop, check both directions, check sidewalks and crossing paths, and enter only when no one else must brake or swerve.\n**Reason:** You are joining active traffic from a lower-priority position.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: entering because the roadway looks empty for one second. The hidden hazard is usually the one that costs the most.",
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
            "**Situation:** You hear a siren and see flashing lights coming toward you.\n**Action:** Clear the intersection first, then pull as close as possible to the right-hand curb or edge of the roadway and stop until the emergency vehicle has passed.\n**Reason:** Every second counts for emergency responders, and a blocked road can cost someone their life.",
        },
        {
          type: "list",
          items: [
            "Do not stop inside the intersection if you can clear it safely first",
            "On a one-way street, pull to the right or left as appropriate",
            "Remain stopped until the emergency vehicle has fully passed",
            "Never try to race it, follow it, or “help” by moving unpredictably",
          ],
        },
        {
          type: "heading",
          value: "⚰️ Funeral processions",
        },
        {
          type: "text",
          value:
            "**Situation:** A long line of vehicles is travelling together as a procession.\n**Action:** Do not cut through the line. Reduce speed, stay out of the procession, and wait until it has passed.\n**Reason:** Processions are meant to stay together, and splitting them creates confusion and risk at intersections.",
        },
        {
          type: "list",
          items: [
            "Vehicles in the procession may proceed through a red light or stop sign only when directed by police",
            "Approaching traffic must reduce speed to half the posted limit",
            "A driver must not pass through the procession from behind",
            "Funeral vehicles on PEI may display purple flashing lights",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: treating a procession like random traffic because your own light is green. A green light does not make you a bulldozer.",
        },
      ],
    },
    {
      id: "m2ch2_pg5",
      title: "Pedestrian Rights at Signals and Crossings",
      content: [
        {
          type: "image",
          src: "/module2/m2ch2pg5.png",
          alt: "Pedestrian crossing and signal safety comparison card",
          layout: "threeQuarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Pedestrians are less protected than vehicle occupants. At crossings, your lane priority is secondary to pedestrian safety. The road is shared space, not a demolition derby with turn signals.",
        },
        {
          type: "heading",
          value: "🚦 Signalized crossing",
        },
        {
          type: "text",
          value:
            "**Situation:** You want to turn right and a pedestrian has a walk signal.\n**Action:** Wait until the pedestrian has safely cleared your path.\n**Reason:** Turning across an active crossing is a common collision pattern, especially when drivers fixate on traffic and ignore the person directly in front of them.",
        },
        {
          type: "heading",
          value: "🟢 Green signal for pedestrians",
        },
        {
          type: "text",
          value:
            "When a pedestrian enters the crosswalk with a walk or green signal, the pedestrian has the right-of-way over vehicles. A pedestrian must still avoid stepping into the path of a vehicle that cannot safely yield, but the driver’s duty is to wait until the crossing is safe and complete.",
        },
        {
          type: "heading",
          value: "🟡 Amber or wait signal",
        },
        {
          type: "text",
          value:
            "When the amber light or wait signal appears, pedestrians should not start to cross. If they are already in the intersection, they should continue to the nearest sidewalk. The driver must not proceed until the pedestrian is safely across.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: creeping forward while someone is still in the crosswalk because you think you “have space.” Space is not the standard. Safety is.",
        },
      ],
    },
    {
      id: "m2ch2_pg6",
      title: "Flashing Red, Flashing Amber, and No-Signal Intersections",
      content: [
        {
          type: "heading",
          value: "🔴 Flashing red light",
        },
        {
          type: "text",
          value:
            "**Situation:** You approach an intersection controlled by flashing red.\n**Action:** Come to a full stop and remain stopped until it is safe to proceed.\n**Reason:** Flashing red acts like a stop sign and gives pedestrians the right-of-way over vehicles.",
        },
        {
          type: "heading",
          value: "🟡 Flashing amber light",
        },
        {
          type: "text",
          value:
            "**Situation:** You approach an intersection controlled by flashing amber.\n**Action:** Enter with caution and yield to pedestrians within the crosswalks.\n**Reason:** Drivers are not required to come to a full stop, but caution is still mandatory because pedestrian movement may be unpredictable.",
        },
        {
          type: "heading",
          value: "🚸 Intersections with no traffic signals",
        },
        {
          type: "text",
          value:
            "Pedestrians have the right-of-way within a marked or unmarked crosswalk at an intersection with a stop sign or yield sign, and at an open intersection. Drivers must yield. Pedestrians should still exercise caution because not every driver is awake enough to deserve trust.",
        },
        {
          type: "heading",
          value: "🧠 Why this section matters",
        },
        {
          type: "text",
          value:
            "Drivers often assume that an intersection without lights is somehow less regulated. The opposite is true. The less controlled the junction, the more carefully you must read the legal order of movement.",
        },
      ],
    },
    {
      id: "m2ch2_pg7",
      title: "Vehicles Stopped for Pedestrians and the No-Pass Rule",
      content: [
        {
          type: "text",
          value:
            "One of the frequent causes of pedestrian collisions is one vehicle passing another that is stopped for pedestrians. That is why the law requires extra caution around stopped traffic at crosswalks.",
        },
        {
          type: "heading",
          value: "⛔ No-pass rule",
        },
        {
          type: "text",
          value:
            "**Situation:** A vehicle ahead has stopped for a pedestrian.\n**Action:** Do not pass it from behind.\n**Reason:** The stopped vehicle may be hiding a pedestrian in front of it, and a person on foot can emerge into your lane unexpectedly.",
        },
        {
          type: "list",
          items: [
            "Stop far enough back to give other drivers a clear view of the crosswalk",
            "If you are approaching from the opposite direction, you must also stop",
            "Slow down before you attempt to pass any vehicle stopped or slowing at an intersection",
            "Never assume the lane next to you is clear just because you cannot see a pedestrian",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: passing because the lane beside the stopped vehicle looks open for half a second. The half second is exactly where crashes breed.",
        },
      ],
    },
    {
      id: "m2ch2_pg8",
      title: "Advice to Pedestrians and Drivers",
      content: [
        {
          type: "heading",
          value: "🚶 Advice to pedestrians",
        },
        {
          type: "list",
          items: [
            "Cross at intersections and stay within the crosswalk whenever possible",
            "Never step into the roadway from behind parked vehicles or from the rear of a stopped bus",
            "Look for turning vehicles before crossing",
            "Wear bright or reflective clothing at night so drivers can see you earlier",
            "On highways, walk on the left facing traffic whenever possible",
            "Use sounds and signals at accessible crosswalks if available",
          ],
        },
        {
          type: "heading",
          value: "🚗 Advice to drivers",
        },
        {
          type: "list",
          items: [
            "Exercise care for pedestrians wherever they may be crossing",
            "Slow down in residential areas and watch for children",
            "Be ready to stop for children, confused persons, or anyone who may act unpredictably",
            "Always stop for pedestrians within crosswalks",
            "Never pass a vehicle stopped for a pedestrian",
            "Give extra caution to a blind or partially blind person carrying a white cane or accompanied by a seeing-eye dog",
          ],
        },
        {
          type: "text",
          value:
            "A driver should assume that vulnerability is the rule, not the exception. The person on foot has less mass, less protection, and less margin for your mistake.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Good road manners are not soft. They are tactical. Courtesy prevents conflict before it becomes metal-on-bone arithmetic.",
        },
      ],
    },
    {
      id: "m2ch2_pg9",
      title: "Chapter Wrap-Up: Intersection and Pedestrian Decision Flow",
      content: [
        {
          type: "text",
          value:
            "At intersections, safe driving is about patient sequencing, not speed. The legal rule tells you who goes first, but the safety rule tells you whether you should go at all.",
        },
        {
          type: "heading",
          value: "🔄 Practical 6-step flow",
        },
        {
          type: "list",
          items: [
            "1) Identify the control, stop, yield, signal, flashing signal, or open intersection",
            "2) Stop at the correct point",
            "3) Scan for vehicles, pedestrians, cyclists, and hidden road users",
            "4) Confirm who has priority and who is vulnerable",
            "5) Check whether your move forces anyone else to brake or swerve",
            "6) Proceed only when your action is legal, clear, and predictable",
          ],
        },
        {
          type: "heading",
          value: "🧠 Final test for your brain",
        },
        {
          type: "list",
          items: [
            "Is there a pedestrian anywhere near my path?",
            "Could another driver be hiding someone from my view?",
            "Am I entering a space that belongs to someone else right now?",
            "Would my move still make sense if traffic suddenly changed?",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "If your move is legal, smooth, and predictable for others, it is usually the correct defensive move.",
        },
      ],
    },
  ],
};