import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m2chapter1: Chapter = {
  id: "m2chapter1",
  title: "Traffic Signs, Signals, Pavement Markings and Work Zones",
  type: "lesson",
  slug: "traffic-signs-signals-pavement-markings-work-zones",
  completed: false,
  lessons: [
    {
      id: "m2ch1_pg1",
      title: "How Road Communication Works",
      content: [
        {
          type: "text",
          value:
            "When you drive, the road is constantly talking to you. Your job is to notice the message early, make one clear decision, and move smoothly.",
        },
        {
          type: "heading",
          value: "🚥 Traffic lights",
        },
        {
          type: "text",
          value:
            "**Situation:** You approach an intersection and the light changes.\n**Action:** Decide immediately whether to stop or continue safely.\n**Reason:** Late decisions cause sudden braking and rear-end crashes.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: waiting too long, then rushing through an unsafe yellow.",
        },
        {
          type: "heading",
          value: "🛑 Traffic signs",
        },
        {
          type: "text",
          value:
            "**Situation:** You see a STOP or YIELD sign.\n**Action:** Follow exactly what the sign requires, even if the road looks empty.\n**Reason:** Other drivers expect predictable behaviour.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: slowing at a stop sign instead of fully stopping.",
        },
        {
          type: "heading",
          value: "🛣️ Pavement markings",
        },
        {
          type: "text",
          value:
            "**Situation:** Lane lines or arrows guide your path.\n**Action:** Stay in the legal lane and follow arrow direction.\n**Reason:** Markings prevent side conflicts where traffic is tight.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: changing lanes across a solid line near intersections.",
        },
        {
          type: "heading",
          value: "🚧 Work-zone controls",
        },
        {
          type: "text",
          value:
            "**Situation:** Cones, temporary signs, or a flagperson change normal flow.\n**Action:** Obey temporary controls first.\n**Reason:** Normal lane patterns may be unsafe or closed.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a clean SVG-style scene of one road showing four cues: signal, stop sign, lane marking, and work-zone cones with labels.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Simple rule: notice early, decide once, move smoothly.",
        },
      ],
    },
    {
      id: "m2ch1_pg2",
      title: "Traffic Signals: Green, Amber, Red, and Right-Turn-on-Red",
      content: [
        {
          type: "heading",
          value: "🟢 Green light",
        },
        {
          type: "text",
          value:
            "**Situation:** Your light is green, but pedestrians are still crossing.\n**Action:** Continue only when your path is clear.\n**Reason:** Green gives permission, not immunity.",
        },
        {
          type: "heading",
          value: "🟡 Amber light",
        },
        {
          type: "text",
          value:
            "**Situation:** The light turns amber as you approach.\n**Action:** If you can stop smoothly, stop; if stopping is unsafe, continue carefully.\n**Reason:** Panic braking or panic acceleration both raise crash risk.",
        },
        {
          type: "heading",
          value: "🔴 Red light",
        },
        {
          type: "text",
          value:
            "**Situation:** Red signal ahead.\n**Action:** Fully stop at the stop line, or before the crosswalk, or before entering the intersection.\n**Reason:** This protects crossing traffic and pedestrians.",
        },
        {
          type: "heading",
          value: "➡️ Right turn on red",
        },
        {
          type: "text",
          value:
            "**Situation:** You want to turn right while the signal is red.\n**Action:** Stop first, check signs, then yield to pedestrians and traffic before turning.\n**Reason:** A right turn on red is optional, never forced.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: treating right-turn-on-red like a rolling merge.",
        },
      ],
    },
    {
      id: "m2ch1_pg3",
      title: "Flashing Signals and School/Special Signal Devices",
      content: [
        {
          type: "heading",
          value: "🔴 Flashing red = stop",
        },
        {
          type: "text",
          value:
            "**Situation:** The intersection has a flashing red instead of a full signal cycle.\n**Action:** Stop completely, then move when safe.\n**Reason:** It works like a stop sign and prevents crossing collisions.",
        },
        {
          type: "heading",
          value: "🟡 Flashing amber = caution",
        },
        {
          type: "text",
          value:
            "**Situation:** You see flashing amber near a crossing.\n**Action:** Reduce speed and be ready to stop.\n**Reason:** Hazards can appear faster than at normal intersections.",
        },
        {
          type: "heading",
          value: "🚸 School and crosswalk beacons",
        },
        {
          type: "text",
          value:
            "**Situation:** A signal is active near a school or marked crossing.\n**Action:** Slow early and yield to people crossing.\n**Reason:** Children and pedestrians are less protected and harder to predict.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a simple SVG card comparing flashing red, flashing amber, and school/crosswalk beacon actions.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: assuming flashing amber means keep speed and continue.",
        },
      ],
    },
    {
      id: "m2ch1_pg4",
      title: "Railway Crossing Signals and Warning Sequence",
      content: [
        {
          type: "text",
          value:
            "Railway crossings need early decisions. Trains cannot stop quickly, so your safety depends on slowing early and waiting when unsure.",
        },
        {
          type: "heading",
          value: "🚆 What to do on approach",
        },
        {
          type: "list",
          items: [
            "Slow down when you see railway warning signs",
            "Look and listen before entering the track area",
            "Stop for flashing lights or bells and wait until warnings stop",
            "Check every track if there are multiple tracks",
          ],
        },
        {
          type: "heading",
          value: "📐 Distance rule in plain language",
        },
        {
          type: "list",
          items: [
            "Minimum stop distance: 5 m (about one car length) from the nearest rail",
            "Maximum stop distance: 15 m (about three car lengths) from the nearest rail",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: moving after one train passes without checking for a second train.",
        },
      ],
    },
    {
      id: "m2ch1_pg5",
      title: "Pavement Markings That Change Decisions",
      content: [
        {
          type: "text",
          value:
            "Painted road markings are legal movement guides. If you ignore them, your vehicle can enter another driver's expected path.",
        },
        {
          type: "heading",
          value: "🟡 Yellow lines (opposite direction traffic)",
        },
        {
          type: "text",
          value:
            "**Situation:** You see yellow centre lines.\n**Action:** Solid yellow means do not pass; broken yellow means pass only when clearly safe.\n**Reason:** Yellow lines protect you from head-on conflicts.",
        },
        {
          type: "heading",
          value: "⚪ White lines (same direction traffic)",
        },
        {
          type: "text",
          value:
            "**Situation:** Multi-lane road with white lines.\n**Action:** Solid white means stay in lane; broken white means lane changes are allowed when safe.\n**Reason:** Lane discipline keeps traffic predictable.",
        },
        {
          type: "heading",
          value: "Crosshatch, stop lines, arrows",
        },
        {
          type: "text",
          value:
            "**Situation:** Marked painted zone before a junction.\n**Action:** Do not drive in crosshatch zones, stop at stop lines, and follow lane arrows exactly.\n**Reason:** These markings separate movements and reduce confusion.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create an SVG legend of solid/broken yellow and white lines, crosshatch, stop line, and lane arrows with plain labels.",
        },
      ],
    },
    {
      id: "m2ch1_pg6",
      title: "Sign Families and Sign Shapes",
      content: [
        {
          type: "text",
          value:
            "You do not need to memorize every sign on day one. First learn sign families and shape shortcuts so you can react faster.",
        },
        {
          type: "heading",
          value: "⚖️ Regulatory signs",
        },
        {
          type: "text",
          value:
            "**Situation:** You see speed limit or no-turn signs.\n**Action:** Follow them as legal rules, not suggestions.\n**Reason:** Regulatory signs define lawful behaviour at that location.",
        },
        {
          type: "heading",
          value: "⚠️ Warning signs",
        },
        {
          type: "text",
          value:
            "**Situation:** A curve or hazard sign appears ahead.\n**Action:** Adjust speed and position early.\n**Reason:** Warning time prevents late steering and hard braking.",
        },
        {
          type: "heading",
          value: "🔷 Shape cues that help beginners",
        },
        {
          type: "list",
          items: [
            "🛑 Octagon → stop",
            "🔻 Triangle → yield",
            "⬛ Vertical rectangle → common regulatory information",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Fast shape recognition gives you extra reaction time.",
        },
      ],
    },
    {
      id: "m2ch1_pg7",
      title: "Work Zones and Temporary Traffic Control",
      content: [
        {
          type: "text",
          value:
            "Work zones are dynamic. The road you used yesterday may not be safe today, so temporary controls must be treated as primary instructions.",
        },
        {
          type: "heading",
          value: "🚧 Typical work-zone situations",
        },
        {
          type: "list",
          items: [
            "Cones shift your lane path → follow the cone path smoothly",
            "Flagperson gives stop/go signals → obey immediately",
            "Temporary speed sign appears → maintain that speed through the full zone",
            "Loose gravel or uneven surface → increase following distance",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: speeding because workers are not visible at that moment.",
        },
      ],
    },
    {
      id: "m2ch1_pg8",
      title: "Chapter Wrap-Up: Build the Road-Language Habit",
      content: [
        {
          type: "text",
          value:
            "You are building a repeatable decision habit, not memorizing random labels.",
        },
        {
          type: "heading",
          value: "🧠 Use this quick check while driving",
        },
        {
          type: "list",
          items: [
            "What controls me now (light/sign)?",
            "What lane movement is legal here (markings)?",
            "Is there a temporary change (work/school/rail)?",
            "Will my next move force someone else to brake suddenly?",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "If your move is legal, smooth, and predictable, you made a defensive decision.",
        },
      ],
    },
  ],
};