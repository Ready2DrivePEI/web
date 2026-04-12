import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m3chapter2: Chapter = {
  id: "m3chapter2",
  title: "Core Maneuvers and Safely Sharing the Road",
  type: "lesson",
  slug: "core-maneuvers-and-safely-sharing-the-road",
  completed: false,
  lessons: [
    {
      id: "m3ch2_pg1",
      title: "The Anatomy of Lane Changes and Passing",
      content: [
        { type: "heading", value: "Moving Lateral Safely" },
        {
          type: "text",
          value:
            "Whether you are changing lanes or passing another vehicle, the mechanics of moving sideways are the same. Your goal is to move only when you have guaranteed there is no one in your path.",
        },
        { type: "heading", value: "The Mirror-Signal-Shoulder Check" },
        {
          type: "list",
          items: [
            "Check Mirrors: Understand the traffic flow behind you.",
            "Signal: Activating your signal tells others what you want to do. It does NOT give you the right to move.",
            "Shoulder Check: You must physically turn your head to check your blind spot (the area your mirrors cannot see).",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Examiners will instantly notice if you rely only on mirrors. Failing to physically shoulder check before a lane change is a major error on your road test.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A diagram showing a car's mirrors and the red shaded 'blind spot' areas over the driver's left and right shoulders where another car can hide.",
        },
      ],
    },
    {
      id: "m3ch2_pg2",
      title: "Intersections, Turns, and Roundabouts",
      content: [
        { type: "heading", value: "Turning at Intersections" },
        {
          type: "text",
          value:
            "Turns are high-risk situations because paths cross. Always signal well in advance, check for pedestrians, and move into the correct lane before making the turn.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Why it matters: When turning left, keep your wheels perfectly straight while waiting for a gap. If you turn your wheels early and get rear-ended, you will be pushed directly into oncoming traffic.",
        },
        { type: "heading", value: "Mastering Roundabouts" },
        {
          type: "text",
          value:
            "Roundabouts keep traffic flowing safely counterclockwise. You must always yield to traffic already in the circle and pedestrians crossing the entry.",
        },
        {
          type: "list",
          items: [
            "Entering: Signal left if turning left. Signal right if turning right. Do not signal on entry if going straight.",
            "Exiting: You MUST ALWAYS signal right just before your exit. This lets waiting drivers know they can safely enter.",
            "Dual-Lanes: Never change lanes while inside a roundabout. Pick your lane before you enter.",
          ],
        },
      ],
    },
    {
      id: "m3ch2_pg3",
      title: "The Big Guys: School Buses and Heavy Trucks",
      content: [
        { type: "heading", value: "The Ultimate Yield: School Buses" },
        {
          type: "text",
          value:
            "Protecting children is the strictest rule on the road. When a school bus flashes alternating AMBER lights, it is preparing to stop. You must slow down and proceed with extreme caution.",
        },
        {
          type: "text",
          value:
            "When the bus stops and activates flashing RED lights, you MUST STOP entirely and remain stopped until the lights are deactivated. You must stop no less than 6 metres (20 feet) from the front or rear of the bus.",
        },
        { type: "heading", value: "Trucks and The 'No-Zones'" },
        {
          type: "text",
          value:
            "Heavy trucks and buses have massive blind spots where your car can completely vanish. These are called No-Zones.",
        },
        {
          type: "list",
          items: [
            "Side No-Zones: If you cannot see the truck driver's face in their side mirror, they cannot see you.",
            "Rear No-Zones: Trucks have no rear-view mirror. Sitting tight to a truck's bumper makes you invisible.",
            "Front and Turning No-Zones: Trucks need extra space to stop, and they make wide right turns. Never squeeze into the right side of a turning truck.",
          ],
        },
      ],
    },
    {
      id: "m3ch2_pg4",
      title: "Precision: Parking and Backing Up",
      content: [
        { type: "heading", value: "Moving in Reverse" },
        {
          type: "text",
          value:
            "Backing up requires your full physical attention because vehicles are not designed to be driven backwards seamlessly.",
        },
        {
          type: "list",
          items: [
            "You must actually turn your body and look out the rear window.",
            "Do not rely solely on mirrors or backup cameras. Mirrors distort distance, and cameras have blind spots.",
            "Always back up slowly—at walking speed—because steering reacts differently when going in reverse.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "On your road test, attempting to reverse while just staring at the dashboard backup camera will result in severe point deductions. You must look over your shoulder.",
        },
        { type: "heading", value: "Parking Safely" },
        {
          type: "text",
          value:
            "Whenever you park, whether parallel or angled, always secure your vehicle. Apply the parking brake, roll up windows, and lock the doors. If parking on a hill, turn your wheels so that if the brakes fail, the car will roll into the curb rather than traffic.",
        },
      ],
    },
  ],
};
