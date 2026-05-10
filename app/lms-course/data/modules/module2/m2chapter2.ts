import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m2chapter2: Chapter = {
  id: "m2chapter2",
  title: "Traffic Signs",
  type: "lesson",
  slug: "traffic-signs",
  completed: false,
  lessons: [
    {
      id: "m2ch2_pg1",
      title: "How Road Signs Are Designed",
      content: [
        {
          type: "heading",
          value: "Road signs are built for fast recognition",
        },
        {
          type: "text",
          value:
            "When driving, you do not have time to carefully read every sign. Your brain must recognize important information in seconds, sometimes before you even consciously think about it. That is why road signs use repeated shapes, colors, and symbols.",
        },
        {
          type: "text",
          value:
            "Over time, your brain begins to recognize patterns automatically. A certain shape may instantly feel like danger, warning, or instruction before you even finish reading the sign.",
        },
        {
          type: "heading",
          value: "The system behind road signs",
        },
        {
          type: "list",
          items: [
            "Shapes help your brain identify the type of message quickly",
            "Colors create urgency and meaning at a glance",
            "Symbols communicate faster than words",
            "Repeated patterns train instant recognition",
          ],
        },
        {
          type: "image",
          src: "/module2/m2ch1pg7.png",
          alt:
            "Examples of common road sign shapes and colors used for quick recognition while driving.",
          layout: "half",
          align: "center",
        },
        {
          type: "heading",
          value: "Why this matters",
        },
        {
          type: "text",
          value:
            "Safe driving depends on **reacting early**, not late. The faster your brain recognizes a sign, the more time you have to make safe decisions.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Do not try to memorize every sign individually. Learn the patterns first, and many signs will start feeling familiar automatically.",
        },
      ],
    },

    {
      id: "m2ch2_pg2",
      title: "Mandatory Signs: Stop, Yield, School, Railway",
      content: [
        {
          type: "heading",
          value: "Stop sign",
        },

        {
          type: "text",
          value:
            "You must come to a **complete stop** and check all directions before moving. Rolling through is a common beginner mistake because the brain confuses slow with safe.",
        },
        {
          type: "image",
          src: "/signs/a-stop-sign.jpg",
          alt: "Stop sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "heading",
          value: "Yield sign",
        },
        {
          type: "text",
          value:
            "Yield means **let other traffic go first**. You may continue only when safely clear. Many crashes happen when drivers treat yield like a speed challenge instead of a judgement test.",
        },
        {
          type: "image",
          src: "/signs/a-yield-sign.jpg",
          alt: "Yield sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "heading",
          value: "School zone and railway crossing",
        },
        {
          type: "text",
          value:
            "School zones require expecting sudden child movement.",
        },
        {
          type: "image",
          src: "/signs/a-school-zone-sign.jpg",
          alt: "School zone sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Railway signs mean tracks ahead where trains cannot stop quickly, so your patience matters more than your momentum.",
        },
        {
          type: "image",
          src: "/signs/a-railway-crossing-sign.jpg",
          alt: "Railway crossing sign",
          layout: "quarter",
          align: "left",
        },
      ],
    },

    {
      id: "m2ch2_pg3",
      title: "Regulatory Signs and Legal Duties",
      content: [
        {
          type: "text",
          value:
            "Regulatory signs tell you what you must or must not do. These are **legal instructions**, not suggestions.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "A green circle usually indicates allowed/required action. A red circle with a slash indicates prohibited action.",
        },
        {
          type: "text",
          value:
            "**Do Not Enter** means opposing traffic flow and severe head-on collision risk.",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-4.jpg",
          alt: "Do not enter sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Turn-restriction signs exist where visibility or traffic conflict makes those turns unsafe.",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-8.jpg",
          alt: "No left turn sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "**No U-turn** signs indicate that making a U-turn at this location is not permitted due to safety or traffic flow restrictions.",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-10.jpg",
          alt: "No U-turn sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Speed limits are based on road design, visibility, stopping distance, and risk exposure. The speed that feels comfortable is not always safe.",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-17.jpg",
          alt: "Speed limit change sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "**Keep right** traffic sign, used to ensure traffic flows in the correct direction.",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-16.jpg",
          alt: "Keep right sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "heading",
          value: "Lane Designations and Shared Turns",
        },
        {
          type: "text",
          value:
            "Lane designation signs tell you exactly where your lane goes. Late realization causes panicked lane changes, leading to side-swipe crashes. Two-way left turn lanes (center lanes) are shared by opposing traffic for turning only; using them as passing or merging lanes creates extreme head-on risk.",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-24.jpg",
          alt: "Lane designation sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-27.jpg",
          alt: "Two-way left turn lane sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "heading",
          value: "Community Safety Zones",
        },
        {
          type: "text",
          value:
            "These signs indicate areas with high pedestrian vulnerability, like schools or parks. The immediate behavioral change required is **hyper-awareness** and strict speed compliance, as fines are doubled for offenses here.",
        },
        {
          type: "image",
          src: "/signs/a-regulatory-sign-20.jpg",
          alt: "Community safety zone sign",
          layout: "quarter",
          align: "left",
        },
      ],
    },

    {
      id: "m2ch2_pg4",
      title: "Warning Signs and Predictive Driving",
      content: [
        {
          type: "text",
          value:
            "Warning signs prepare you for hazards ahead. The danger is usually not at the sign itself. The sign exists because your reaction time needs advance notice.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "At highway speed, delayed thinking can consume most of your safe stopping margin before you even touch the brake.",
        },
        {
          type: "text",
          value:
            "Curve signs warn about grip limits.",
        },
        {
          type: "image",
          src: "/signs/a-warning-sign-9.jpg",
          alt: "Sharp curve warning sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "**Slippery-when-wet** signs warn that traction falls quickly, especially at the start of rain.",
        },
        {
          type: "image",
          src: "/signs/a-warning-sign-18.jpg",
          alt: "Slippery road sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Traffic light ahead and pedestrian crossing warnings exist because intersections or people may appear late due to curves, hills, weather, parked vehicles, and visual clutter.",
        },
        {
          type: "image",
          src: "/signs/a-warning-sign-22.jpg",
          alt: "Traffic lights ahead sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "image",
          src: "/signs/a-warning-sign-34.jpg",
          alt: "Pedestrian crossing warning sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "image",
          src: "/signs/a-warning-sign-31.jpg",
          alt: "Deer crossing sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "heading",
          value: "Lane Merges and Reductions",
        },
        {
          type: "text",
          value:
            "When a right lane ends ahead, it requires immediate action: check mirrors, match speed with the adjacent lane, and merge smoothly. Ignoring this sign forces a late, aggressive cut-in or pushes you off the road.",
        },
        {
          type: "image",
          src: "/signs/a-warning-sign-21.jpg",
          alt: "Right lane ends sign",
          layout: "quarter",
          align: "left",
        },
      ],
    },

    {
      id: "m2ch2_pg5",
      title: "Interactive Drill: What Danger Is Coming in the Next 5 Seconds?",
      content: [
        {
          type: "heading",
          value: "Predict Before You Arrive",
        },
        {
          type: "image",
          src: "/signs/a-warning-sign-22.jpg",
          alt: "Traffic lights ahead warning sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Before you reach this sign, your job is not to react, but to predict.\n\nAsk yourself:\n**What could change in the next 5 seconds if I keep moving at this speed?**",
        },
        {
          type: "text",
          value:
            "Do not look for one fixed answer. Look for possible risk shifts like:\n• A signal turning from green to yellow\n• Vehicles ahead slowing suddenly\n• Cross traffic preparing to enter\n• Pedestrians stepping off the curb late",
        },
        {
          type: "list",
          items: [
            "**Ease off the accelerator early** to buy reaction time",
            "**Cover the brake** so stopping becomes instant if needed",
            "**Scan far ahead**, not just the vehicle in front",
            "**Check mirrors** before approaching the conflict zone",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Predictive rule: if a sign warns now, your adjustment should happen now, not at the hazard point.",
        },
      ],
    },

    {
      id: "m2ch2_pg6",
      title: "Temporary Condition Signs and Construction Reality",
      content: [
        {
          type: "text",
          value:
            "Temporary signs warn about changing conditions like road work, lane closures, detours, and active workers. Construction zones feel strange because the road stops matching your memory.",
        },
        {
          type: "callout",
          variant: "danger",
          value:
            "Construction zones create a safety illusion. Slow traffic can feel safe while lane patterns, barriers, and merges remain highly unpredictable.",
        },
        {
          type: "text",
          value:
            "Orange signs and cones are temporary road programming. The safest drivers stop relying on memory and start reading conditions in real time.",
        },
        {
          type: "image",
          src: "/signs/a-temporary-condition-sign-2.jpg",
          alt: "Road work ahead sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "**Lane closed ahead** means merge early and smoothly. **Flag person ahead** means a human may directly control traffic flow and must be obeyed immediately.",
        },
        {
          type: "image",
          src: "/signs/a-temporary-condition-sign-9.jpg",
          alt: "Lane closed ahead sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "image",
          src: "/signs/a-temporary-condition-sign-4.jpg",
          alt: "Traffic control person sign",
          layout: "quarter",
          align: "left",
        },
      ],
    },

    {
      id: "m2ch2_pg7",
      title: "Information Signs and Better Route Decisions",
      content: [
        {
          type: "text",
          value:
            "Information signs guide you to exits, services, and destinations. Their real safety value is reducing late decisions and sudden movements.",
        },
        {
          type: "text",
          value:
            "Many freeway exit crashes happen because drivers decide too late and cut across lanes. Good drivers position early and stay predictable.",
        },
        {
          type: "image",
          src: "/signs/an-information-or-direction-sign-3.jpg",
          alt: "Freeway exit sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Roundabout direction signs help you select path and lane before entry, preventing panic braking or abrupt lane changes inside.",
        },
        {
          type: "image",
          src: "/signs/an-information-or-direction-sign-8.jpg",
          alt: "Roundabout direction sign",
          layout: "quarter",
          align: "left",
        },
      ],
    },

    {
      id: "m2ch2_pg8",
      title: "Other Important Signs and Closing Summary",
      content: [
        {
          type: "text",
          value:
            "Slow-moving vehicle signs identify traffic traveling 40 km/h or less. Closing speed can be dangerously high if you do not detect it early.",
        },
        {
          type: "image",
          src: "/signs/a-slow-moving-vehicle-sign.jpg",
          alt: "Slow moving vehicle sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "text",
          value:
            "Emergency detour route signs guide traffic around sudden closures. In emergencies, official detour routes are usually safer than improvised late turns.",
        },
        {
          type: "image",
          src: "/signs/an-edr-sign.jpg",
          alt: "Emergency detour route sign",
          layout: "quarter",
          align: "left",
        },
        {
          type: "heading",
          value: "Chapter Summary",
        },
        {
          type: "list",
          items: [
            "Traffic signs exist to help you predict danger early",
            "Regulatory signs define legal obligations you must obey",
            "Warning signs are advance timing tools for safer decisions",
            "Construction signs demand extra caution and early planning",
            "Understanding why a sign exists makes recall stronger under stress",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Best-driver habit: keep predicting the next 5 to 10 seconds instead of waiting for surprises.",
        },
      ],
    },
  ],
};