import type { Chapter } from "./chapter1";

export const chapter2: Chapter = {
  id: "chapter2",
  title: "Documents, Eligibility, and Test-Day Readiness",
  type: "lesson",
  slug: "documents-eligibility-test-day-readiness",
  completed: false,
  lessons: [
    {
      id: "pg1",
      title: "Eligibility and Required Documents",
      content: [
        {
          type: "image",
          src: "/module1/filling permit form.png",
          alt: "Licence application form and identity documents",
          layout: "half",
        },
        {
          type: "heading",
          value: "Check Eligibility First",
        },
        {
          type: "text",
          value:
            "Before you think about tests or driving, eligibility is the first gate. This step ensures that you are legally allowed to begin the process. Skipping this check leads to wasted time, rejected applications, or delays later.",
        },
        {
          type: "table",
          headers: ["Requirement", "What to Confirm"],
          rows: [
            ["Minimum age", "16"],
            ["Driving status", "Your driving privilege is not under suspension"],
            ["Under 18", "Parent or legal guardian consent is required"],
          ],
        },
        {
          type: "heading",
          value: "Why Eligibility Exists",
        },
        {
          type: "text",
          value:
            "Eligibility rules are not random. They exist to ensure that drivers entering the system meet basic legal and maturity requirements. For example, age requirements are tied to decision-making ability and risk awareness, not just time.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Think of eligibility as a filter. It prevents unsafe or unprepared drivers from entering the system too early.",
        },
        {
          type: "heading",
          value: "Bring the Right Documents",
        },
        {
          type: "text",
          value:
            "Documents prove two things: who you are and where you live. Without both, the system cannot verify your identity or assign legal responsibility.",
        },
        {
          type: "table",
          headers: ["Document group", "What to bring"],
          rows: [
            ["Primary identity (one)", "Birth certificate, passport, or immigration papers"],
            [
              "If previous address was outside Canada",
              "Canadian Immigration Identification Record of Entry form and passport",
            ],
            [
              "PEI residency (two pieces)",
              "Utility bill, lease agreement, employment letter/pay stub, government mail, bank cheque, mortgage document, or credit card/bank statement with current PEI address",
            ],
          ],
        },
        {
          type: "heading",
          value: "Common Mistakes People Make",
        },
        {
          type: "list",
          items: [
            "Bringing documents with outdated addresses",
            "Forgetting second proof of residency",
            "Assuming digital copies are accepted when originals are required",
            "Not checking document validity before test day",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Most test-day delays come from missing or incorrect paperwork. Verify your documents before booking and again before test day.",
        },
      ],
    },
    {
      id: "pg2",
      title: "Knowledge Test, Vision Test, and Novice Course",
      content: [
        {
          type: "heading",
          value: "Why These Steps Come First",
        },
        {
          type: "text",
          value:
            "Before you are trusted on the road, the system checks three things: what you know, what you can see, and whether you understand risk. These checks prevent unsafe drivers from reaching real traffic situations too early.",
        },
        {
          type: "image",
          src: "/module1/m1ch2pg2.png",
          alt: "Knowledge Test, Vision Test, and Novice Driver Course sequence",
          layout: "threeQuarter",
          align: "center",
        },
        {
          type: "heading",
          value: "What Each Requirement Checks",
        },
        {
          type: "table",
          headers: ["Requirement", "What it checks", "Notes"],
          rows: [
            [
              "Knowledge test",
              "Road rules, safe driving practices, and sign recognition",
              "Written or oral format; if unsuccessful, you can rebook",
            ],
            [
              "Vision test",
              "Minimum visual standards for safe driving decisions",
              "May include color vision, distance judgment, and field-of-vision checks",
            ],
            [
              "Novice Driver Course",
              "Foundational risk and compliance knowledge before road testing",
              "Required before road test eligibility; usually about 5 hours over two sessions",
            ],
          ],
        },
        {
          type: "heading",
          value: "Why Vision Is Critical",
        },
        {
          type: "text",
          value:
            "Driving is a visual task. You make decisions based on distance, speed, and movement. If your vision is limited, your reaction time and judgment are affected, even if your driving skills are good.",
        },
        {
          type: "heading",
          value: "Why the Knowledge Test Matters",
        },
        {
          type: "text",
          value:
            "Rules reduce chaos. Without shared rules, every driver would behave differently, making roads unpredictable and dangerous. The knowledge test ensures you operate using the same system as everyone else.",
        },
        {
          type: "heading",
          value: "Extra Test-Day Readiness Notes",
        },
        {
          type: "list",
          items: [
            "If reading is difficult, you may request an oral version of the knowledge test",
            "If you do not pass the knowledge test, you can book another attempt",
            "Vision testing may assess acuity, field of vision, and color recognition",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "These steps are not barriers. They are filters that ensure only prepared drivers move forward.",
        },
      ],
    },
    {
      id: "pg3",
      title: "Road Test Day Requirements and Vehicle Checks",
      content: [
        {
          type: "heading",
          value: "Before the Examiner Starts",
        },
        {
          type: "text",
          value:
            "The road test is not just about driving. It is also about preparation. Examiners assess whether you can meet basic legal and safety requirements before even starting the vehicle.",
        },
        {
          type: "table",
          headers: ["Requirement", "Details"],
          rows: [
            ["Vehicle", "You provide the vehicle and it must pass safety/equipment checks"],
            ["Accompaniment", "You must arrive with a licensed driver"],
            ["Documents", "Bring proof of insurance (pink card) and valid registration"],
            ["Passengers", "Additional passengers are not permitted during the road test"],
          ],
        },
        {
          type: "heading",
          value: "Vehicle Safety Checks (Examples)",
        },
        {
          type: "list",
          items: [
            "Valid licence plates and inspection sticker",
            "Lights, horn, mirrors, and speedometer",
            "Seat belts, windshield, wipers, and window glass",
            "Brakes, tires, and muffler condition",
          ],
        },
        {
          type: "image",
          src: "/module1/m1ch2pg3.png",
          alt: "Vehicle inspection overview",
          layout: "threeQuarter",
          align: "center",
        },
        {
          type: "heading",
          value: "Why Vehicle Condition Matters",
        },
        {
          type: "text",
          value:
            "Even a perfect driver cannot compensate for a faulty vehicle. Brake failure, poor visibility, or broken signals increase risk immediately. The test ensures both the driver and the machine are safe.",
        },
        {
          type: "heading",
          value: "What the Examiner Evaluates",
        },
        {
          type: "text",
          value:
            "The road test checks safe operation in real traffic. This includes starting, stopping, turning, parking, obeying signs, handling intersections, and reacting to hazards.",
        },
        {
          type: "heading",
          value: "Common Failure Reasons",
        },
        {
          type: "list",
          items: [
            "Not checking mirrors regularly",
            "Rolling through stop signs",
            "Poor lane positioning",
            "Late or incorrect decisions",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "If your vehicle fails safety checks, the test will not begin. Preparation matters as much as driving skill.",
        },
      ],
    },
    {
      id: "pg4",
      title: "Renewals, Updates, and Duplicate Licences",
      content: [
        {
          type: "heading",
          value: "Validity Timelines",
        },
        {
          type: "table",
          headers: ["Item", "Rule"],
          rows: [
            ["Driver licence expiry", "Expires at midnight on your birthday"],
            ["Class 7 permit validity", "Valid for two years from issue date"],
          ],
        },
        {
          type: "heading",
          value: "Why Timelines Exist",
        },
        {
          type: "text",
          value:
            "Licences are time-limited to ensure that driver information stays accurate and that drivers remain accountable under current rules and standards.",
        },
        {
          type: "heading",
          value: "Update Deadlines",
        },
        {
          type: "table",
          headers: ["Update", "Deadline", "Risk if ignored"],
          rows: [
            ["Name change endorsement", "Within 10 days", "Can be treated as non-compliance"],
            ["Address change reporting", "Within 30 days", "Offence under the Highway Traffic Act"],
          ],
        },
        {
          type: "heading",
          value: "If Your Licence Is Lost or Unreadable",
        },
        {
          type: "list",
          items: [
            "Apply for a duplicate licence",
            "Pay the applicable fee",
            "Bring licence details if available or a birth certificate",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Staying licensed is an ongoing responsibility, not a one-time step.",
        },
      ],
    },
    {
      id: "pg5",
      title: "Out-of-Province and Exchange Basics",
      content: [
        {
          type: "heading",
          value: "Driving in PEI with Another Licence",
        },
        {
          type: "text",
          value:
            "If you are 16 or older with a valid licence from elsewhere, you may drive in PEI for up to 120 days, depending on your licence class and conditions.",
        },
        {
          type: "image",
          src: "/module1/m1ch2pg5.png",
          alt: "Licence exchange decision path",
          layout: "half",
        },
        {
          type: "heading",
          value: "Exchange Pathway Summary",
        },
        {
          type: "table",
          headers: ["Current licence source", "Typical pathway"],
          rows: [
            ["NS/NB Class 5 (valid)", "Exchange without major testing"],
            ["Other Canadian or U.S.", "Often exchangeable if valid and recent"],
            ["Most foreign licences", "Testing required"],
          ],
        },
        {
          type: "heading",
          value: "Why Exchange Rules Differ",
        },
        {
          type: "text",
          value:
            "Different regions have different training standards. Exchange rules exist to ensure that all drivers meet PEI safety expectations before being allowed full driving privileges.",
        },
        {
          type: "heading",
          value: "Class 7 Permit Exchange",
        },
        {
          type: "list",
          items: [
            "Valid Canadian Class 7 permits may be exchangeable",
            "PEI residency is required",
            "Additional requirements may still apply",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Always confirm your specific case. Assumptions about exchange rules can lead to delays or denied applications.",
        },
      ],
    },
  ],
};