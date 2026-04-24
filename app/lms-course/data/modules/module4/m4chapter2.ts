import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m4chapter2: Chapter = {
  id: "m4chapter2",
  title: "Legal Consequences: Demerit Points, Penalties, and Interlocks",
  type: "lesson",
  slug: "legal-consequences-demerit-points-penalties-and-interlocks",
  completed: false,
  lessons: [
    {
      id: "m4ch2_pg1",
      title: "The Demerit Point System",
      content: [
        {
          type: "heading",
          value: "📉 How Demerit Points Work",
        },
        {
          type: "text",
          value:
            "The Demerit Point System tracks recurring traffic offences and measures how seriously a driver is ignoring the Rules of the Road. It is not random punishment. It is a graduated system that becomes more serious as the driver’s behaviour shows a pattern of risk.",
        },
        {
          type: "text",
          value:
            "For experienced drivers, demerit points are accumulated over a two-year period. When the total reaches the threshold, the response escalates from a warning to an interview and then to suspension. The point system exists to identify drivers whose habits consistently endanger themselves and others.",
        },
        {
          type: "heading",
          value: "Key Thresholds for Experienced Drivers",
        },
        {
          type: "list",
          items: [
            "6, 7, or 8 points, warning letter",
            "9, 10, or 11 points, driver interview",
            "12 or more points within two years, three-month suspension",
            "After suspension, a one-year probation period applies",
          ],
        },
        {
          type: "text",
          value:
            "During probation, a conviction involving a moving vehicle or improper parking can trigger another three-month suspension. So the system is not just asking, “Did you stop being reckless?” It is asking, “Did you actually change?”",
        },
        {
          type: "heading",
          value: "Examples of Point Values",
        },
        {
          type: "table",
          headers: ["Offence", "Points"],
          rows: [
            ["Criminal negligence involving a vehicle", "12"],
            ["Motor manslaughter", "12"],
            ["Failing to stop at the scene of an accident", "12"],
            ["Dangerous driving", "12"],
            ["Obtaining a licence by misrepresentation", "12"],
            ["Failing to stop for a school bus loading or unloading children", "8"],
            ["Driving while suspended or disqualified", "6"],
            ["Speeding 30 km/h or more over the limit", "6"],
            ["Racing", "5"],
            ["Driving imprudently or without due care and attention", "5"],
            ["Failing to wear a seat belt", "3"],
            ["Failing to report an accident", "3"],
            ["Speeding under 30 km/h over the limit", "3"],
            ["Improper passing", "3"],
            [
              "Any offence involving a vehicle in motion, improper parking, or unsafe/insufficient equipment",
              "3",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: treating three points as small. Small mistakes become large when they keep happening. The system is watching the pattern, not your excuses.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** An experienced driver has 7 demerit points on their record and continues to get more traffic tickets. What happens next if the point total keeps rising?",
        },
        {
          type: "text",
          value:
            "**Answer:** A warning stage is followed by a driver interview, and if the total reaches 12 points within two years, the licence is suspended for three months.",
        },
        {
          type: "text",
          value:
            "Why: The point system is designed to interrupt a dangerous pattern before it turns into a crash pattern. The higher the total, the less the system trusts the driver to self-correct.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A driving record graphic showing a gauge that goes from green (0 points) to red (12 points), with the suspension zone highlighted at the red end.",
        },
      ],
    },
    {
      id: "m4ch2_pg2",
      title: "GDL Penalties and Zero Tolerance",
      content: [
        {
          type: "heading",
          value: "📋 Stricter Rules for New Drivers",
        },
        {
          type: "text",
          value:
            "New drivers are held to stricter consequences because they are still building judgment. In the Graduated Driver Licensing program, the law lowers the tolerance threshold so that bad habits can be corrected early, before they become permanent habits.",
        },
        {
          type: "text",
          value:
            "The handbook makes clear that newly licensed drivers are still in a probationary learning stage. That means the consequences for demerit points, seat-belt offences, passenger limits, and alcohol use are tighter than they are for experienced drivers.",
        },
        {
          type: "heading",
          value: "GDL Penalties and Restrictions",
        },
        {
          type: "list",
          items: [
            "Stage 2, warning at 3 to 5 points, suspension at 6 points",
            "Stage 3, warning at 5 to 8 points, suspension at 9 points",
            "Seat-belt conviction while in GDL can result in suspension",
            "If passengers fail to wear seat belts, the driver may be fined",
            "Passenger restrictions apply during the graduated stages",
          ],
        },
        {
          type: "text",
          value:
            "There is also a zero-tolerance alcohol rule for new drivers under 19 and for new drivers who have held a licence for less than three years, regardless of age. A reading above zero can trigger both a roadside suspension and an administrative prohibition.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Zero BAC for new drivers is not a negotiation zone. It is a hard line. One drink, one suspension, one very bad day.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** A newly licensed driver under the zero-tolerance rule has had one drink and wants to drive home. What is the correct decision?",
        },
        {
          type: "text",
          value:
            "**Answer:** Do not drive at all.",
        },
        {
          type: "text",
          value:
            "Why: New drivers must have zero BAC. The risk is legal, practical, and safety-related. The law does not care that the driver “feels fine.”",
        },
        {
          type: "heading",
          value: "Passenger and Seat-Belt Consequences",
        },
        {
          type: "text",
          value:
            "The handbook also makes seat-belt compliance part of the legal discipline around GDL. If a new driver or passenger fails to follow seat-belt rules, the result is not just a safety issue. It becomes a licensing issue too.",
        },
      ],
    },
    {
      id: "m4ch2_pg3",
      title: "Criminal Code Offences and Roadside Consequences",
      content: [
        {
          type: "heading",
          value: "⚖️ High-Risk Offences Carry Heavy Consequences",
        },
        {
          type: "text",
          value:
            "Some offences are treated more seriously because they create a direct threat to life. Criminal negligence, motor manslaughter, failing to stop at the scene of an accident, and dangerous driving are not ordinary traffic problems. They are criminal matters with severe licensing consequences.",
        },
        {
          type: "text",
          value:
            "Impaired driving, refusing a breath test or blood sample, refusing an approved roadside screening device, and blowing over the legal limit can all trigger major licence cancellations. The system is built to remove dangerous drivers quickly, not gently.",
        },
        {
          type: "heading",
          value: "Key Consequences",
        },
        {
          type: "table",
          headers: ["Offence Type", "Consequence"],
          rows: [
            ["Criminal negligence / motor manslaughter / dangerous driving / failing to stop at scene", "12-month suspension under the demerit regulations"],
            ["Impaired driving or refusal offences", "One-year cancellation for first offence"],
            ["Second impaired driving offence", "Three-year cancellation"],
            ["Subsequent impaired driving offence", "Five-year cancellation"],
            ["WARN or FAIL roadside breath result", "24-hour roadside suspension"],
          ],
        },
        {
          type: "text",
          value:
            "A driver who is already suspended or cancelled and then drives anyway faces even harsher consequences. Driving while disqualified results in an additional six-month cancellation applied consecutively to the existing sanction.",
        },
        {
          type: "callout",
          variant: "danger",
          value:
            "Common mistake: thinking a short trip during suspension is a minor risk. It is not. It is a separate offence and often a bigger problem than the original one.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** A driver gets a roadside screening result of WARN or FAIL. What happens next?",
        },
        {
          type: "text",
          value:
            "**Answer:** The officer requests the licence and the driver’s privilege is suspended for 24 hours.",
        },
        {
          type: "text",
          value:
            "Why: The roadside suspension is immediate. The law does not wait for a lecture, a promise, or a spiritual awakening.",
        },
      ],
    },
    {
      id: "m4ch2_pg4",
      title: "Vehicle Impoundment and Driving While Disqualified",
      content: [
        {
          type: "heading",
          value: "🚔 When the Vehicle Itself Becomes Part of the Penalty",
        },
        {
          type: "text",
          value:
            "Some penalties are aimed not only at the driver, but at preventing the vehicle from being used as part of the offence again. Vehicle impoundment can be used when a person operates, or has care or control of, a vehicle while prohibited from driving and has a recent history of driving while suspended or disqualified.",
        },
        {
          type: "text",
          value:
            "For a first offence, impoundment can last 30 days. For a subsequent offence, it can extend up to 60 days. This is a blunt tool, and that is the point. If a person keeps ignoring suspension, the vehicle stops being a privilege and starts becoming evidence.",
        },
        {
          type: "heading",
          value: "Driving While Disqualified",
        },
        {
          type: "text",
          value:
            "A conviction for driving while disqualified brings a six-month cancellation that is added on top of the existing suspension, cancellation, or disqualification. That means the penalty is not replaced. It is stacked.",
        },
        {
          type: "text",
          value:
            "This is one of the clearest signals in the handbook that the province treats defiance more seriously than a single lapse. Repeated disobedience is what moves the punishment upward.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** A suspended driver borrows a friend’s car anyway and drives to work. What is the likely legal consequence?",
        },
        {
          type: "text",
          value:
            "**Answer:** The driver can face further cancellation, and the vehicle may also be impounded if the conditions for impoundment are met.",
        },
        {
          type: "text",
          value:
            "Why: Suspension is a legal stop sign. Ignoring it turns the offence into a larger one and exposes both the driver and the vehicle to stronger enforcement.",
        },
      ],
    },
    {
      id: "m4ch2_pg5",
      title: "The Ignition Interlock Program",
      content: [
        {
          type: "heading",
          value: "🔑 Regaining Driving Privilege Under Supervision",
        },
        {
          type: "text",
          value:
            "The Ignition Interlock Program allows some drivers to regain limited driving privileges after an impaired-driving conviction. The purpose is not to reward bad behaviour. It is to let the person drive only under strict alcohol-monitoring conditions while they address the underlying problem.",
        },
        {
          type: "text",
          value:
            "The device works by requiring a breath sample before the vehicle will start. If the recorded alcohol level is above the preset limit, the vehicle stays locked. Once the car is moving, random breath samples are required during the trip.",
        },
        {
          type: "heading",
          value: "How the System Works",
        },
        {
          type: "list",
          items: [
            "Breath sample required before the vehicle can start",
            "Random breath samples required while driving",
            "If the sample is missed or exceeds the limit, the device records the event and triggers alarms",
            "The driver must return for service and calibration at least every 60 days",
            "A built-in data logger records program activity",
          ],
        },
        {
          type: "text",
          value:
            "If the device is not serviced on time, it can lock itself and the vehicle may not start. Repeated failures can lead Highway Safety to remove the device and restore the suspension period.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "The interlock is not forgiveness. It is supervision with a steering wheel.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** A driver on the interlock program has been avoiding service appointments and ignoring device warnings. What can happen next?",
        },
        {
          type: "text",
          value:
            "**Answer:** The device can lock out the vehicle, the violations can be recorded, and the suspension can be reinstated.",
        },
        {
          type: "text",
          value:
            "Why: The whole point of the program is compliance and monitoring. If the driver treats it like a costume, the province can take the costume back.",
        },
      ],
    },
    {
      id: "m4ch2_pg6",
      title: "Driver Rehabilitation, Defensive Driving, and Improvement Courses",
      content: [
        {
          type: "heading",
          value: "📚 What Happens After the Punishment?",
        },
        {
          type: "text",
          value:
            "The handbook does not stop at punishment. It also includes courses designed to change behaviour, improve judgment, and reduce repeat offences. These are not decorative certificates. They are corrective tools.",
        },
        {
          type: "heading",
          value: "Driver Rehabilitation Course",
        },
        {
          type: "text",
          value:
            "This course is for drivers convicted of impaired driving, refusing the alcohol roadside screening test, or failing the breathalyzer. Attendance and successful completion are required before reinstatement can happen.",
        },
        {
          type: "heading",
          value: "Defensive Driving Course",
        },
        {
          type: "text",
          value:
            "The defensive driving course is for drivers who want to improve their knowledge, skills, and attitude, and in some cases reduce demerit-point pressure. The handbook says drivers with up to 11 points may be awarded merit points after successful completion.",
        },
        {
          type: "heading",
          value: "Driver Improvement Course",
        },
        {
          type: "text",
          value:
            "Drivers suspended under the demerit system must complete the Driver Improvement Course within six months after reinstatement. The course focuses on attitude, responsibility, and obeying the law.",
        },
        {
          type: "list",
          items: [
            "Driver Rehabilitation Course, impaired-driving related",
            "Defensive Driving Course, knowledge and attitude improvement",
            "Driver Improvement Course, required after demerit suspension",
          ],
        },
        {
          type: "text",
          value:
            "These courses exist because the goal is not just to punish the bad decision. It is to make the next decision less stupid.",
        },
      ],
    },
    {
      id: "m4ch2_pg7",
      title: "Chapter Summary: The Law Watches Patterns",
      content: [
        {
          type: "text",
          value:
            "The legal system is not trying to catch one isolated mistake. It watches patterns: repeated speeding, repeated disregard for seat belts, repeated alcohol use, repeated suspension offences, and repeated refusal to cooperate.",
        },
        {
          type: "heading",
          value: "Core Logic",
        },
        {
          type: "list",
          items: [
            "Small offences add up",
            "New drivers are held to tighter limits",
            "Serious offences trigger immediate and heavier consequences",
            "Refusing or ignoring the law often makes the penalty worse",
            "Rehabilitation and interlock programs are corrective, not decorative",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "The road rewards consistency, not confidence theatre. The law does the same, just less politely.",
        },
      ],
    },
  ],
};