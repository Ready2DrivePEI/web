import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m3chapter3: Chapter = {
  id: "m3chapter3",
  title: "Night, Winter, and Reduced-Traction Driving",
  type: "lesson",
  slug: "night-winter-reduced-traction-driving",
  completed: false,
  lessons: [
    {
      id: "m3ch3_pg1",
      title: "Night Driving and Headlight Limitations",
      content: [
        { type: "heading", value: "The Danger of the Dark" },
        {
          type: "text",
          value:
            "There are significantly more fatal collisions at night than during the day. Not because drivers suddenly become reckless, but because vision collapses. Your brain is trying to make decisions with missing data.",
        },
        {
          type: "text",
          value:
            "At night, your field of vision shrinks to what your headlights reveal. Peripheral awareness drops, depth perception weakens, and hazards appear later than your brain expects.",
        },

        { type: "heading", value: "Over-Driving Your Headlights" },
        {
          type: "text",
          value:
            "If your stopping distance is longer than the distance your headlights illuminate, you are over-driving your headlights. That means by the time you see a hazard, physics has already decided the outcome.",
        },
        {
          type: "text",
          value:
            "This is why speed must drop at night. Not because of rules, but because visibility becomes the limiting factor, not engine power.",
        },

        {
          type: "heading",
          value: "Headlight Rules",
        },
        {
          type: "list",
          items: [
            "Dim high beams within 150 metres of oncoming vehicles",
            "Dim within 60 metres when following another vehicle",
            "Use low beams in city environments with lighting",
            "Look toward the right edge of the road if blinded by oncoming headlights",
          ],
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are driving on a dark highway and can only clearly see 40–50 metres ahead. What should control your speed?",
        },
        {
          type: "text",
          value:
            "**Answer:** Your visible stopping distance, not the speed limit.",
        },
        {
          type: "text",
          value:
            "Why: Speed limits assume ideal visibility. At night, your real limit is how far ahead you can see and safely stop within.",
        },

        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: driving at daytime speed in nighttime conditions. Same road, completely different risk.",
        },
      ],
    },

    {
      id: "m3ch3_pg2",
      title: "Winter Realities: Black Ice and Bridges",
      content: [
        { type: "heading", value: "Changing the Physics of Stopping" },
        {
          type: "text",
          value:
            "Snow and ice don’t just reduce grip, they rewrite the rules. Stopping distance can increase 3 to 12 times compared to dry pavement.",
        },
        {
          type: "text",
          value:
            "That means your normal safe habits become unsafe. A 3-second following distance? Not even close in winter.",
        },

        { type: "heading", value: "Hidden Hazards" },
        {
          type: "list",
          items: [
            "Bridges freeze first because cold air surrounds them from above and below",
            "Black ice forms invisibly and looks like wet pavement",
            "Shaded areas stay frozen longer than sunlit roads",
          ],
        },

        {
          type: "text",
          value:
            "Black ice is dangerous because it removes feedback. You don’t feel it building. You just lose control suddenly.",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** The road looks wet but temperatures are near freezing. What should you assume?",
        },
        {
          type: "text",
          value:
            "**Answer:** Assume black ice and reduce speed immediately.",
        },
        {
          type: "text",
          value:
            "Why: Your eyes cannot reliably detect black ice. Defensive driving assumes worst-case when conditions allow it.",
        },

        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "Split comparison showing wet road vs black ice, visually similar, with one car maintaining control and the other beginning to skid",
        },
      ],
    },

    {
      id: "m3ch3_pg3",
      title: "Skids and Braking Systems (ABS vs Non-ABS)",
      content: [
        { type: "heading", value: "What a Skid Really Means" },
        {
          type: "text",
          value:
            "A skid is not just losing control. It is losing friction. Your tires are no longer gripping the road, which means steering and braking stop working properly.",
        },

        {
          type: "heading",
          value: "Skid Recovery Logic",
        },
        {
          type: "list",
          items: [
            "Ease off pedals immediately",
            "Steer gently in the direction the rear is sliding",
            "Avoid sudden corrections",
          ],
        },

        {
          type: "text",
          value:
            "Why this works: You are trying to realign the tires with the direction of motion so traction can return. Fighting the skid makes it worse.",
        },

        {
          type: "callout",
          variant: "danger",
          value:
            "Panic braking during a skid removes your last remaining control. Calm inputs restore it.",
        },

        {
          type: "heading",
          value: "ABS vs Non-ABS",
        },
        {
          type: "table",
          headers: ["System", "Correct Action"],
          rows: [
            ["Non-ABS", "Pump brakes to avoid wheel lock"],
            ["ABS", "Press firmly and hold, system pulses automatically"],
          ],
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** Your car starts skidding and your instinct is to slam the brakes. What should you actually do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Ease off braking and regain traction before reapplying control.",
        },
        {
          type: "text",
          value:
            "Why: Locked wheels = zero steering control. You cannot steer a sliding object.",
        },
      ],
    },

    {
      id: "m3ch3_pg4",
      title: "Rain and Hydroplaning",
      content: [
        { type: "heading", value: "When Rain is Most Dangerous" },
        {
          type: "text",
          value:
            "The first rain after a dry period is the most dangerous. Oil, dust, and debris mix with water to create a slick surface similar to soap.",
        },

        {
          type: "heading",
          value: "Hydroplaning Explained",
        },
        {
          type: "text",
          value:
            "At higher speeds, tires cannot push water away fast enough. A thin water layer builds, lifting the tire off the road.",
        },
        {
          type: "text",
          value:
            "When that happens, you are no longer driving. You are gliding.",
        },

        {
          type: "list",
          items: [
            "Higher speed increases hydroplaning risk",
            "Worn tires increase risk dramatically",
            "Standing water is the main trigger",
          ],
        },

        {
          type: "heading",
          value: "Recovery Strategy",
        },
        {
          type: "list",
          items: [
            "Ease off the accelerator",
            "Keep steering steady",
            "Do not brake suddenly",
          ],
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** Your steering suddenly feels light and unresponsive in heavy rain. What is happening and what should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** You are hydroplaning. Ease off the gas and hold steady until traction returns.",
        },
        {
          type: "text",
          value:
            "Why: Braking or jerking the wheel while floating removes any chance of regaining control smoothly.",
        },

        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: reacting aggressively. In low-traction situations, smooth inputs are control. Sharp inputs are chaos.",
        },
      ],
    },

    {
      id: "m3ch3_pg5",
      title: "Reduced Traction Mindset and Risk Stacking",
      content: [
        {
          type: "text",
          value:
            "Most crashes in bad conditions don’t happen because of one problem. They happen because multiple small risks stack together.",
        },

        {
          type: "heading",
          value: "Risk Stacking",
        },
        {
          type: "list",
          items: [
            "Night + rain = reduced visibility + reduced grip",
            "Winter + fatigue = slower reaction + longer stopping",
            "Speed + poor visibility = delayed decision + no stopping room",
          ],
        },

        {
          type: "text",
          value:
            "Driving skill is not about reacting perfectly. It is about preventing situations where perfect reaction is required.",
        },

        {
          type: "heading",
          value: "Core Survival Rule",
        },
        {
          type: "text",
          value:
            "If conditions get worse, increase time and reduce speed. That is the universal fix.",
        },

        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** It is night, raining, and traffic is dense. What is the smartest adjustment?",
        },
        {
          type: "text",
          value:
            "**Answer:** Reduce speed, increase following distance, and avoid unnecessary lane changes.",
        },
        {
          type: "text",
          value:
            "Why: You are not solving one problem. You are managing multiple risks at once. Stability beats speed every time.",
        },

        {
          type: "callout",
          variant: "info",
          value:
            "Good drivers don’t rely on reactions. They reduce the need for reactions.",
        },
      ],
    },
  ],
};