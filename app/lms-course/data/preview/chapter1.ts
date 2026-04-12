import type { Chapter, Lesson } from "@/app/lms-course/data/modules/module1/chapter1";

const lessons: Lesson[] = [
  {
    id: "pg1",
    title: "What a Driver's Licence Really Means",
    content: [
      {
        type: "text",
        value:
          "A driver's licence is legal permission to drive, but only under specific conditions.",
      },
      {
        type: "text",
        value:
          "In PEI, your licence must be valid. It cannot be expired, suspended, cancelled, or otherwise invalid.",
      },
      {
        type: "text",
        value:
          "Your licence only covers the class(es) of vehicle shown on it, and you must follow any restrictions printed on the licence.",
      },
      {
        type: "text",
        value:
          "Driving is treated as a safety responsibility. Privileges are maintained through safe behavior and legal compliance.",
      },
      {
        type: "text",
        value: "Example scenario",
      },
      {
        type: "text",
        value: "\"I have a licence, so I can drive anything.\"",
      },
      {
        type: "text",
        value:
          "Not correct. Your licence class determines what vehicles you are legally allowed to operate.",
      },
      {
        type: "text",
        value: "Quick recap",
      },
      {
        type: "list",
        items: [
          "A licence is a legal driving privilege.",
          "It only applies to approved class(es).",
          "Conditions and restrictions are enforceable.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        value:
          "Image prompt (placeholder): Create a clean educational graphic: \"Driver's Licence = Permission + Responsibility + Conditions\" with simple icons for law, safety, and vehicle class.",
      },
    ],
  },
  {
    id: "pg2",
    title: "PEI Licence Classes (Class 1-9) Without the Confusion",
    content: [
      {
        type: "text",
        value:
          "PEI uses a classified licensing system. Different vehicle types require different training and legal privileges.",
      },
      {
        type: "text",
        value: "Class map (beginner-first view)",
      },
      {
        type: "list",
        items: [
          "Class 7: Instruction permit (beginner stage)",
          "Class 5: Standard passenger vehicle licence (most learners aim here first)",
          "Class 6: Motorcycles",
          "Class 8: Mopeds (pedal-assisted)",
          "Class 9: Farm tractors",
        ],
      },
      {
        type: "text",
        value: "Commercial/large-vehicle classes (awareness)",
      },
      {
        type: "list",
        items: [
          "Class 1: Truck-tractor/trailer combinations (not buses)",
          "Class 2: Buses carrying more than 24 passengers (including school buses)",
          "Class 3: Trucks over 14,000 kg and related combinations",
          "Class 4: Ambulance, taxi, and buses carrying 24 passengers or fewer",
        ],
      },
      {
        type: "text",
        value: "At-a-glance table",
      },
      {
        type: "table",
        headers: ["Class", "Typical use", "Minimum age in handbook"],
        rows: [
          ["1", "Tractor-trailer combinations", "19"],
          ["2", "Large buses / school buses", "19 (21 for school bus)"],
          ["3", "Heavy trucks (>14,000 kg)", "19"],
          ["4", "Taxi / ambulance / small bus", "19"],
          ["5", "Regular passenger vehicles", "17 (after GDL completion)"],
          ["6", "Motorcycles", "17"],
          ["7", "Instruction permit", "16"],
          ["8", "Mopeds (pedal-assisted)", "17"],
          ["9", "Farm tractors", "14"],
        ],
      },
      {
        type: "text",
        value: "Quick recap",
      },
      {
        type: "list",
        items: [
          "Class tells you what you can drive.",
          "Beginners start with Class 7 and move toward Class 5.",
          "Higher-risk and commercial classes have stricter entry requirements.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        value:
          "Image prompt (placeholder): Design a learner-friendly ladder infographic for PEI licence classes 1-9, grouped into beginner/personal vs commercial classes.",
      },
    ],
  },
  {
    id: "pg3",
    title: "Your Beginner Pathway (GDL) From Day 1",
    content: [
      {
        type: "text",
        value:
          "When you receive a Class 7 instruction permit, you enter the Graduated Driver Licensing (GDL) system.",
      },
      {
        type: "text",
        value: "What Stage 1 means",
      },
      {
        type: "list",
        items: [
          "You drive only with a qualified supervising driver beside you.",
          "Supervising driver must have held a valid licence for at least 4 years.",
          "Supervising driver must not have BAC 0.05 or higher while supervising.",
        ],
      },
      {
        type: "text",
        value: "Stage 1 restrictions highlighted in the handbook",
      },
      {
        type: "list",
        items: [
          "Passenger limits apply (mainly instructor/supervisor context and immediate family conditions).",
          "Zero BAC rule applies to drivers in GDL.",
          "Beginner L decal must be displayed.",
          "No driving between 1:00 a.m. and 5:00 a.m. (exception noted in handbook for some Class 7 drivers age 21+).",
          "Demerit-point violations can trigger suspension of the permit.",
          "Handheld communication devices are prohibited.",
          "Novice Driver Course completion is required before road test eligibility.",
        ],
      },
      {
        type: "text",
        value: "Road test waiting period (Stage 1)",
      },
      {
        type: "list",
        items: [
          "With driver education: earliest first road test after 275 days.",
          "Without driver education: earliest first road test after 365 days.",
        ],
      },
      {
        type: "text",
        value: "Quick recap",
      },
      {
        type: "list",
        items: [
          "GDL is a staged safety system.",
          "Stage 1 is supervised, restricted, and skill-building.",
          "Progress depends on meeting requirements, not just time.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        value:
          "Image prompt (placeholder): Create a roadmap graphic showing Class 7 Stage 1 -> waiting period + course -> road test -> Class 5 photo licence. Use simple milestone icons.",
      },
    ],
  },
  {
    id: "pg4",
    title: "Eligibility and Documents (What You Need Before Testing)",
    content: [
      {
        type: "text",
        value: "Who may apply for an instruction permit",
      },
      {
        type: "list",
        items: [
          "Minimum age: 16.",
          "Your driving privilege cannot already be under suspension.",
        ],
      },
      {
        type: "text",
        value: "Primary identity documents (first permit/licence)",
      },
      {
        type: "list",
        items: ["Birth certificate", "Passport", "Immigration papers"],
      },
      {
        type: "text",
        value: "If previous address was outside Canada",
      },
      {
        type: "list",
        items: [
          "Canadian Immigration Identification Record of Entry form required",
          "Passport required",
        ],
      },
      {
        type: "text",
        value: "PEI residency/address proof",
      },
      {
        type: "text",
        value: "Two pieces of acceptable residency/address information are required.",
      },
      {
        type: "list",
        items: [
          "Utility bills",
          "Rental or lease agreement",
          "Employment letter or pay stub",
          "Government mail",
          "Bank cheque",
          "Mortgage documents",
          "Credit card or bank statement (with name and current PEI address)",
        ],
      },
      {
        type: "text",
        value: "If applicant is under 18",
      },
      {
        type: "list",
        items: [
          "Parent or legal guardian consent is required.",
          "Consent can be withdrawn in writing, which can cancel the permit/licence.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        value: "Most test-day delays happen because learners bring incomplete documents.",
      },
      {
        type: "text",
        value: "Quick recap",
      },
      {
        type: "list",
        items: [
          "Confirm age and legal eligibility first.",
          "Bring identity and residency proof.",
          "Under-18 applicants need parental consent documentation.",
        ],
      },
    ],
  },
  {
    id: "pg5",
    title: "The Test Journey (Knowledge, Vision, Novice Course)",
    content: [
      {
        type: "text",
        value: "Knowledge test",
      },
      {
        type: "list",
        items: [
          "Written or oral format available.",
          "Tests road rules, safe driving practices, and sign recognition.",
          "If unsuccessful, learners can rebook and retest later.",
        ],
      },
      {
        type: "text",
        value: "Vision test",
      },
      {
        type: "list",
        items: [
          "Must meet minimum standards.",
          "May involve color vision, distance judgment, and field-of-vision checks.",
          "If corrective lenses are needed, that condition is placed on the permit/licence.",
        ],
      },
      {
        type: "text",
        value: "Novice Driver Course",
      },
      {
        type: "list",
        items: [
          "Required for Class 7 holders before road test eligibility.",
          "Key topics include GDL rules, demerit system, impaired driving law topics, alcohol/drug education, and handling driving conditions.",
          "Course is about 5 hours, usually in two sessions.",
        ],
      },
      {
        type: "text",
        value: "Why these steps come before the road test",
      },
      {
        type: "text",
        value:
          "They verify decision-making, awareness, and readiness before on-road evaluation.",
      },
      {
        type: "text",
        value: "Quick recap",
      },
      {
        type: "list",
        items: [
          "Knowledge test = rules and signs understanding.",
          "Vision test = visual fitness and conditions.",
          "Novice course = safety and risk fundamentals before road testing.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        value:
          "Image prompt (placeholder): Create a three-step visual: Knowledge Test -> Vision Test -> Novice Driver Course, each with 'what it checks' labels.",
      },
    ],
  },
  {
    id: "pg6",
    title: "Road Test Day - What Happens and How to Pass the Process",
    content: [
      {
        type: "text",
        value: "Before the test starts",
      },
      {
        type: "list",
        items: [
          "You provide the vehicle.",
          "You must be accompanied by a licensed driver.",
          "Vehicle must meet safety and equipment checks.",
        ],
      },
      {
        type: "text",
        value: "Vehicle check items from the handbook (examples)",
      },
      {
        type: "list",
        items: [
          "Valid licence plates",
          "Lights and horn",
          "Rear-view mirror",
          "Seat belts",
          "Windshield, wipers, and window glass",
          "Muffler, brakes, and tires",
          "Valid inspection sticker",
          "Speedometer",
        ],
      },
      {
        type: "text",
        value: "Required documents on road test day",
      },
      {
        type: "list",
        items: ["Proof of insurance (pink card)", "Valid vehicle registration"],
      },
      {
        type: "text",
        value: "What the test is for",
      },
      {
        type: "text",
        value:
          "The road test samples safe operation skills under typical conditions and identifies areas for improvement.",
      },
      {
        type: "text",
        value: "Commonly observed skills",
      },
      {
        type: "list",
        items: [
          "Starting and stopping",
          "Turning and parking",
          "Signs and signals",
          "Intersections (controlled, partly controlled, uncontrolled)",
          "Hazard anticipation and attitude toward other road users",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        value:
          "If you pass through driver education certification, you must obtain your Class 5 photo licence within 30 days or you may be retested and pay fees.",
      },
      {
        type: "text",
        value: "Quick recap",
      },
      {
        type: "list",
        items: [
          "A safe, legal test vehicle is mandatory.",
          "The examiner checks practical safety behavior, not just vehicle control.",
          "Complete post-pass licensing steps promptly.",
        ],
      },
    ],
  },
  {
    id: "pg7",
    title: "Keeping Your Licence Valid (Renewals, Updates, Duplicates)",
    content: [
      {
        type: "text",
        value: "Licence validity basics",
      },
      {
        type: "list",
        items: [
          "Driver licences expire at midnight on the driver's birthday.",
          "Instruction permits (Class 7) are valid for two years from issue date.",
        ],
      },
      {
        type: "text",
        value: "Name and address updates",
      },
      {
        type: "list",
        items: [
          "Name change endorsement: within 10 days (handbook wording).",
          "Address change report: within 30 days.",
          "Failing to notify is an offence under the Highway Traffic Act.",
        ],
      },
      {
        type: "text",
        value: "Lost or unreadable licence",
      },
      {
        type: "list",
        items: [
          "Apply for a duplicate licence.",
          "Fee applies.",
          "Bring licence details if available, or birth certificate if details are missing.",
        ],
      },
      {
        type: "text",
        value: "Responsibility when someone else drives your vehicle",
      },
      {
        type: "text",
        value:
          "Ensure they hold a valid licence or permit and follow permit supervision rules.",
      },
      {
        type: "text",
        value: "Retesting note",
      },
      {
        type: "text",
        value:
          "The handbook allows retesting in some situations, including collisions or convictions history, suspensions, or certain medical concerns.",
      },
      {
        type: "text",
        value: "Quick recap",
      },
      {
        type: "list",
        items: [
          "Staying licensed requires ongoing admin compliance.",
          "Update deadlines matter.",
          "Keep licence status and records current.",
        ],
      },
    ],
  },
  {
    id: "pg8",
    title: "Out-of-Province and Exchange Rules (What Transfers, What Doesn't)",
    content: [
      {
        type: "text",
        value: "Driving in PEI with another licence",
      },
      {
        type: "text",
        value:
          "If you are 16+ with a valid licence from elsewhere, the handbook says you may drive in PEI up to 120 days, subject to licence restrictions and class permissions.",
      },
      {
        type: "text",
        value: "Licence exchange highlights",
      },
      {
        type: "list",
        items: [
          "Former NS or NB residents with valid Class 5: exchange path described with no charge in the handbook.",
          "Other Canadian provinces and territories, and U.S. licences (expired less than 3 years): exchange without written, vision, or road tests with required documentation.",
          "Most foreign licences: generally not exchangeable directly; testing pathway applies.",
        ],
      },
      {
        type: "text",
        value: "Instruction permit (Class 7) exchange",
      },
      {
        type: "list",
        items: [
          "Valid Canadian Class 7 permits may be exchangeable.",
          "PEI residency required.",
          "Additional waiting periods or course requirements may apply.",
          "Only Canadian instruction permits are exchangeable.",
        ],
      },
      {
        type: "text",
        value: "Important learner mindset",
      },
      {
        type: "callout",
        variant: "warning",
        value:
          "Do not assume transferability. Verify your exact case through current PEI channels before booking.",
      },
      {
        type: "callout",
        variant: "info",
        value:
          "Image prompt (placeholder): Create a decision-tree graphic: 'I have a licence from...' branches to NS/NB, Other Canada/US, Foreign, and Instruction Permit exchange, with 'may exchange / testing required' outcomes.",
      },
    ],
  },
  {
    id: "pg9",
    title: "Your Personal Licensing Action Plan",
    content: [
      {
        type: "text",
        value: "Your practical action checklist",
      },
      {
        type: "list",
        items: [
          "1. Confirm your target class (most beginners: Class 7 -> Class 5).",
          "2. Confirm eligibility (age and status) and gather ID plus residency documents.",
          "3. Complete required testing steps (knowledge, vision, novice course).",
          "4. Follow Stage 1 restrictions consistently.",
          "5. Book road test only when eligible by waiting period and course status.",
          "6. Complete post-pass steps promptly (including photo licence issuance timing noted in handbook).",
          "7. Maintain licence status through renewals and update deadlines.",
          "8. If transferring from another jurisdiction, verify exchange pathway before making assumptions.",
        ],
      },
      {
        type: "text",
        value: "Self-check before chapter quiz",
      },
      {
        type: "list",
        items: [
          "Can I explain the difference between Class 7 and Class 5?",
          "Do I know the Stage 1 supervision and BAC rules?",
          "Do I know what documents to bring for first permit application?",
          "Do I know what can cancel a road test before it starts?",
        ],
      },
      {
        type: "text",
        value: "Final recap for Chapter 1",
      },
      {
        type: "text",
        value:
          "You now have the full mental map: what a licence means, which class fits your goal, how GDL works, what testing requires, and how to remain legally compliant after licensing.",
      },
    ],
  },
];

export const chapter1PreviewLessons = lessons;

export const chapter1Preview: Chapter = {
  id: "chapter1-preview",
  title: "Understanding Your Driver's Licence (Preview)",
  type: "lesson",
  slug: "understanding-your-drivers-licence-preview",
  completed: false,
  lessons,
};
