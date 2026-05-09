import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m6chapter2: Chapter = {
  id: "m6chapter2",
  title: "The Balanced Driver",
  type: "lesson",
  slug: "the-balanced-driver",
  completed: false,
  lessons: [
    {
      id: "m6ch2_pg1",
      title: "The Balanced Driver",
      content: [
        {
          type: "text",
          value:
            "Driving ability is not defined by age. It is defined by performance in real conditions. Some drivers improve with experience. Others decline due to physical or cognitive changes. The road does not care about your age. It only responds to what you do in the moment.",
        },
        {
          type: "text",
          value:
            "Experience gives older drivers an advantage. Studies show they are more likely to follow rules, avoid risky behaviour like speeding, and take impaired driving seriously. This creates a strong safety foundation.",
        },
        {
          type: "text",
          value:
            "However, the human system changes over time. These changes are subtle and slow, which makes them dangerous. You do not notice them clearly until a situation exposes them.",
        },
        {
          type: "heading",
          value: "What actually changes",
        },
        {
          type: "list",
          items: [
            "**Sight**: Reduced night vision, glare sensitivity, and slower focus adjustment.",
            "**Hearing**: Difficulty detecting horns, sirens, or subtle warning sounds.",
            "**Judgment**: Slower decision-making in complex traffic situations.",
            "**Reflexes**: Increased reaction time during sudden events.",
            "**Attention**: Harder to track multiple moving elements at once.",
          ],
        },
        {
          type: "text",
          value:
            "These changes matter because driving is not one skill. It is a coordination of perception, decision-making, and motor response. If even one slows down, the whole system becomes less stable.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Mental model: driving is a chain. See → Decide → Act. If any link slows down, the entire chain weakens.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A driver sees a pedestrian later than expected at night.",
              "What likely caused this?",
              "Reduced night vision and slower visual processing.",
            ],
            [
              "A driver hesitates at a busy intersection they used to handle easily.",
              "What does this indicate?",
              "Slower judgment processing, not lack of knowledge.",
            ],
          ],
        },
      ],
    },
    {
      id: "m6ch2_pg2",
      title: "Self-Assessment and Warning Signs",
      content: [
        {
          type: "text",
          value:
            "The real danger is not decline. It is unawareness of decline. Because changes happen gradually, most drivers adapt unconsciously until a failure happens.",
        },
        {
          type: "text",
          value:
            "Self-assessment forces awareness. It turns vague discomfort into specific signals you can act on.",
        },
        {
          type: "heading",
          value: "Warning signs to watch for",
        },
         {
          type: "image",
          src: "/module6/m6ch2.png",
          alt:             "A driving record graphic showing a gauge that goes from green (0 points) to red (12 points), with the suspension zone highlighted at the red end.",

          layout: "half",
          align: "left",
        },
        {
          type: "list",
          items: [
            "Difficulty handling turns or intersections.",
            "Hesitation in right-of-way decisions.",
            "Being surprised by nearby vehicles or pedestrians.",
            "Frequent honking or negative reactions from other drivers.",
            "Poor night visibility.",
            "Getting lost on familiar routes.",
            "Feeling stressed, tired, or overwhelmed after driving.",
            "Traffic violations or fault in collisions.",
          ],
        },
        {
          type: "text",
          value:
            "Each of these signals points to a breakdown in one part of the driving system. Ignore them, and they stack. Eventually, the system fails under pressure.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Feedback is data. If other drivers react negatively to you often, that is not random. It is a pattern worth investigating.",
        },
        {
          type: "heading",
          value: "Why this matters",
        },
        {
          type: "text",
          value:
            "Drivers often assume experience compensates for decline. That is only partially true. Experience helps prediction, but it cannot fix slower reaction time or reduced vision.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A driver gets honked at frequently in traffic.",
              "Is this just bad luck?",
              "No. It likely indicates delayed reactions or poor positioning.",
            ],
            [
              "A driver feels exhausted after short trips.",
              "What does this suggest?",
              "Driving is requiring more mental effort than before.",
            ],
          ],
        },
      ],
    },
    {
      id: "m6ch2_pg3",
      title: "Smart Adaptation and Risk Reduction",
      content: [
        {
          type: "text",
          value:
            "Once you identify limitations, the goal is not to stop driving. The goal is to adapt intelligently. Think of it like playing to your strengths while avoiding unnecessary risk.",
        },
        {
          type: "heading",
          value: "Adaptive driving strategies",
        },
        {
          type: "list",
          items: [
            "**Daylight driving**: reduces visual strain and improves hazard detection.",
            "**Avoid rush hours**: lowers decision complexity and reaction pressure.",
            "**Fair weather driving**: removes low-traction and low-visibility risks.",
            "**Simpler routes**: reduces navigation stress and cognitive load.",
          ],
        },
        {
          type: "text",
          value:
            "These adjustments work because they reduce the number of variables you need to process. Fewer variables means faster decisions and fewer mistakes.",
        },
        {
          type: "text",
          value:
            "This is not limitation. It is optimization. You are shaping the environment to match your current performance level.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "High-skill drivers control risk by controlling conditions, not by reacting faster.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A driver struggles at night but drives anyway.",
              "What is the smarter move?",
              "Limit driving to daylight conditions.",
            ],
            [
              "A driver feels overwhelmed in heavy traffic.",
              "What should they change?",
              "Drive during low-traffic hours.",
            ],
          ],
        },
      ],
    },
    {
      id: "m6ch2_pg4",
      title: "Proactive Safety and Long-Term Driving Ability",
      content: [
        {
          type: "text",
          value:
            "Good drivers do not wait for problems. They actively maintain their ability. This is where health, training, and tools come in.",
        },
        {
          type: "heading",
          value: "Key ways to stay sharp",
        },
        {
          type: "list",
          items: [
            "**Regular health checks**: vision, hearing, and cognitive function directly affect driving.",
            "**Medication awareness**: even common drugs can cause drowsiness or slow reactions.",
            "**Refresher courses**: update knowledge and correct bad habits.",
            "**Vehicle choice**: select cars that reduce physical strain and improve visibility.",
          ],
        },
        {
          type: "text",
          value:
            "Vehicle design matters more than people think. A well-designed car reduces effort, improves visibility, and compensates for physical limitations.",
        },
        {
          type: "list",
          items: [
            "Adjustable seats and steering wheel.",
            "Large, clear mirrors.",
            "Simple, readable dashboard.",
            "Reduced blind spots.",
          ],
        },
        {
          type: "text",
          value:
            "Courses like refresher programs help rebuild awareness. They are not for beginners. They are for correcting invisible mistakes that develop over time.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Medication is a hidden risk. Even over-the-counter drugs can slow reaction time or blur vision.",
        },
        {
          type: "heading",
          value: "Final perspective",
        },
        {
          type: "text",
          value:
            "Aging is unavoidable. Decline is manageable. The difference between a risky driver and a safe one is awareness and adaptation.",
        },
        {
          type: "text",
          value:
            "The goal is not to drive forever. The goal is to drive safely for as long as your performance allows.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A driver ignores medication side effects.",
              "What is the risk?",
              "Slower reactions and impaired judgment without realizing it.",
            ],
            [
              "A driver upgrades to a car with better visibility.",
              "Why does this help?",
              "It compensates for reduced vision and improves awareness.",
            ],
          ],
        },
      ],
    },
  ],
};