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
            "Driving ability depends on performance, not age. Physical changes can happen gradually, so the priority is to notice them early and adjust your driving habits.",
        },
        {
          type: "text",
          value: "Focus on these areas:",
        },
        {
          type: "list",
          items: [
            "**Sight**: Reduced night vision and slower glare recovery can make hazards harder to see.",
            "**Hearing**: You may miss horns, sirens, or warning sounds.",
            "**Judgment**: Complex traffic decisions may take longer.",
            "**Reflexes**: Response time to sudden events can slow down.",
          ],
        },
        {
          type: "text",
          value: "Action to take:",
        },
        {
          type: "list",
          items: [
            "Track where you feel delayed or uncertain.",
            "Choose lower-stress driving conditions when needed.",
            "Use vehicle features and refresher training to compensate.",
          ],
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "list",
          items: [
            "**Performance First**: Safe driving is based on current ability in real traffic.",
            "**Physical Shifts**: Sight, hearing, judgment, and reflexes can change over time.",
            "**Compensation**: Adjust habits and vehicle setup to stay safe.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Insight\nWhat matters is how well you handle current traffic conditions, then adapt when your abilities change.",
        },
      ],
    },
    {
      id: "m6ch2_pg2",
      title: "Performance Assessment and Safe Adaptations",
      content: [
        {
          type: "text",
          value:
            "Now that we understand the balance of experience and aging, it is important to monitor your own driving ability regularly. Because changes happen slowly, they can be hard to notice unless you look for specific signs.",
        },
        {
          type: "text",
          value:
            "A self-assessment helps you identify when you might need to adjust your driving habits or take a refresher course.",
        },
        { type: "heading", value: "Common Mistakes" },
        {
          type: "list",
          items: [
            "**Ignoring \"Surprise\" Events**: Being frequently surprised by pedestrians or other vehicles.",
            "**Hesitation**: Feeling unsure about right-of-way decisions you once handled easily.",
            "**Getting Lost**: Losing your way on familiar routes or feeling nervous in traffic.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Listen to Feedback\nIf you receive negative feedback from other drivers (like honking) or find yourself at fault in minor collisions, treat these as critical signals to assess your driving performance.",
        },
        {
          type: "text",
          value:
            "Once you identify areas that challenge you, the next step is to adapt your driving environment to fit your needs. You can significantly reduce your risk by choosing when and where you drive.",
        },
        {
          type: "text",
          value:
            "Adaptive driving is about working smarter, not harder. By avoiding high-stress situations, you can continue to enjoy the freedom of mobility safely.",
        },
        { type: "heading", value: "Restrictions" },
        {
          type: "list",
          items: [
            "**Daylight-Only**: Limit trips to daytime if you have difficulty seeing at night.",
            "**Avoid Rush Hour**: Schedule errands when traffic is light to reduce stress and complexity.",
            "**Fair Weather**: Stay off the road during adverse weather like heavy rain or snow.",
            "**Simple Routes**: Choose well-marked, well-lit roads with easy-to-reach parking.",
          ],
        },
      ],
    },
    {
      id: "m6ch2_pg3",
      title: "Proactive Safety",
      content: [
        {
          type: "text",
          value:
            "Adaptive driving habits are enhanced when you use the right tools and keep your skills sharp. Choosing a vehicle that fits your physical needs and taking refresher courses are great ways to stay proactive.",
        },
        {
          type: "text",
          value:
            "Modern technology and specialized training can help you maintain your independence for as long as possible.",
        },
        { type: "heading", value: "How It Works" },
        {
          type: "list",
          items: [
            "**Refresher Courses**: Programs like the \"55 Alive\" course help update your knowledge on traffic laws and new technology.",
            "**Vehicle Choice**: Selecting a car with adjustable seats, large mirrors, and legible instruments makes driving more comfortable and safe.",
            "**Health Checks**: Regular eye exams and discussions with your doctor about medication side effects are essential for safe driving.",
          ],
        },
        {
          type: "imagePlaceholder",
          prompt:
            "Driver's-seat POV showing large side and rearview mirrors and a well-lit, legible dashboard instrument panel.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Refresher Benefits\nCourses like \"55 Alive\" identify bad habits and build confidence by teaching you how to anticipate other drivers' actions.",
        },
      ],
    },
    {
      id: "m6ch2_pg4",
      title: "Summary",
      content: [
        {
          type: "text",
          value:
            "Safe driving is a lifelong journey of adaptation. By balancing your years of experience with regular self-monitoring and smart adjustments to your habits, you can maintain your independence and safety on the road.",
        },
      ],
    },
  ],
};
