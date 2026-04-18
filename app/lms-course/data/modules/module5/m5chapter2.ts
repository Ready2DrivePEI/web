import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m5chapter2: Chapter = {
  id: "m5chapter2",
  title: "What Are Motorcycles and Mopeds?",
  type: "lesson",
  slug: "what-are-motorcycles-and-mopeds",
  completed: false,
  lessons: [
    {
      id: "m5ch2_pg1",
      title: "What Are Motorcycles and Mopeds?",
      content: [
        {
          type: "text",
          value:
            "Motorcycles and mopeds are governed by the Highway Traffic Act in Prince Edward Island, just like cars and trucks. A motorcycle is a motor vehicle with a saddle or seat, designed to travel on not more than three wheels. A moped (also called a \"motor-assisted bicycle\") is similar but smaller and less powerful ,  it travels at speeds up to 50 km/h. Motor scooters fall under the motorcycle definition and follow the same regulations.",
        },
        {
          type: "text",
          value:
            "You must be licensed to ride a motorcycle or moped on any public street or highway.",
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "list",
          items: [
            "**Choosing the right size**: A bike that's too small may lack highway power and feel unstable at speed. One that's too big can be hard to control. If the motorcycle fits you properly, you should be able to place one foot flat on the ground while straddling it, reach all controls without stretching, and push or park the bike on its stand without straining.",
            "**Passenger capacity**: You may only carry as many passengers as the motorcycle was designed and built to carry.",
            "**Seating rule**: You must sit on the regular seat ,  never on the handlebars or foot pegs.",
          ],
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A rider straddling a properly sized motorcycle with one foot flat on the ground, showing how the arms are slightly bent while holding the handlebars ,  illustrating correct fit.",
        },
      ],
    },
    {
      id: "m5ch2_pg2",
      title: "Required Equipment and Protective Gear",
      content: [
        {
          type: "text",
          value:
            "Beyond choosing the right bike, PEI law requires specific equipment on every motorcycle before it can legally be ridden on public roads.",
        },
        {
          type: "text",
          value:
            "Every motorcycle must have brakes on at least two wheels, at least one headlight that stays on whenever the motorcycle is being driven, a rear lamp and brake light, a muffler in good working order, turn signals, a horn audible from 60 metres, a left-side rear-view mirror, and foot rests for both rider and passenger (if equipped for a passenger). Handlebars must be securely fastened and cannot exceed 30 cm (12 inches) in height from their attachment point. An annual motorcycle inspection is also required.",
        },
        { type: "heading", value: "Rules to Remember" },
        {
          type: "list",
          items: [
            "**Helmet**: Required by law for both rider and passenger. It must be approved by DOT, CSA, ANSI, or SNELL. Replace any helmet that has been dropped, scraped, or damaged in a crash.",
            "**Eye protection**: Windshields deflect wind and debris but do not protect your eyes. Wear goggles, glasses, or a face shield even behind a windshield. Use only clear, untinted lenses at night.",
            "**Clothing**: Leather is best, but heavy nylon or denim is acceptable. Don't let flaps or laces dangle ,  they can catch in the controls. Avoid loose clothing that balloons in the wind.",
            "**Boots**: Sturdy, high enough to protect your ankles, with hard soles and a pronounced tread. They must let you properly operate the foot controls.",
            "**Gloves**: Keep your hands warm and give a better grip on the controls. Motorcycle-specific gloves are best.",
            "**Visibility**: Being seen can mean the difference between life and death. Wear bright colours (orange, red, yellow). Fluorescent colours and reflective tape on your motorcycle, helmet, and jacket are strongly recommended.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Helmet Fit Matters A helmet that slips around your head ,  even with the chin strap done up ,  may not protect you in a crash. It should be snug enough that it does not move when buckled.",
        },
      ],
    },
    {
      id: "m5ch2_pg3",
      title: "Pre-Ride Checks and Basic Riding Position",
      content: [
        {
          type: "text",
          value:
            "With the right gear on, the next step before every ride is a quick mechanical check ,  a failure on a motorcycle can instantly cause a loss of control.",
        },
        {
          type: "text",
          value:
            "Before each ride check:",
        },
        {
          type: "list",
          items: [
            "**Tires**: Use a gauge to check pressure daily when cold. Look for cracks, cuts, or bulges. Badly worn tires are dangerous, especially in wet weather.",
            "**Brakes**: Test the front and rear brakes separately to confirm each one works.",
            "**Lights**: Start the engine, confirm your headlight (high and low beam), turn signals, and brake light all function.",
            "**Horn**: Test it ,  it may save your life.",
            "**Cables**: Look for worn, frayed, or kinked strands. Make sure the throttle cable snaps back to idle when released. Check clutch cable adjustment.",
            "**Mirrors**: Clean them. Each should show about half the lane behind you and as much of the adjacent lane as possible. Adjust before starting ,  never while moving.",
            "**Fluids**: Check gas, water, and oil levels. Look for leaks underneath the bike. A seized motor can lock the rear wheel and cause a total loss of control.",
          ],
        },
        { type: "heading", value: "How It Works" },
        {
          type: "text",
          value:
            "Your body is the primary control system on a motorcycle:",
        },
        {
          type: "list",
          items: [
            "**Seat**: Sit forward enough so your arms are slightly bent at the handle grips, allowing full handlebar movement.",
            "**Hands**: Hold the grips lightly but firmly. Use the \"wrist down\" position to prevent accidentally applying too much throttle.",
            "**Knees**: Squeeze them firmly against the gas tank to help maintain balance during turns. Look in the direction you want to go ,  never look down.",
            "**Feet**: Keep them firmly on the footrests at all times while moving, with toes pointed up. Dropping your toes can get them caught between the road and footrest.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Objects in your mirrors may be closer than they appear. Never rely on mirrors alone ,  take a quick look over your shoulder before every turn or lane change.",
        },
      ],
    },
    {
      id: "m5ch2_pg4",
      title: "Turning, Shifting, and Counter-Steering",
      content: [
        {
          type: "text",
          value:
            "Once you're properly positioned on the bike, the way you steer, shift, and lean determines whether you stay in control through turns and speed changes.",
        },
        {
          type: "text",
          value:
            "**Low-speed steering (under 20 km/h):** You can turn the handlebars in the direction you want to go, relying on careful clutch-throttle coordination and balance.",
        },
        {
          type: "text",
          value:
            "**High-speed steering (above 20 km/h):** You must use counter-steering (also called push steering). At higher speeds, centrifugal force pushes the motorcycle outward in a turn. To counter this, push forward on the handlebar on the side you want to turn toward. Push right to turn right; push left to turn left. The bike leans inward, and the faster you go, the more you must lean.",
        },
        {
          type: "text",
          value:
            "Things to remember about turns:",
        },
        {
          type: "list",
          items: [
            "Use a light but firm grip on the handlebars.",
            "Lean in the direction of the turn.",
            "Maintain a steady speed or gradually accelerate through the turn ,  avoid slowing down mid-turn.",
            "Slow down before you reach the corner, not during it.",
          ],
        },
        {
          type: "text",
          value:
            "**Shifting gears** requires smooth clutch-throttle coordination. Always be in the correct gear for your speed, whether speeding up or slowing down. When downshifting, make sure you are going slowly enough before dropping into a lower gear ,  shifting too fast can lurch the motorcycle or lock the rear wheel.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Never Shift Gears in a Turn A sudden change in power to the rear wheel during a turn can cause it to lock or spin, creating a dangerous skid. Shift gears before entering a turn, not during one.",
        },
      ],
    },
    {
      id: "m5ch2_pg5",
      title: "Braking, Stopping, and Skids",
      content: [
        {
          type: "text",
          value:
            "Controlling your speed through turns is only half the picture ,  knowing how to stop safely under pressure is what keeps you alive in real traffic.",
        },
        {
          type: "text",
          value:
            "Most motorcycles have two independently operated brakes. When stopping, use both front and rear brakes at the same time. The front brake provides about 75% of your stopping power and should be used in most situations. However, at low speeds, using the front brake alone may cause a fall.",
        },
        { type: "heading", value: "Common Mistakes" },
        {
          type: "list",
          items: [
            "**Overbraking one or both wheels** is one of the most common causes of motorcycle skids.",
            "**If the front wheel locks**: release the front brake immediately, then carefully re-apply it. You cannot steer with a locked front wheel.",
            "**If the rear wheel locks**: keep it locked until you come to a complete stop. If the motorcycle is upright and moving in a straight line, you can still control it with the rear wheel locked. Releasing a locked rear brake while sideways can throw you off.",
            "**Braking in a curve**: For maximum braking in a curve, straighten the bike to the upright position and square the handlebars before firmly applying both brakes.",
            "**Riding with a partially applied brake**: This lights up your brake light, confusing other drivers, and wears your brakes unnecessarily.",
          ],
        },
        {
          type: "text",
          value:
            "Keep at least three seconds of following distance between you and the vehicle ahead. If a tailgater is behind you, increase your following distance even more ,  this lets you brake more gradually and avoids sudden stops that could get you rear-ended.",
        },
        {
          type: "text",
          value:
            "**Skids** are mostly caused by driver error: turning too sharply, braking too hard (usually the rear wheel), or accelerating too fast. Poor road surfaces like loose gravel or sand make these errors worse. A slight rear-wheel skid from over-braking can be corrected by steering in the direction of the skid and slowly releasing the brake.",
        },
        {
          type: "text",
          value:
            "Downshifting while braking uses engine compression to help slow the motorcycle. Always shift down through all gears as you stop, so you're ready to accelerate quickly if needed.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A diagram showing a motorcycle rider applying both brakes simultaneously, with labels indicating \"Front brake = ~75% stopping power\" and \"Rear brake = ~25% stopping power.\"",
        },
      ],
    },
    {
      id: "m5ch2_pg6",
      title: "Road Positioning and Intersections",
      content: [
        {
          type: "text",
          value:
            "Effective braking keeps you safe in emergencies, but smart road positioning prevents many of those emergencies from ever developing.",
        },
        {
          type: "text",
          value:
            "Motorcyclists are small and easy to overlook. Many car drivers involved in a collision with a motorcycle say they never saw it. Always assume other drivers do not know you are there and ride accordingly.",
        },
        {
          type: "text",
          value:
            "**Lane position:** The left tire track of the lane is generally the best place to ride because:",
        },
        {
          type: "list",
          items: [
            "It avoids the oil slick that forms in the centre of the lane from drippings of other vehicles.",
            "Oncoming drivers and drivers ahead can see you more easily.",
            "It discourages other motorists from trying to share your lane.",
            "You have a better view into road junctions on the right.",
          ],
        },
        {
          type: "text",
          value:
            "Sometimes, however, the centre or right portion of the lane is smarter ,  for example, to expand your space cushion from vehicles beside you.",
        },
        {
          type: "text",
          value:
            "Stay out of the other driver's blind spot. Ride where you are clearly visible in their rear-view mirror. Do not hug the centre line or curb, as it tempts other drivers to squeeze into the lane with you. Never try to share a lane with another vehicle, even to get around stopped traffic.",
        },
        {
          type: "text",
          value:
            "**Intersections** are where most motorcycle collisions happen. The two main causes are oncoming vehicles turning left in front of a motorcycle and vehicles entering from a side street. To protect yourself: slow down before entering any intersection even if you have the right-of-way, check your mirrors, never assume you have been seen until you get clear acknowledgment from the other driver, and be prepared to move to either side of your lane.",
        },
        {
          type: "text",
          value:
            "If you stall at an intersection and cannot restart, walk the motorcycle out of traffic and turn on your four-way flashers.",
        },
        {
          type: "text",
          value:
            "Q: Can I filter through lanes of stopped traffic on my motorcycle to save time?\nA: No. Do not try to squeeze past cars in your lane. You won't be expected, and you could be seriously hurt.",
        },
      ],
    },
    {
      id: "m5ch2_pg7",
      title: "Passengers, Group Riding, and Emergency Problems",
      content: [
        {
          type: "text",
          value:
            "Once you are comfortable handling your motorcycle alone in traffic, you may eventually carry a passenger or ride with a group ,  both of which change how the motorcycle behaves.",
        },
        {
          type: "text",
          value:
            "**Carrying a passenger** adds weight that changes how your motorcycle handles, turns, speeds up, and slows down. You are legally responsible for your passenger's safety. Both rider and passenger must wear approved helmets.",
        },
        {
          type: "text",
          value:
            "Before riding with a passenger:",
        },
        {
          type: "list",
          items: [
            "Make sure the motorcycle has a proper passenger seat and foot pegs.",
            "The passenger should sit as far forward as possible without crowding you, and must sit still, especially during manoeuvres.",
            "Tell your passenger to never get on or off without asking you first.",
            "The passenger needs the same protective gear as the driver.",
          ],
        },
        {
          type: "text",
          value:
            "To adjust for the added weight: ride at a slower speed on corners and curves, begin slowing down earlier for stops, allow a greater following distance, and look for larger gaps when merging or crossing traffic.",
        },
        {
          type: "text",
          value:
            "**Group riding** is allowed, but a riding group has no special rights on the road. Keep groups to four or five motorcycles ,  larger groups should split up. Never ride side by side in the same lane (it is illegal) or in separate lanes (it impedes traffic). Use the three-second following rule between motorcycles and let the last rider set the pace so nobody races to keep up.",
        },
        {
          type: "text",
          value:
            "**Emergency problems:**",
        },
        {
          type: "list",
          items: [
            "**Blowouts**: You may not hear a blowout, but you'll feel it. If the front tire goes flat, the steering feels heavy. If the rear goes flat, the back sways side to side. React quickly to maintain balance.",
            "**Stuck throttle**: If the throttle is stuck wide open, use the engine stop switch and clutch together, then apply the brakes. If it's stuck at normal speed, signal, find a safe spot, then use the engine stop switch and clutch, followed by brakes.",
            "**Wobble**: At high speeds, the front wheel may start shaking side to side. Do not brake and do not accelerate. Grip the handlebars firmly, gradually close the throttle, and pull off the road as soon as you can. Trying to accelerate out of a wobble makes it worse. Causes include unequal tire pressure, bent wheels, loose spokes, and riding too fast for the bike's design.",
            "**Dangerous surfaces**: Wet pavement, gravel, mud, ice, painted lane markings, and steel utility covers are all hazardous. Slow down, brake smoothly, and avoid sudden moves. On metal bridge gratings, don't fight the vibration ,  maintain a constant speed.",
          ],
        },
        { type: "heading", value: "Summary" },
        {
          type: "text",
          value:
            "Motorcycles and mopeds require a valid licence, proper equipment, and protective gear ,  especially an approved helmet. Before every ride, check your tires, brakes, lights, and fluids. Use counter-steering above 20 km/h, apply both brakes together when stopping, and always ride in a lane position where other drivers can see you. Most motorcycle collisions happen at intersections, so never assume you've been seen. When carrying a passenger, adjust your speed and stopping distance for the added weight. Stay calm during mechanical emergencies ,  a stuck throttle, wobble, or blowout each has a specific response that can save your life.",
        },
      ],
    }
  ],
};


