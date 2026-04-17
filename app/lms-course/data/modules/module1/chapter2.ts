import type { Chapter } from "./chapter1";

export const chapter2: Chapter = {
  id: "chapter2",
  title: "Eligibility, Testing, and Licence Maintenance",
  type: "lesson",
  slug: "eligibility-testing-licence-maintenance",
  completed: false,
  lessons: [
    {
      id: "pg1",
      title: "Eligibility and Documents (What You Need Before Testing)",
      content: [
           {
          type: "image",
          src: "/module1/filling permit form.png",
          alt: "PEI licence classes 1 through 9 overview",
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
      title: "The Test Journey (Knowledge, Vision, Novice Course)",
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
  alt: "Knowledge Test → Vision Test → Novice Driver Course, with short labels for each check.",
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
              "Written or oral format; if unsuccessful you can rebook",
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

    ],
    },
    {
      id: "pg3",
      title: "Road Test Day - What Happens and How to Pass the Process",
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
            "If you pass through driver education certification, obtain your Class 5 photo licence within 30 days or you may face retesting and additional fees.",
        },
      ],
    },
    {
      id: "pg4",
      title: "Keeping Your Licence Valid (Renewals, Updates, Duplicates)",
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
      title: "Out-of-Province and Exchange Rules (What Transfers, What Doesn't)",
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
    {
      id: "pg6",
      title: "Your Personal Licensing Action Plan",
      content: [
        {
          type: "heading",
          value: "Step-by-Step Plan",
        },
        {
          type: "table",
          headers: ["Stage", "Action"],
          rows: [
            [
              "1. Set your target",
              "Most beginners follow Class 7 to Class 5",
            ],
            [
              "2. Confirm eligibility",
              "Check age, status, and under-18 consent needs",
            ],
            [
              "3. Prepare documents",
              "Gather identity and PEI residency proof before booking",
            ],
            [
              "4. Complete pre-road requirements",
              "Pass knowledge and vision testing, then complete the novice course",
            ],
            [
              "5. Practice under Stage 1 rules",
              "Follow supervision, BAC, and restriction requirements every drive",
            ],
            [
              "6. Book and pass the road test",
              "Attend with a compliant vehicle and required documents",
            ],
            [
              "7. Finish post-pass steps",
              "Complete photo licence issuance within the required timeline",
            ],
            [
              "8. Stay compliant",
              "Maintain renewals and update deadlines",
            ],
          ],
        },
        {
          type: "heading",
          value: "Self-Check Before Quiz",
        },
        {
          type: "list",
          items: [
            "Can you explain the difference between Class 7 and Class 5?",
            "Can you describe the key Stage 1 supervision and BAC rules?",
            "Do you know which documents to bring for a first permit application?",
            "Can you identify what can cancel a road test before it starts?",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "If you can answer the self-check confidently, you are ready to move into quiz mode with a full Chapter 2 mental map.",
        },
      ],
    },
  ],
};
