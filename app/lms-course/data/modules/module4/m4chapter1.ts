import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m4chapter1: Chapter = {
  id: "m4chapter1",
  title: "High-Risk Decisions: Distraction, Impairment, and Aggressive Driving",
  type: "lesson",
  slug: "high-risk-decisions-distraction-impairment-and-aggressive-driving",
  completed: false,
  lessons: [
    {
      id: "m4ch1_pg1",
      title: "Driving Distractions and Aggressive Behavior",
      content: [
        { type: "heading", value: "The Dangers of a Distracted Mind" },
        {
          type: "text",
          value:
            "Driving requires your full attention. When you take your eyes off the road, your hands off the wheel, or your mind off the task, the risk goes up instantly and you put yourself and others in serious danger. Set everything before you move. Adjust your mirrors, choose your music, and check your route while parked. Once the car is moving, your only job is driving.",
        },
        {
          type: "text",
          value:
            "Distractions aren't just physical. Engaging in emotionally charged conversations, whether with passengers or over a hands-free device, can easily lead to aggressive driving behaviors like tailgating and speeding.",
        },
        { type: "heading", value: "How to Prevent Distractions" },
        {
          type: "list",
          items: [
            "**Preparation**: Study your route map and complete your personal grooming (like applying makeup or fixing hair) before you start the car.",
            "**Passenger Control**: Secure children and pets to prevent distractions",
            "**Eating and Drinking**: If you drop food or a drink spills, your instinct is to look away from the road. So always pull over to eat.",
            "**Emotional State**: Avoid stressful conversations while driving. If you realize you are lost in thought or angry, pull over and take a break.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Most distractions happen by personal choices we make, not by accident. Avoid them before they happen.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A driver looking at their phone while the car ahead brakes suddenly, showing the missed reaction and near collision.",
        },
        { type: "heading", value: "Hand-Held Cell Phone Ban" },
        {
          type: "text",
          value:
            "In PEI, it is completely illegal to hold or use a wireless communication device while driving. This includes texting, dialing, chatting, emailing, or searching the internet. You are only permitted to use hands-free technology that activates with a single touch, or to call 911 in an emergency.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Cell Phone Penalties: Using a hand-held device like a phone, GPS, or laptop while driving will result in significant fines ranging from $250 to $400, plus the loss of 3 demerit points. If you need to text or dial, simply safely pull over and stop your vehicle first.",
        },
        { type: "heading", value: "Common Doubt" },
        {
          type: "text",
          value:
            "**Q: Can I quickly check a text at a red light?** A: No. You are still considered to be \"driving\" while stopped at a red light. You must be legally parked to handle your phone.",
        },
      ],
    },
    {
      id: "m4ch1_pg2",
      title: "Impaired Driving (Alcohol and Drugs)",
      content: [
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A side-by-side comparison showing two drivers approaching a stop. One reacts normally and stops in time, while the impaired driver reacts late and travels extra distance, nearly hitting an obstacle.",
        },
        { type: "heading", value: "How Substances Affect Your Driving Abilities" },
        {
          type: "text",
          value:
            "Alcohol and drugs fundamentally change how you think, behave, and physically respond behind the wheel. Alcohol remains a leading cause of traffic fatalities because it drastically reduces your reaction time, impairs your judgment, and weakens your vision.",
        },
        {
          type: "text",
          value:
            "Drug impairment is just as serious. Mood-altering (psychoactive) drugs, whether illegal, obtained via prescription, or bought over-the-counter, can severely impair your ability to safely operate a motor vehicle.",
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "list",
          items: [
            "**Slower Reaction Time**: An impaired driver's reaction time is slowed by 20%. At 50 km/h, this delay means your car travels 3.5 extra metres before your foot even touches the brake pedal.",
            "**Reduced Vision**: Alcohol restricts your ability to see clearly. It simulates driving with sunglasses on at dusk. Your eyes also take longer to recover from the glare of oncoming headlights.",
            "**Higher Collision Risk**: Drivers who drink and drive are involved in 10 times as many collisions as sober drivers.",
            "**Prescription Drugs**: Medications for depression, anxiety, or pain (like Valium or codeine) can also cause severe driving impairment.",
          ],
        },
        { type: "heading", value: "The Multiplier Effect of Mixing Substances" },
        {
          type: "text",
          value:
            "Mixing alcohol with drugs is especially dangerous because their effects don’t just add up, they multiply. Even small amounts combined can severely impair your judgment, reaction time, and coordination.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Mixing Alcohol and Drugs: Combining alcohol with medications can impair you far more than expected. Even small amounts can quickly make you unsafe to drive. Always check with a doctor or pharmacist, or avoid driving altogether.",
        },
      ],
    },
    {
      id: "m4ch1_pg3",
      title: "Severe Penalties, Zero Tolerance, and Drag Racing",
      content: [
        { type: "heading", value: "The Legal Consequences of High-Risk Choices" },
        {
          type: "text",
          value:
            "PEI has strict laws to remove dangerous drivers from the road immediately. Drinking and driving is a criminal offence that can lead to heavy fines, loss of your licence, increased insurance costs, and possible jail time.",
        },
        {
          type: "text",
          value:
            "Stunt driving and drag racing are treated just as seriously. Racing on a public street is an illegal, highly dangerous act that will result in the **immediate loss of your driving privileges**",
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "list",
          items: [
            "**90-Day Administrative Driving Prohibition (ADP)**: Immediate 90-day license suspension at roadside if charged with impaired driving",
            "**Short-Term Suspensions**: Even if you are below the criminal limit, having a Blood Alcohol Content (BAC) between .05 and .08 results in an immediate 24-hour suspension for a first offense.",
            "**License Cancellation**: 1 year (first offense), 3 years (second), 5 years (third)",
            "**Habitual Offenders**: Must complete alcohol/drug assessment before driving again",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Zero Tolerance Law: Drivers under 19 or in the GDL program must have ZERO alcohol. Any reading above zero results in an immediate suspension and further penalties.",
        },
        { type: "heading", value: "Summary" },
        {
          type: "text",
          value:
            "Distracted, impaired, or aggressive driving drastically increases your risk of a fatal collision. Operating a vehicle safely takes your full attention, a clear mind, and a calm attitude. High-risk choices like using your phone, drinking alcohol, or treating the highway like a racetrack carry immediate license suspensions and severe legal consequences. Always pull over to text, never mix substances when driving, and respect the strict Zero Tolerance rules if you are a new or young driver.",
        },
      ],
    },
  ],
};
