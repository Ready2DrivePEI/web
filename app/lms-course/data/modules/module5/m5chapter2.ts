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
      title: "Motorcycles, Mopeds, and the Basic Rules",
      content: [
        {
          type: "text",
          value:
            "Motorcycles and mopeds are part of the Highway Traffic Act of Prince Edward Island. That matters because these vehicles are not treated like toys, scooters, or off-road machines. On public roads, they must be treated like real traffic vehicles with real legal duties.",
        },
        {
          type: "text",
          value:
            "A motorcycle is a motor vehicle with a saddle or seat for the rider and is designed to travel with not more than three wheels. A moped, also called a motor-assisted bicycle, is similar but smaller and less powerful. A moped travels at speeds up to 50 km/h. Motor scooters are included in the motorcycle definition and are governed by the same regulations.",
        },
        {
          type: "text",
          value:
            "You must be licensed to drive a motorcycle or moped on a public street or highway. The reason is simple: these vehicles demand balance, judgment, and fast control. If you do not know the machine, the road can punish you quickly.",
        },
        {
          type: "heading",
          value: "What the law expects from a rider",
        },
        {
          type: "list",
          items: [
            "Wear approved protective headgear.",
            "Know and follow the rules of the road.",
            "Sit on the regular seat, not on the handlebars or foot pegs.",
            "Carry only as many passengers as the motorcycle was designed to carry.",
          ],
        },
        {
          type: "heading",
          value: "Choosing the right motorcycle",
        },
        {
          type: "text",
          value:
            "Picking the wrong bike is a common beginner mistake. A motorcycle that is too small may not have enough power to maintain highway speed, and it may feel unstable at higher speeds. A motorcycle that is too big may be difficult to control. The right bike should fit your body and your planned type of riding.",
        },
        {
          type: "list",
          items: [
            "You should be able to place one foot flat on the ground while straddling the upright bike.",
            "You should be able to push, park, and place the bike on its stand without straining.",
            "You should be able to reach and use the controls comfortably without stretching.",
            "You should be able to lift the motorcycle by the handlebars if it is lying on its side, if possible with the front wheel locked.",
            "You should choose a motorcycle designed for the kind of riding you plan to do.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Mental model: a motorcycle should feel like it fits you, not like you are wrestling a metal animal. If it feels oversized on day one, it will not magically become obedient on day two.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A rider straddling a properly sized motorcycle with one foot flat on the ground, arms slightly bent, showing correct fit and comfortable control reach.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A learner is looking at a bike that feels tall and heavy while standing still.",
              "What should they think about before buying it?",
              "They should check whether they can control, park, and support it comfortably, not just whether they like the look of it.",
            ],
            [
              "A rider wants to use a motorcycle for highway travel, but the bike feels weak at higher speed.",
              "What is the risk?",
              "It may lack the power and stability needed for safe highway riding.",
            ],
          ],
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
            "Before a motorcycle can be ridden legally and safely, it must have the required equipment in working order. This is not paperwork for the sake of paperwork. Every item listed here reduces a real crash risk, even if the benefit is not obvious when the bike is parked in the driveway.",
        },
        {
          type: "heading",
          value: "Required motorcycle equipment",
        },
        {
          type: "list",
          items: [
            "Brakes capable of being operated on not fewer than two wheels.",
            "At least one headlight, and not more than two headlights, that must be on when the motorcycle is being driven.",
            "One rear lamp and brake light. They may or may not be the same light.",
            "A well-lit licence plate.",
            "A muffler in good working order.",
            "Securely fastened handlebars that do not exceed 0.3 metres, or 12 inches, in height measured vertically from the point of attachment at the frame.",
            "Foot rests for the operator and passenger, where the motorcycle is built for a passenger.",
            "A left side rear-view mirror that gives a view of the highway at least 60 metres, or 200 feet, to the rear and is not less than 75 mm in size.",
            "A horn that can be heard at 60 metres, or 200 feet.",
            "Turn signal lights with amber lights on the front and amber or red lights on the rear.",
            "Annual motorcycle inspection.",
          ],
        },
        {
          type: "heading",
          value: "Why the protective gear matters",
        },
        {
          type: "text",
          value:
            "Motorcyclists have less physical protection than people in cars. There is no seat belt, no metal box, and no airbag around you. That means your clothing and gear become part of the safety system.",
        },
        {
          type: "list",
          items: [
            "Helmet: required for both rider and passenger. It must be approved by DOT, CSA, ANSI, or SNELL.",
            "Eye protection: goggles, glasses, or a clear face shield are recommended, even behind a windshield.",
            "Clothing: leather is best, but heavy nylon or denim is acceptable. Avoid loose flaps, laces, and ballooning fabric.",
            "Boots: sturdy, high enough to protect the ankles, with hard soles and good tread.",
            "Gloves: help with grip, warmth, and control.",
            "Bright colours and reflective tape: help other road users see you earlier.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "A helmet that slips around your head, even with the chin strap done up, is not doing its job properly. Snug fit matters because impact protection depends on the helmet staying where it belongs.",
        },
        {
          type: "text",
          value:
            "Eye protection is not optional in practice, even where a windshield is present. Wind, rain, bugs, and debris can blur vision or force a rider to blink at the wrong moment. That tiny moment can be enough for a crash.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A helmet, goggles, gloves, boots, and reflective jacket arranged beside a motorcycle to show essential motorcycle safety gear.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A rider wants to use a scratched face shield at night.",
              "Why is that a bad idea?",
              "Scratches reduce visibility and can distort light, making it harder to see hazards clearly.",
            ],
            [
              "A passenger has no helmet but the ride is short.",
              "Can they still ride?",
              "No. Approved helmets are required for both rider and passenger.",
            ],
          ],
        },
      ],
    },
    {
      id: "m5ch2_pg3",
      title: "Pre-Ride Checks and Body Position",
      content: [
        {
          type: "text",
          value:
            "A motorcycle can react fast, but it also punishes neglect fast. Before every ride, do a quick mechanical check. The point is not perfection. The point is to catch a problem before the road turns it into a rescue operation.",
        },
        {
          type: "heading",
          value: "Bike check before riding",
        },
        {
          type: "list",
          items: [
            "Tires: check pressure with an air gauge every day before riding. Look for cracks, cuts, bulges, and tread wear.",
            "Nuts, bolts, and cotter pins: vibrations may loosen them, so check them regularly.",
            "Horn: test it.",
            "Cables: look for worn, frayed, kinked, or broken strands. Make sure the throttle returns to idle when released. Check clutch cable adjustment.",
            "Brakes: test the front and rear brakes separately.",
            "Lights: confirm the headlight high beam, low beam, turn signals, and brake lights work.",
            "Chain, drive belt, or drive shaft: check and maintain according to the owner’s manual.",
            "Mirrors: keep them clean and properly adjusted before starting.",
            "Gas, water, and oil levels: check for leaks and low levels before riding.",
          ],
        },
        {
          type: "text",
          value:
            "This check matters because a motorcycle has less margin for failure than a car. A worn tire, sticky throttle, or weak brake is not just a maintenance issue. It can become a control issue in seconds.",
        },
        {
          type: "heading",
          value: "How to sit and hold the motorcycle",
        },
        {
          type: "list",
          items: [
            "Sit far enough forward that your arms are slightly bent when holding the grips.",
            "Hold the grips lightly but firmly.",
            "Use the wrist-down method to reduce accidental throttle input.",
            "Hold your knees firmly against the gas tank to help balance in turns.",
            "Keep your feet on the footrests while moving and keep your toes up.",
            "Look in the direction you want to go. Do not look down.",
          ],
        },
        {
          type: "text",
          value:
            "Your riding posture is not cosmetic. It is control geometry. Bent arms, firm knees, and feet on the pegs help the bike and body work as one unit instead of fighting each other.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Mirrors help, but they do not replace a shoulder check. Mirrors can miss blind spots, and objects in them may be closer than they look.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "The throttle does not return cleanly when released.",
              "Why is that dangerous?",
              "A sticky throttle can keep power on when the rider expects none, which can cause loss of control.",
            ],
            [
              "A rider checks mirrors but never looks over the shoulder.",
              "What is the problem?",
              "Blind spots may hide vehicles that mirrors do not show.",
            ],
          ],
        },
      ],
    },
    {
      id: "m5ch2_pg4",
      title: "Starting Off, Hills, and Shifting Gears",
      content: [
        {
          type: "text",
          value:
            "Starting and stopping are the places where beginners most often lose control. Why? Because low speed is where balance matters the most, and the throttle, clutch, and brakes all need to work together smoothly.",
        },
        {
          type: "heading",
          value: "Starting off safely",
        },
        {
          type: "list",
          items: [
            "Make sure the front wheel is not locked.",
            "Adjust the rear-view mirror.",
            "Turn on the gas.",
            "Warm up the engine and let it run smoothly.",
            "Turn on the lights.",
            "Check that the area is clear of children, pedestrians, other traffic, and obstacles before moving off.",
          ],
        },
        {
          type: "text",
          value:
            "Before pulling away, use the mirror but do not rely on it alone. Look over both shoulders to check the parts of the road that the mirror cannot show. Many car drivers have trouble seeing motorcycles and may pull out in front of you, so your job is to ride as if invisibility is always the default risk.",
        },
        {
          type: "heading",
          value: "Starting on a hill",
        },
        {
          type: "list",
          items: [
            "Use the front brake to hold the motorcycle while starting the engine and shifting into first gear.",
            "Change to the foot brake to hold the cycle while you use the throttle with your right hand.",
            "Open the throttle a little bit for more power.",
            "Slowly release the clutch and rear brake as you apply more throttle.",
            "Release the foot brake when the engine begins to slow as the clutch takes hold.",
          ],
        },
        {
          type: "text",
          value:
            "The risk on a hill is rollback or stalling. The machine wants to move in one direction, gravity wants to drag it backward, and the rider must balance both forces without panic.",
        },
        {
          type: "heading",
          value: "Shifting gears and downshifting",
        },
        {
          type: "text",
          value:
            "Smooth, timely shifting reduces wear and helps you stay in control. Always be in the correct gear for your speed, whether speeding up or slowing down. The wrong gear can make the bike lurch, strain the engine, or create a skid.",
        },
        {
          type: "list",
          items: [
            "Close the throttle when downshifting.",
            "Squeeze the clutch lever and open the throttle slightly with a firm, positive motion.",
            "Push down the gear-change pedal as far as it will go and release it.",
            "Release the clutch fully but gradually while applying more throttle to match engine speed.",
            "Shift down through all gears as you slow or stop so you can accelerate quickly if needed.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Do not shift gears in a turn except in an emergency. A sudden change in power to the rear wheel can cause a lock or spin, which can start a skid.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A beginner gives too much throttle while starting on a hill.",
              "What may happen?",
              "The motorcycle may jump forward, wheelie slightly, or become hard to control.",
            ],
            [
              "A rider is cornering and realizes they are in the wrong gear.",
              "What is the safest choice?",
              "Avoid shifting in the turn unless it is an emergency. Shift before entering the turn next time.",
            ],
          ],
        },
      ],
    },
    {
      id: "m5ch2_pg5",
      title: "Turns, Counter-Steering, Braking, and Skids",
      content: [
        {
          type: "text",
          value:
            "Turning a motorcycle is not just steering. At higher speeds, the bike must lean. That lean is not decoration. It is the machine’s way of balancing the outward push that happens in a corner.",
        },
        {
          type: "heading",
          value: "Turning at different speeds",
        },
        {
          type: "text",
          value:
            "At less than 20 km/h, you can steer by turning the front wheel in the direction you want to go. This needs careful clutch and throttle control and good balance.",
        },
        {
          type: "text",
          value:
            "At speeds greater than 20 km/h, you must lean with the motorcycle and use counter-steering, also called push steering. To turn right, push forward on the right handlebar grip. To turn left, push forward on the left grip. The motorcycle will lean in that direction and turn with it.",
        },
        {
          type: "list",
          items: [
            "Use a light but firm grip on the handlebars.",
            "Lean in the direction of the turn.",
            "Gradually roll on the throttle through the turn.",
            "Maintain steady speed or accelerate gradually.",
            "Avoid slowing down while in the turn.",
            "Accelerate slightly and use push steering to straighten the bike as you come out of the turn.",
          ],
        },
        {
          type: "text",
          value:
            "Most rider mistakes happen because they enter a corner too fast. Slow down before the corner, look through it in the direction you are turning, and let the bike settle before asking more of it.",
        },
        {
          type: "heading",
          value: "Braking and stopping",
        },
        {
          type: "text",
          value:
            "Most motorcycles have two brakes that are operated independently. When stopping, use both front and rear brakes at the same time. The front brake provides about 75% of the braking power in most situations, but at low speeds it may cause a fall if used too aggressively.",
        },
        {
          type: "list",
          items: [
            "Downshifting as you brake helps use engine compression as additional braking.",
            "Brake carefully in turns or on slippery or rough roads.",
            "For maximum braking in a curve, straighten the bike upright and square the handlebars before firmly applying both brakes.",
            "Practise controlled stops in a safe, traffic-free area.",
            "Never ride with a brake partially applied.",
            "Keep at least three seconds of following distance behind the vehicle ahead.",
          ],
        },
        {
          type: "heading",
          value: "How to respond to skids",
        },
        {
          type: "text",
          value:
            "Skids usually come from driver error, such as turning too sharply, braking too hard, or accelerating too fast. Road conditions like loose sand, gravel, wet pavement, or other slippery surfaces make the mistake worse.",
        },
        {
          type: "list",
          items: [
            "If the front wheel locks, release the front brake immediately.",
            "If the rear wheel locks, keep it locked until you stop completely.",
            "If over-acceleration causes the skid, ease up on the throttle.",
            "Steer in the direction you want the front of the bike to go.",
            "If the skid is a slight rear-wheel skid from over-braking, steer in the direction of the skid and slowly let up on the brake.",
          ],
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A motorcycle leaning into a turn with a rider using counter-steering, showing the motorcycle angle and the direction of the push on the handlebars.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "The front wheel locks during a hard stop.",
              "What should the rider do first?",
              "Release the front brake immediately.",
            ],
            [
              "A rider enters a curve too fast and starts to slide.",
              "What caused the problem most likely?",
              "Entering the turn too fast, braking too hard, or improper throttle use.",
            ],
          ],
        },
      ],
    },
    {
      id: "m5ch2_pg6",
      title: "Road Position, Intersections, Lane Changes, and Passing",
      content: [
        {
          type: "text",
          value:
            "Motorcycles are smaller than most vehicles, so visibility is a constant problem. A safe rider does not just move through traffic. They manage space, predict mistakes, and make themselves easier to see.",
        },
        {
          type: "heading",
          value: "Maintaining a space cushion",
        },
        {
          type: "text",
          value:
            "Avoid staying beside other moving vehicles. They may drift or change lanes without warning. Keep a safe following distance. The closer you follow, the less time and space you have to react. Distance gives you three things: time, an escape path, and protection from panic stops.",
        },
        {
          type: "text",
          value:
            "Stay at least three seconds behind the vehicle ahead. At higher speeds or in poor road conditions, stay even farther back. If the vehicle behind you is following too closely, increase your own following distance so you can stop more gradually and reduce the chance of being rear-ended.",
        },
        {
          type: "heading",
          value: "Lane position",
        },
        {
          type: "text",
          value:
            "The left track of the lane is often recommended because it helps avoid the oil slick in the centre of the lane, improves visibility, and makes it harder for other drivers to share your lane. It also helps you see and be seen at junctions on the right.",
        },
        {
          type: "text",
          value:
            "Sometimes the centre or right part of the lane is the smarter choice. The point is not to pick one permanent position. The point is to position yourself where your space cushion is strongest.",
        },
        {
          type: "list",
          items: [
            "Do not ride in another driver’s blind spot.",
            "Do not hug the centre line or the curb.",
            "Do not try to share a lane with another vehicle.",
            "Use a lane position that clearly establishes your space.",
          ],
        },
        {
          type: "heading",
          value: "Intersections",
        },
        {
          type: "text",
          value:
            "Most motorcycle collisions happen at intersections. The two main causes are oncoming vehicles making left turns in front of a motorcycle and vehicles entering from side streets.",
        },
        {
          type: "list",
          items: [
            "Slow down before entering any intersection, even if you have the right-of-way.",
            "Be prepared to stop.",
            "Check your rear-view mirror so you know how close vehicles are behind you.",
            "Be ready to move to either side of your lane if needed.",
            "Do not assume the other driver has seen you until you get recognition from the driver.",
            "Do not try to squeeze past cars in your lane.",
          ],
        },
        {
          type: "text",
          value:
            "If you stall in the intersection and cannot restart, walk the motorcycle clear of traffic and out of the intersection. Put on the four-way flashers if the motorcycle has them.",
        },
        {
          type: "heading",
          value: "Changing lanes and passing",
        },
        {
          type: "text",
          value:
            "Avoid unnecessary lane changes. Every lane change adds risk. Plan ahead so that sudden movement is not forced on you.",
        },
        {
          type: "list",
          items: [
            "Check traffic ahead and behind.",
            "Look back quickly over your shoulder because mirrors do not show all blind spots.",
            "Signal properly.",
            "Look again and move only if it is safe.",
          ],
        },
        {
          type: "text",
          value:
            "When being passed, cooperate. It is illegal and dangerous to speed up. If needed, slow down slightly so the passing vehicle can return safely. When passing another vehicle yourself, only do it in a legal passing zone and only when safe. Do not pass near a hill crest, within an intersection, at a railway crossing, on a curve, on the shoulder, when traffic ahead is slowing for an unknown reason, or a vehicle that has stopped for a pedestrian.",
        },
        {
          type: "text",
          value:
            "It is illegal to go over the speed limit when passing another vehicle.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A motorcycle is beside a car for several seconds in traffic.",
              "Why is that risky?",
              "The car may move into the motorcycle’s lane without seeing it.",
            ],
            [
              "A driver in front slows down for no obvious reason.",
              "Should the rider rush to pass?",
              "No. That is a warning sign. Stay cautious and wait.",
            ],
            [
              "A rider is approaching an intersection and has the right-of-way.",
              "Should they still slow down?",
              "Yes. Right-of-way does not protect against another driver making a bad move.",
            ],
          ],
        },
      ],
    },
    {
      id: "m5ch2_pg7",
      title: "Passengers and Group Riding",
      content: [
        {
          type: "text",
          value:
            "Carrying a passenger changes everything. The motorcycle becomes heavier, slower to respond, and harder to stop. That means the rider must become more deliberate. A passenger is not cargo. The rider is legally responsible for their safety.",
        },
        {
          type: "heading",
          value: "Rules for passengers",
        },
        {
          type: "list",
          items: [
            "Do not carry a passenger until you are experienced in motorcycle operation.",
            "The passenger should sit as far forward as possible without crowding you.",
            "The passenger must sit still, especially during manoeuvres.",
            "The motorcycle must have a proper seat and foot pegs for the passenger.",
            "The passenger should wear the same protective equipment, eye protection, and clothing as the driver.",
            "The passenger must never get on or off without asking first.",
            "First-time passengers should begin at slow speeds in light traffic.",
          ],
        },
        {
          type: "text",
          value:
            "To adjust for passenger weight, operate at a slower speed, especially on corners, curves, or bumps. Begin slowing earlier before stopping. Allow a greater following distance. Look for larger gaps when crossing, entering, or merging with traffic.",
        },
        {
          type: "heading",
          value: "Group riding",
        },
        {
          type: "text",
          value:
            "Group riding is allowed, but the group has no special rights on the road. The group must still follow normal traffic rules.",
        },
        {
          type: "list",
          items: [
            "Use an experienced leader and place inexperienced riders behind the leader.",
            "Keep the group to four or five motorcycles when possible.",
            "Split larger groups into smaller groups.",
            "Never ride side by side in the same lane.",
            "Never ride side by side in separate lanes if it impedes traffic or reduces manoeuvrability.",
            "Use the three-second following rule.",
            "Plan the route so everyone knows where they are going.",
            "Let the last motorcycle set the pace.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Side-by-side riding in the same lane is illegal. In practice, it also makes the group larger, slower, and harder to escape with if trouble appears. Bad trade.",
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A passenger keeps shifting their body during a turn.",
              "Why is that a problem?",
              "It changes the bike’s balance and can disturb the rider’s control.",
            ],
            [
              "A group of eight motorcycles is riding together.",
              "What should happen?",
              "The group should split into smaller groups.",
            ],
          ],
        },
      ],
    },
    {
      id: "m5ch2_pg8",
      title: "Hazards, Night Riding, and Poor Weather",
      content: [
        {
          type: "text",
          value:
            "A careful rider does not just react to danger. They look ahead, spot the risk early, and reduce the chance of needing a panic move. Anticipation is the best defence on a motorcycle.",
        },
        {
          type: "heading",
          value: "Hazard awareness",
        },
        {
          type: "text",
          value:
            "Watch for children near the street, cars approaching from side roads, railway crossings, and road surfaces that change from pavement to loose gravel. A danger is rarely just one problem. Sometimes a second danger appears while avoiding the first.",
        },
        {
          type: "heading",
          value: "Night driving",
        },
        {
          type: "list",
          items: [
            "Cut your speed below daytime speed.",
            "Allow more following distance, about three or four seconds.",
            "Signal earlier and brake sooner.",
            "Do not pass unless necessary.",
            "Do not overdrive your headlights.",
            "Stay alert and stop if you are sleepy.",
            "Keep goggles, face shields, and windshields clean.",
            "Use clear untinted lenses at night.",
            "Make yourself visible with bright colours and reflective tape.",
            "Scan for animals near the roadside.",
          ],
        },
        {
          type: "heading",
          value: "Poor weather and dangerous surfaces",
        },
        {
          type: "text",
          value:
            "Wet pavement, gravel roads, mud, snow, ice, painted lane markings, and steel surfaces such as utility hole covers should be avoided if possible. If you must ride on them, slow down and use smooth, gentle inputs. Avoid sudden braking, sudden acceleration, and sudden gear changes.",
        },
        {
          type: "list",
          items: [
            "Keep a relaxed but firm grip on the handlebars.",
            "Keep your arms and wrists loose.",
            "Keep your feet on the pegs.",
            "If the front wheel weaves a little, let it.",
            "When crossing rough surfaces, try to meet obstacles head-on if possible.",
            "Cross railroad tracks at an angle by slowing first and going straight across them.",
            "Be careful of oil buildup in the centre of the lane. The left tire track is often safer.",
          ],
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "A deer is near the roadside at night.",
              "What should the rider do mentally?",
              "Slow down, scan ahead, and be ready for a sudden move from the animal.",
            ],
            [
              "The road becomes wet after the first few minutes of rain.",
              "Why is that especially dangerous?",
              "Road film and slick surfaces can make braking and turning less predictable.",
            ],
          ],
        },
      ],
    },
    {
      id: "m5ch2_pg9",
      title: "Emergency Control and Riding Summary",
      content: [
        {
          type: "text",
          value:
            "Emergency response on a motorcycle is a separate skill from normal riding. Under stress, simple, rehearsed actions help prevent panic and reduce crash severity.",
        },
        {
          type: "heading",
          value: "Sudden stops and other problems",
        },
        {
          type: "list",
          items: [
            "For a sudden stop, keep the bike upright and straight.",
            "Apply both brakes as hard as you can without locking either wheel.",
            "If the front wheel locks, release it immediately.",
            "If the rear wheel locks, keep it locked until fully stopped.",
            "If the front wheel is turned, brake gradually and emphasize the rear brake more.",
            "For a blowout, react quickly to keep your balance. A front blowout affects steering more; a rear blowout makes the bike sway side to side.",
            "For a stuck throttle, use the engine stop switch and clutch together, then the brakes.",
            "For wobble, do not brake and do not try to accelerate out of it. Grip firmly, gradually close the throttle, and pull off the road as soon as possible.",
            "For flying objects, stay focused on control and stop safely before dealing with the problem.",
          ],
        },
        {
          type: "heading",
          value: "Summary of riding tips",
        },
        {
          type: "list",
          items: [
            "Get professional driver training and practice in light traffic.",
            "Remember that motorcycle riders follow the same rules of the road as other motorists.",
            "Keep the headlight on at all times when riding.",
            "Use both brakes correctly and avoid overbraking.",
            "Watch for loose sand, gravel, or spilled fluids.",
            "Maintain lane position and use the three-second following rule.",
            "Look over your shoulder before changing lanes.",
            "Signal early and often.",
            "Keep your knees against the gas tank while moving.",
            "Do not overload the motorcycle.",
            "Wear approved helmets and protective clothing.",
            "Protect your eyes with a windshield, goggles, or face shield.",
            "Do not ride too long without rest.",
            "Be visible and drive defensively.",
            "Watch for sudden wind changes and slippery road conditions.",
            "Use a tire pressure gauge daily and keep tires at the manufacturer’s recommended pressure when cold.",
          ],
        },
        {
          type: "table",
          headers: ["Scenario", "Question", "Answer"],
          rows: [
            [
              "The motorcycle starts wobbling at speed.",
              "What should the rider avoid doing?",
              "Do not brake hard or try to accelerate out of it.",
            ],
          ],
        },
      ],
    },
  ],
};
