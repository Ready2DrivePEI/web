import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m6chapter1: Chapter = {
  id: "m6chapter1",
  title: "What to Do If You Are in a Collision",
  type: "lesson",
  slug: "what-to-do-if-you-are-in-a-collision",
  completed: false,
  lessons: [
    {
      id: "m6ch1_pg1",
      title: "Legal Duties After a Collision",
      content: [
        {
          type: "text",
          value:
            "Even careful drivers can end up in collisions. What matters next is not emotion, but procedure. The law requires specific actions, and missing them can turn a bad situation into a legal one.",
        },
        {
          type: "text",
          value:
            "You must report the collision to the police immediately if there is a death, an injury, or if the total damage to all property involved appears to exceed $1,000. This is not optional. It ensures proper investigation, insurance handling, and public safety tracking.",
        },
        {
          type: "heading",
          value: "Why reporting matters",
        },
        {
          type: "text",
          value:
            "Reporting is not just bureaucracy. It creates an official record. Without it, insurance claims become disputes, injuries may go undocumented, and liability becomes harder to prove.",
        },
        {
          type: "heading",
          value: "Five key facts you must collect",
        },
        {
          type: "list",
          items: [
            "Exact location of the collision.",
            "Time the collision occurred.",
            "Nature of damage to all vehicles or property.",
            "Nature and extent of injuries.",
            "Names, addresses, licences, registration, and insurance details of all drivers and owners.",
          ],
        },
        {
          type: "text",
          value:
            "Also collect witness details whenever possible. Witnesses often become the difference between truth and argument.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Mental model: treat every collision like it will be questioned later. Document now, so you do not rely on memory later.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "Two cars collide with visible dents, but no injuries.",
              "Should it be reported?",
              "Yes, if total damage appears over $1,000 across all vehicles.",
            ],
            [
              "You only record your own vehicle damage.",
              "What mistake are you making?",
              "The law considers total damage to ALL property, not just yours.",
            ],
          ],
        },
      ],
    },
    {
      id: "m6ch1_pg2",
      title: "First on the Scene: Control Before Help",
      content: [
        {
          type: "text",
          value:
            "If you arrive first at a collision, your role is not to be a hero. It is to prevent the situation from getting worse. Most secondary injuries happen because the scene is not controlled.",
        },
        {
          type: "heading",
          value: "Step 1: Secure the scene",
        },
        {
          type: "list",
          items: [
            "Park your vehicle off the road and at a safe distance.",
            "Avoid blocking emergency access.",
            "Turn on hazard lights if available.",
          ],
        },
        {
          type: "heading",
          value: "Step 2: Call for help",
        },
        {
          type: "text",
          value:
            "Call 911 immediately. Do not assume someone else has already done it. Time is the only resource you cannot recover later.",
        },
        {
          type: "heading",
          value: "Step 3: Reduce risks",
        },
        {
          type: "list",
          items: [
            "Turn off ignitions of damaged vehicles to prevent fire.",
            "Watch for leaking fuel or smoke.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: rushing directly to victims before securing the scene. This can create additional collisions or fire hazards.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "You run directly to the crash without parking safely.",
              "Why is this dangerous?",
              "You may cause another collision or block emergency vehicles.",
            ],
          ],
        },
      ],
    },
    {
      id: "m6ch1_pg3",
      title: "Helping Without Causing Harm",
      content: [
        {
          type: "text",
          value:
            "Helping injured people is not about doing more. It is about doing the right amount. In many cases, doing less prevents permanent damage.",
        },
        {
          type: "heading",
          value: "Critical rule: Do not move injured people",
        },
        {
          type: "text",
          value:
            "If someone has a spinal or neck injury, moving them can cause paralysis or death. Leave them in place unless there is immediate danger like fire.",
        },
        {
          type: "heading",
          value: "When limited action is acceptable",
        },
        {
          type: "list",
          items: [
            "If a person is trapped but otherwise uninjured, carefully try to free them.",
            "If a driver is pinned by the steering wheel, move the seat back to relieve pressure.",
          ],
        },
        {
          type: "heading",
          value: "Basic care if untrained",
        },
        {
          type: "list",
          items: [
            "Keep injured people warm using blankets or coats.",
            "Loosen tight clothing to help breathing.",
            "Speak calmly and reassure them.",
            "Keep bystanders away to reduce stress and interference.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Why this matters: panic leads to movement, movement leads to damage. Your job is to stabilize, not fix.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A victim is conscious but complaining of neck pain.",
              "Should you help them out of the car?",
              "No. Movement may worsen a spinal injury.",
            ],
          ],
        },
      ],
    },
    {
      id: "m6ch1_pg4",
      title: "Calling 911 and Managing the Situation",
      content: [
        {
          type: "text",
          value:
            "Emergency services are only as effective as the information they receive. A clear call saves minutes. Minutes save lives.",
        },
        {
          type: "heading",
          value: "How to call effectively",
        },
        {
          type: "list",
          items: [
            "Give your name and phone number first.",
            "Describe the exact location clearly.",
            "Explain the situation calmly.",
          ],
        },
        {
          type: "text",
          value:
            "If you do not know the area, use landmarks, intersections, or ask others nearby. Accuracy matters more than speed when giving location details.",
        },
        {
          type: "heading",
          value: "If connection is lost",
        },
        {
          type: "text",
          value:
            "Move to an area with better signal and call back immediately. Keep your phone available for callbacks.",
        },
        {
          type: "heading",
          value: "Advanced awareness",
        },
        {
          type: "text",
          value:
            "If possible, position yourself where you can guide emergency responders to the exact location. This is especially useful in rural or unfamiliar areas.",
        },
        {
          type: "heading",
          value: "Scenario challenge",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "You call 911 but do not know the street name.",
              "What should you do?",
              "Look for landmarks, nearby buildings, or go to the nearest intersection to identify the location accurately.",
            ],
            [
              "You helped secure the scene but did not call 911 because others were around.",
              "What is the risk?",
              "No one may have actually called, delaying emergency response.",
            ],
          ],
        },
        {
          type: "heading",
          value: "Final mental model",
        },
        {
          type: "text",
          value:
            "In any collision, follow this order: control the scene, call for help, protect the injured, document the facts. If you mix the order, you increase risk. If you follow it, you reduce chaos.",
        },
      ],
    },
  ],
};