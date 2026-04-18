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
          value: "Bring the Right Documents",
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
          type: "callout",
          variant: "warning",
          value:
            "Most test-day delays come from missing paperwork. Verify your document set before booking and before test day.",
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
            "Before road testing, PEI confirms that you understand rules, meet vision standards, and complete required safety learning.",
        },
        {
          type: "image",
          src: "/module1/ch1pg3.png",
          alt: "Knowledge Test, Vision Test, and Novice Driver Course sequence",
          layout: "half",
          align: "left",
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
          value: "Extra Test-Day Readiness Notes",
        },
        {
          type: "list",
          items: [
            "If reading is difficult, you may request an oral version of the knowledge test",
            "If you do not pass the knowledge test, you can book another attempt for a later date",
            "Vision testing may assess visual acuity, field of vision, and color recognition",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "These steps are not random barriers. They confirm that you can understand the rules, see properly, and enter the road test with the right preparation.",
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
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a road-test readiness card showing Vehicle, Documents, and Safety Checkpoints.",
        },
        {
          type: "heading",
          value: "What the Examiner Evaluates",
        },
        {
          type: "text",
          value:
            "The road test checks safe operation in real traffic: starting, stopping, turning, parking, signal/sign compliance, intersection handling, and hazard awareness.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "If your vehicle fails required safety or legal checks, the road test will not proceed.",
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
            "Bring licence details if available, or a birth certificate if details are missing",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Staying licensed is ongoing. Safe driving plus on-time admin updates keeps you legally compliant.",
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
            "If you are 16 or older with a valid licence from elsewhere, the handbook states you may drive in PEI for up to 120 days, subject to restrictions and class permissions.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Create a decision-tree visual for licence exchange paths: NS/NB, Other Canada/US, Foreign, and Class 7 permit exchange.",
        },
        {
          type: "heading",
          value: "Exchange Pathway Summary",
        },
        {
          type: "table",
          headers: ["Current licence source", "Typical pathway"],
          rows: [
            [
              "NS/NB Class 5 (valid)",
              "Handbook describes a no-charge exchange pathway",
            ],
            [
              "Other Canadian or U.S. licence (expired less than 3 years)",
              "Handbook describes exchange without written, vision, or road tests when documentation is complete",
            ],
            [
              "Most foreign licences",
              "Generally not directly exchangeable; testing pathway applies",
            ],
          ],
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
            "Additional waiting periods or course requirements may still apply",
            "Only Canadian instruction permits are exchangeable",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Do not assume transferability. Confirm your exact case through current PEI channels before booking tests or travel.",
        },
      ],
    },
  ],
};
