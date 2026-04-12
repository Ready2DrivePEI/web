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
            "There are three times as many fatal collisions at night than during the day in PEI. The reason is simple: your unlit visual field drops dramatically, meaning you have less time to see hazards and react.",
        },
        { type: "heading", value: "Over-Driving Your Headlights" },
        {
          type: "text",
          value:
            "If you drive so fast that your stopping distance is longer than the distance illuminated by your headlights, you are 'over-driving' your headlights. By the time you see a moose or a stalled car, it will physically be too late to stop.",
        },
        { type: "heading", value: "Headlight Rules" },
        {
          type: "list",
          items: [
            "You MUST dim your high beams within 150 metres of an oncoming vehicle.",
            "You MUST dim your high beams within 60 metres when following behind another vehicle.",
            "If an oncoming car blinds you with their high beams, look toward the right edge of the roadway to keep your lane position without being blinded.",
          ],
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
            "When roads are covered in snow or ice, it takes anywhere from 3 to 12 times more distance to stop compared to dry pavement. Your 3-second normal following distance is no longer enough.",
        },
        { type: "heading", value: "Sneaky Hazards" },
        {
          type: "list",
          items: [
            "Bridges Freeze First: Because cold air flows above and below bridge decks, they freeze into solid ice before the connecting highway does.",
            "Black Ice: This highly transparent ice forms when wet roads hit freezing temperatures. The road just looks slightly wet or dark, giving no warning before you lose traction.",
          ],
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A comparison image split in half. The left side shows a regular wet road. The right side shows 'Black Ice' which looks practically identical but has a car beginning to lose control.",
        },
      ],
    },
    {
      id: "m3ch3_pg3",
      title: "Skids and Braking Systems (ABS vs Non-ABS)",
      content: [
        { type: "heading", value: "Surviving a Skid" },
        {
          type: "text",
          value:
            "A skid happens when your tires lose traction with the road. The most important rule to remember: ease off the pedals and always steer gently in the direction the rear end is skidding.",
        },
        {
          type: "callout",
          variant: "danger",
          value:
            "Panic is your biggest enemy. Slamming on the brakes during a skid locks your wheels and turns your car into a heavy, unsteerable toboggan.",
        },
        { type: "heading", value: "How You Brake Depends on Your Car" },
        {
          type: "table",
          headers: ["Braking System", "Emergency Braking Strategy"],
          rows: [
            [
              "Standard Brakes (Non-ABS)",
              "Pump the brakes quickly but gently to avoid locking the wheels.",
            ],
            [
              "Anti-Lock Brakes (ABS)",
              "Apply steady, firm pressure to the pedal and hold it. The vehicle's computer will do the pumping for you rapidly. You can still steer.",
            ],
          ],
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
            "Roads are at their most slippery perfectly just after it begins to rain. This happens because the fresh water mixes with accumulated grease and oil on the asphalt, creating a highly slick film.",
        },
        { type: "heading", value: "Hydroplaning (Water Skiing)" },
        {
          type: "text",
          value:
            "As your speed increases on a completely wet road, your tires can start to ride on top of a film of water. In severe rain, complete loss of road contact can happen by 90 km/h.",
        },
        {
          type: "list",
          items: [
            "If you start to hydroplane, DO NOT hit the brakes or yank the steering wheel.",
            "Simply take your foot off the gas pedal and let the car naturally slow down until the tires cut back through the water to touch the pavement.",
          ],
        },
      ],
    },
  ],
};
