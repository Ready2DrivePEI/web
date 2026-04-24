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
        { type: "heading", value: "🧠 The Danger of a Distracted Mind" },
        {
          type: "text",
          value:
            "Driving demands full attention. The handbook treats distraction seriously because a driver who is looking at a screen, arguing with a passenger, or mentally drifting is no longer reading the road in real time. That delay is enough to miss a hazard, a pedestrian, a braking vehicle, or a lane change that should have been predictable.",
        },
        {
          type: "text",
          value:
            "Distraction is not only about the eyes. It can be visual, manual, or mental. Looking away from the road, taking your hands off the wheel, or letting your mind leave the task can each create the same result: reduced reaction time and bad decisions.",
        },
        {
          type: "text",
          value:
            "Aggressive driving usually grows out of that same overload. A stressed or angry driver tends to tailgate, speed, cut across lanes, or brake too late. The body is still in the seat, but the judgment is already somewhere else.",
        },
        {
          type: "heading",
          value: "How to Prevent Distractions",
        },
        {
          type: "list",
          items: [
            "Prepare before moving, not while driving. Set mirrors, route, music, and climate controls while parked.",
            "Do personal grooming before you start the vehicle.",
            "Secure children and pets so they do not create sudden movement or noise that pulls your attention away.",
            "Eat only when stopped in a safe place, because dropped food causes instant glance-away behaviour.",
            "If stress, anger, or confusion starts building, pull over and reset before continuing.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Most distractions are choices, not accidents. Good drivers remove the temptation before it gets a chance to become a mistake.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A driver looking at their phone while the car ahead brakes suddenly, showing the missed reaction and near collision.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are driving and a passenger starts a stressful argument. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Do not continue the argument. Focus on driving, and if needed, safely pull over before dealing with the conversation.",
        },
        {
          type: "text",
          value:
            "Why: Emotional distraction is still distraction. The road does not care whether the problem is a phone, a sandwich, or a dramatic verbal knife fight in the front seat.",
        },
        {
          type: "heading",
          value: "Hand-Held Cell Phone Ban",
        },
        {
          type: "text",
          value:
            "The handbook’s rule is simple: do not use a hand-held device while driving. That includes texting, calling, searching, or interacting with a device in a way that takes your attention or hands away from the task of driving. The right time to handle the phone is when the vehicle is safely stopped and you are not actively driving.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: thinking a red light makes phone use harmless. You are still part of traffic flow and still expected to stay alert.",
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
        { type: "heading", value: "💊 How Substances Affect Your Driving Abilities" },
        {
          type: "text",
          value:
            "Alcohol and drugs alter the exact systems that driving depends on: judgment, reaction time, visual processing, coordination, and self-control. That means impairment is not a vague problem. It directly attacks the skills used to keep a vehicle in a safe path.",
        },
        {
          type: "text",
          value:
            "Alcohol is especially dangerous because it reduces inhibition. The driver feels more confident while becoming less accurate, which is a terrible combination. The mind gets noisier while the control gets worse.",
        },
        {
          type: "text",
          value:
            "Drug impairment is equally serious. Prescription medication, over-the-counter medicine, and illegal substances can all affect alertness, decision-making, and coordination. Mixing substances makes the result worse, not better.",
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "list",
          items: [
            "Slower reaction time means the vehicle travels farther before braking begins.",
            "Reduced vision makes it harder to judge distance, movement, and lane position.",
            "Weaker judgment increases risky choices like speeding, tailgating, and poor gap selection.",
            "Prescription and over-the-counter medication can also impair driving ability.",
          ],
        },
        {
          type: "heading",
          value: "The Multiplier Effect of Mixing Substances",
        },
        {
          type: "text",
          value:
            "Mixing alcohol with drugs is especially dangerous because the effects do not simply add up. They amplify each other. That means even a small amount of one substance can become much more dangerous when paired with another.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You took medication that makes you drowsy and now you are considering a drive. What is the correct decision?",
        },
        {
          type: "text",
          value:
            "**Answer:** Do not drive until you know the medication does not impair you. If there is any doubt, do not drive.",
        },
        {
          type: "text",
          value:
            "Why: Driving requires stable attention and quick response. Drowsiness, slow reactions, and fuzzy judgment are the opposite of what a safe driver needs.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: trusting how you feel instead of what the medicine label or pharmacist says. Feelings are unreliable. Physics is not.",
        },
      ],
    },
    {
      id: "m4ch1_pg3",
      title: "Severe Penalties, Zero Tolerance, and Drag Racing",
      content: [
        { type: "heading", value: "⚖️ The Legal Consequences of High-Risk Choices" },
        {
          type: "text",
          value:
            "The handbook makes it clear that dangerous driving behaviour is not treated casually. The point of enforcement is not to be dramatic. It is to remove unsafe drivers before they injure someone else.",
        },
        {
          type: "text",
          value:
            "Impaired driving, excessive speed, and street racing all create the same final result: a driver loses control faster than other road users can react. The law treats these choices seriously because the crash consequences are often immediate and severe.",
        },
        {
          type: "heading",
          value: "Key Concepts",
        },
        {
          type: "list",
          items: [
            "Impaired driving can lead to immediate suspension, fines, and longer-term penalties.",
            "Short-term suspensions can apply even when a driver is below the criminal threshold.",
            "Zero tolerance applies to novice and young drivers in the GDL program.",
            "Aggressive, competitive, or stunt-style driving is a public-road hazard, not a skill badge.",
          ],
        },
        {
          type: "heading",
          value: "Drag Racing and Aggressive Driving",
        },
        {
          type: "text",
          value:
            "Drag racing on public roads is not driving skill. It is a collision waiting for an audience. Rapid acceleration, chasing another car, and treating traffic like a game all reduce time and space to zero in a hurry.",
        },
        {
          type: "text",
          value:
            "Aggressive driving includes tailgating, unsafe passing, cutting people off, weaving through traffic, and driving too fast for conditions. These behaviours are not separate sins. They are all versions of the same problem: the driver is trying to dominate the road instead of sharing it.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** Another driver speeds up beside you and challenges you to race. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Do not engage. Maintain your speed, stay calm, and let the other driver leave the scene of their own bad idea.",
        },
        {
          type: "text",
          value:
            "Why: Competitive driving on public roads is stupid, expensive, and dangerous. The goal is not to win a social contest. The goal is to arrive without becoming a headline.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: matching the other driver’s ego. The road is not the place to prove you have a pulse and a throttle.",
        },
      ],
    },
    {
      id: "m4ch1_pg4",
      title: "Speed, Following Distance, and Lane Discipline Under Pressure",
      content: [
        {
          type: "text",
          value:
            "Speeding becomes far more dangerous when combined with tailgating, lane rushing, and distraction. A driver who is too close, too fast, and too emotionally invested has almost no room to recover from a mistake.",
        },
        { type: "heading", value: "Why Tailgating Is a Bad Trade" },
        {
          type: "text",
          value:
            "Following too closely does not make traffic go faster in any useful way. It only removes your braking buffer. If the vehicle ahead slows suddenly, you inherit the problem with less time, less space, and more panic.",
        },
        {
          type: "text",
          value:
            "The handbook’s safe-driving logic is built around keeping enough distance to stop in the assured clear distance ahead. That is why the 3-second rule matters so much. It is not a ritual. It is your survival margin.",
        },
        { type: "heading", value: "Lane Changes Under Pressure" },
        {
          type: "text",
          value:
            "Aggressive drivers often make repeated lane changes because they believe the next lane is magically faster. In reality, each lane change adds risk, especially if the driver has not checked mirrors, signalled properly, and shoulder checked.",
        },
        {
          type: "list",
          items: [
            "Check mirrors first.",
            "Signal early enough for others to react.",
            "Shoulder check before moving.",
            "Only change lanes when the move is safe and necessary.",
          ],
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are frustrated by slow traffic and keep jumping lanes to “make progress.” What is the real problem?",
        },
        {
          type: "text",
          value:
            "**Answer:** The problem is impatience, not traffic.",
        },
        {
          type: "text",
          value:
            "Why: Lane hopping rarely saves meaningful time, but it does increase the chance of collision. A calm driver usually reaches the destination more safely than a restless one.",
        },
      ],
    },
    {
      id: "m4ch1_pg5",
      title: "Night, Winter, and Low-Traction Risk Compounds",
      content: [
        {
          type: "text",
          value:
            "Bad conditions multiply the danger created by distraction and impairment. At night, in rain, in snow, or on slippery surfaces, the road gives you less information and less grip. That means every poor choice has a larger penalty.",
        },
        { type: "heading", value: "Night Driving and Visibility" },
        {
          type: "text",
          value:
            "The handbook explains that night driving is more dangerous because the distance you can see ahead is reduced. That means you must reduce speed so you do not over-drive your headlights. If you cannot stop within the visible area ahead, you are already driving too fast for the situation.",
        },
        {
          type: "heading",
          value: "Winter Driving and Skid Risk" },
        {
          type: "text",
          value:
            "In winter, the problem is not just snow. Black ice, bridge surfaces, shaded pavement, and cold tires all reduce traction. That means a gentle steering movement and a calm brake input matter more than bravery.",
        },
        {
          type: "heading",
          value: "Hydroplaning and Rain",
        },
        {
          type: "text",
          value:
            "You already learned how hydroplaning works. The real danger here is behavioral: drivers continue at high speed, follow too closely, or react aggressively in rain, which turns a manageable loss of traction into a full loss of control",
        },
        {
  type: "text",
  value:
    "By the time the vehicle begins to glide, the outcome is already decided by earlier choices. Safe drivers prevent hydroplaning by reducing speed early and increasing following distance, not by reacting after it starts.",
},
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** It is dark, rainy, and you are following traffic too closely. What should you change first?",
        },
        {
          type: "text",
          value:
            "**Answer:** Slow down and increase following distance immediately.",
        },
        {
          type: "text",
          value:
            "Why: Night reduces visibility, rain reduces grip, and close following removes reaction time. Stack enough of those together and even a good driver starts losing options.",
        },
      ],
    },
    {
      id: "m4ch1_pg6",
      title: "Summary: The Calm Driver Wins",
      content: [
        {
          type: "text",
          value:
            "High-risk driving is rarely one single mistake. It is usually a chain: distraction leads to a late reaction, late reaction leads to tailgating, tailgating leads to panic, and panic leads to collision. The answer is not bravado. The answer is control.",
        },
        {
          type: "heading",
          value: "The Core Rule Set",
        },
        {
          type: "list",
          items: [
            "Drive with full attention.",
            "Do not drive after drinking or using impairing drugs.",
            "Do not race, weave, or tailgate.",
            "Reduce speed when conditions get worse.",
            "Increase time and space when risk increases.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "The safest driver is not the loudest, fastest, or most confident. The safest driver is the one who stays boring when the road tries to provoke them.",
        },
      ],
    },
  ],
};