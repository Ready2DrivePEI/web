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
        {
          type: "text",
          value:
            "Most everyday driving mistakes happen when a driver tries to move sideways without fully reading the space around the vehicle. Lane changes and passing are not separate skills. They are the same problem in different clothing: you are trying to enter a space that someone else may already be using.",
        },
        { type: "heading", value: "Moving Laterally Safely" },
        {
          type: "text",
          value:
            "Whether you are changing lanes or passing another vehicle, the basic mechanics are the same. Your goal is to move only when you have confirmed the space is clear, the speed difference is safe, and your move will not force another road user to brake or swerve.",
        },
        { type: "heading", value: "The Mirror-Signal-Shoulder Check" },
        {
          type: "list",
          items: [
            "Check mirrors to understand the traffic flow behind you.",
            "Signal early so other drivers can predict your move.",
            "Shoulder check to physically inspect the blind spot your mirrors cannot see.",
            "Do not move until the lane is clear and your speed is matched to the traffic you are entering.",
          ],
        },
        {
          type: "text",
          value:
            "The handbook makes clear that lane changes require a rear-view mirror check, side-view mirror check, signal, and a shoulder check. Blind spots exist in the right and left rear corners, so mirrors alone are not enough. If your front bumper is even with, or past, your rear bumper in the other lane, that vehicle is in your blind spot zone and can disappear from mirror view.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Examiners will notice immediately if you rely only on mirrors. A shoulder check is not optional theatre. It is the difference between a clean lane change and a blind-side crash.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You have checked your mirrors, signalled, and the lane behind looks open. What must you still do before moving?",
        },
        {
          type: "text",
          value:
            "**Answer:** Turn your head and shoulder check the blind spot before changing lanes.",
        },
        {
          type: "text",
          value:
            "Why: A car or motorcycle can sit in the blind spot even when the mirrors look empty. Mirrors show the past and the sides poorly, shoulder checking catches the missing slice of reality.",
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A diagram showing a car's mirrors and the red shaded blind spot areas over the driver's left and right shoulders where another car can hide.",
        },
      ],
    },
    {
      id: "m3ch2_pg2",
      title: "Signals, Timing, and Hand Signals",
      content: [
        {
          type: "text",
          value:
            "Signalling is not a formality. It is a warning system. A proper signal gives others enough time to understand your intention and adjust their own movement without panic.",
        },
        { type: "heading", value: "Signals and Changing Lanes" },
        {
          type: "text",
          value:
            "The handbook requires drivers to signal before changing lanes, turning, pulling over to stop, pulling away from a parked position, and attempting to pass. After passing, you must also signal again before moving back into the right lane.",
        },
        {
          type: "text",
          value:
            "In city driving, signals should be given about 30 metres in advance of a turn or stop. On highways, where traffic moves much faster, signals should be given at least 150 metres in advance. The reason is simple: faster traffic needs more warning time, not less.",
        },
        {
          type: "heading",
          value: "Hand Signals",
        },
        {
          type: "text",
          value:
            "Even when a vehicle has working signal lights, a driver should know the proper hand signals. Signals can fail, bulbs can burn out, and weather can reduce visibility. A driver who knows hand signals is harder to confuse and easier to read.",
        },
        {
          type: "list",
          items: [
            "Left turn signal, arm out straight",
            "Right turn signal, arm bent upward",
            "Stop or slow signal, arm bent downward",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "A signal is a promise, not a demand. It tells others what you intend to do. It never gives you the right to do it unsafely.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You signal to change lanes, but the car behind you speeds up to close the gap. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Wait and do not force the lane change.",
        },
        {
          type: "text",
          value:
            "Why: A signal does not create right-of-way. If the gap closes, the move is no longer safe. Forcing it is ego, not driving.",
        },
      ],
    },
    {
      id: "m3ch2_pg3",
      title: "Turning at Intersections",
      content: [
        {
          type: "text",
          value:
            "Turns are high-risk because they concentrate movement into a small space where pedestrians, oncoming traffic, parked vehicles, and lane changes can all overlap. A rushed turn is often just a fancy name for a bad decision.",
        },
        { type: "heading", value: "Turning at Intersections" },
        {
          type: "list",
          items: [
            "Prepare for the turn before you get there.",
            "Get into the correct lane as early as possible.",
            "Look behind and on both sides before turning.",
            "Signal clearly before changing lanes or turning.",
            "Slow before the crosswalk if you are going too fast to make the turn safely.",
            "Finish the turn in the proper lane.",
          ],
        },
        {
          type: "text",
          value:
            "The handbook says not to have the brake or clutch pedal pushed down, and not to shift gears while actually turning, although you should be prepared to do so. The point is to avoid unstable vehicle control in the middle of the turn.",
        },
        {
          type: "heading", value: "Left Turns" },
        {
          type: "text",
          value:
            "Drivers making left turns must watch oncoming traffic, pedestrians in crosswalks, and any vehicle entering the intersection. Oncoming vehicles have the right-of-way even if you reached the turning point first.",
        },
        {
          type: "text",
          value:
            "If you are waiting to turn left, do not turn the steering wheel left until you are ready to complete the movement. If you are rear-ended while your wheels are already turned, your vehicle can be pushed into oncoming traffic. That is the kind of mistake that turns one impact into two.",
        },
        {
          type: "heading",
          value: "Right Turns on a Red Light",
        },
        {
          type: "text",
          value:
            "Unless a sign forbids it, a right turn on red is allowed only after a full stop, a scan for pedestrians and traffic, and a careful yield to anyone who already has the right-of-way. It is dangerous and illegal to roll into the turn without stopping first.",
        },
        {
          type: "heading",
          value: "Making U-Turns",
        },
        {
          type: "text",
          value:
            "U-turns are hazardous because they reverse the direction of travel across active traffic. They are only allowed in the places described by the handbook, and never where a sign prohibits them, at light-controlled intersections in a municipality, on curves, near hill crests, or anywhere the turn would interfere with other traffic.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: staring at the gap ahead and forgetting pedestrians or a vehicle already approaching from the side. Turning safely means scanning the whole picture, not worshipping one empty lane.",
        },
      ],
    },
    {
      id: "m3ch2_pg4",
      title: "Passing Other Vehicles and the Responsibilities of the Driver Being Passed",
      content: [
        {
          type: "text",
          value:
            "Passing is one of the easiest ways to create a head-on collision if it is done with arrogance or impatience. The road is not a race track, and the other vehicle is not a cone.",
        },
        { type: "heading", value: "Safe Passing Practices" },
        {
          type: "list",
          items: [
            "Keep a safe following distance before you attempt to pass.",
            "Do not pass in heavy traffic unless there is a safe and legal opening.",
            "Do not try to be first in line just to satisfy your ego.",
            "Never pull out to pass behind another vehicle that is also passing.",
            "Check your speed before, during, and after the pass.",
            "Signal your intention and sound your horn when required by law.",
          ],
        },
        {
          type: "text",
          value:
            "The handbook warns that high speeds and frequent passing go hand in hand. That is not a compliment. It is a pattern that leads to sideswipes, rear-end crashes, and head-on collisions.",
        },
        {
          type: "heading", value: "When You Must Not Pass" },
        {
          type: "list",
          items: [
            "At an intersection if you would need to cross a solid centre line.",
            "At any crosswalk or where a car has stopped for a pedestrian or other vehicle.",
            "In a school zone.",
            "On the right side of a vehicle unless the street has two or more lanes in the same direction.",
            "When there is not sufficient clear road ahead.",
            "In a posted no-passing zone.",
          ],
        },
        {
          type: "heading", value: "Responsibilities of Driver Being Passed" },
        {
          type: "list",
          items: [
            "Move to the right when the driver behind signals and sounds the horn.",
            "Do not change into a left lane until the passing vehicle is clear.",
            "Never speed up while being passed.",
            "Check ahead so you are not cut off by the passing vehicle.",
          ],
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You begin to pass, and another car ahead of you also moves out to pass. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Abort the pass if it is safe to do so and wait until the first passing vehicle has cleared and your view is unobstructed.",
        },
        {
          type: "text",
          value:
            "Why: Two cars passing at once can hide the full road picture from both drivers. If the front driver reacts unexpectedly, your escape room just became a physics lesson.",
        },
      ],
    },
    {
      id: "m3ch2_pg5",
      title: "School Buses and the Heavy Vehicle No-Zones",
      content: [
        {
          type: "text",
          value:
            "Some vehicles deserve extra caution because their size changes the rules of visibility and stopping. School buses and heavy trucks are not just larger cars. They are moving blind-spot machines with serious consequences if you misread them.",
        },
        { type: "heading", value: "School Buses" },
        {
          type: "text",
          value:
            "School buses are specially marked and equipped with alternating amber and red flashing lights. Amber lights mean the bus is preparing to stop. Red lights mean the bus is stopped and children may be crossing.",
        },
        {
          type: "list",
          items: [
            "Amber flashing lights, slow down and be ready to stop.",
            "Red flashing lights, stop at least 6 metres from the bus.",
            "Remain stopped until the red lights stop flashing.",
            "Do not pass a school bus when the red lights are flashing.",
          ],
        },
        {
          type: "heading", value: "Heavy Vehicles and the No-Zones" },
        {
          type: "text",
          value:
            "No-Zones are the danger areas around trucks and buses where crashes are more likely because the driver cannot always see your vehicle. If you cannot see the truck driver’s face in the side mirror, the driver probably cannot see you.",
        },
        {
          type: "list",
          items: [
            "Side No-Zones: avoid hanging beside trucks or buses.",
            "Rear No-Zones: never tailgate a heavy vehicle.",
            "Front No-Zones: do not cut in too soon after passing.",
            "Wide Right Turns: give large vehicles room because they may swing left first to make a right turn.",
            "Backing Up: never cross behind a truck that is backing up.",
          ],
        },
        {
          type: "text",
          value:
            "Heavy vehicles also need more room and more time to stop. Your job is not to test their limits. Your job is to remain visible, predictable, and out of their blind spots.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: cutting in front of a truck too early after passing. If you cannot see the whole front of the truck in your mirror, you are too close.",
        },
      ],
    },
    {
      id: "m3ch2_pg6",
      title: "Meeting Oncoming Traffic and Parking Regulations",
      content: [
        {
          type: "text",
          value:
            "Meeting oncoming traffic is where lane discipline becomes non-negotiable. The basic rule is simple: stay in your half of the roadway and never drift into the opposing lane.",
        },
        { type: "heading", value: "Meeting Oncoming Traffic" },
        {
          type: "list",
          items: [
            "Stay in the centre of your lane except when passing or turning.",
            "On narrow streets, both drivers may need to slow down or stop to pass safely.",
            "On city streets narrowed by parked vehicles, watch for opposing traffic carefully.",
            "Use your lights properly at night and dim them when meeting other vehicles.",
          ],
        },
        {
          type: "heading", value: "Parking Regulations" },
        {
          type: "text",
          value:
            "Parking is not just about leaving the vehicle somewhere. It is about leaving it somewhere legal, visible, and not stupidly in the way. The handbook lists several places where stopping or parking is illegal because it blocks visibility or creates a hazard.",
        },
        {
          type: "list",
          items: [
            "Do not park in front of a private driveway, lane, or intersection.",
            "Do not park within 15 metres of a railway crossing.",
            "Do not park within 12 metres of a stop sign or traffic signal.",
            "Do not park in a disabled space unless the vehicle has the proper emblem and authorization.",
            "Parallel parking requires the vehicle wheels to be within 0.3 metres of the curb where permitted.",
          ],
        },
        {
          type: "heading", value: "Pulling Away from the Curb" },
        {
          type: "text",
          value:
            "When leaving a parked position, check for traffic, signal your intention, and move only when you do not interfere with other traffic. That sounds basic because it is basic, and basic is exactly where many bad drivers fail.",
        },
      ],
    },
    {
      id: "m3ch2_pg7",
      title: "Parking and Backing Up",
      content: [
        {
          type: "text",
          value:
            "Parking and backing are low-speed maneuvers, but they are not low-risk. Low speed just means the impact looks less dramatic before the damage happens.",
        },
        { type: "heading", value: "Steps in Parallel Parking" },
        {
          type: "list",
          items: [
            "Stop even with the car ahead about 0.45 metres away.",
            "Back slowly while turning sharply right until the vehicle is at a 45-degree angle.",
            "Straighten the wheels and continue backing slowly.",
            "Turn sharply left when the rear car’s left headlight becomes visible.",
            "Turn right again and pull forward into the centre of the space.",
          ],
        },
        { type: "heading", value: "Angle Parking" },
        {
          type: "text",
          value:
            "Drive forward into the space with equal space on each side between the lines. Angle parking is simpler than parallel parking, but simple does not mean careless. A bad angle turn can still create a door-swipe or block another vehicle.",
        },
        { type: "heading", value: "Backing" },
        {
          type: "list",
          items: [
            "Check all around the vehicle before getting in.",
            "Look out the rear window, not just mirrors or cameras.",
            "Sound the horn immediately before backing.",
            "Back up slowly and check both sides.",
            "When backing from a driveway, check for pedestrians and vehicles before crossing the sidewalk.",
          ],
        },
        {
          type: "text",
          value:
            "The handbook treats backing as hazardous because your blind spots make you less aware of what is behind and beside you. That means the rule is not just to reverse, but to reverse safely and without interfering with traffic.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: trusting a backup camera like it is divine revelation. Cameras help, but they do not replace looking behind you.",
        },
      ],
    },
    {
      id: "m3ch2_pg8",
      title: "Driving in Town, on the Highway, and Around Merging Traffic",
      content: [
        {
          type: "text",
          value:
            "City driving and highway driving are the same skill at different speeds. In town you deal with more conflict points. On the highway you deal with less time to fix mistakes. Choose your poison carefully.",
        },
        { type: "heading", value: "Driving in a Village, Town, or City" },
        {
          type: "list",
          items: [
            "Watch for pedestrians and other vehicles at intersections.",
            "Obey speed limits because higher speed reduces stopping room.",
            "Plan your route ahead so you are in the correct lane before the turn.",
            "Slow down in residential areas and watch for children and bicyclists.",
            "Keep to the right lane if you are travelling slower than the flow of traffic.",
            "Stop before entering a street from a lane or alley.",
            "Do not block an intersection if traffic ahead is backed up.",
            "Do not weave in traffic.",
          ],
        },
        {
          type: "heading", value: "Driving on the Highway" },
        {
          type: "text",
          value:
            "Highway driving is about merging smoothly, maintaining speed, and avoiding abrupt moves. The handbook describes acceleration lanes, deceleration lanes, and merging as timing problems, not muscle contests.",
        },
        {
          type: "list",
          items: [
            "Use the acceleration lane to reach highway speed before merging.",
            "Signal as you enter the acceleration lane.",
            "Do not stop at the end of the acceleration lane unless absolutely necessary.",
            "On the highway, keep the right lane unless passing.",
            "Drivers already on the highway should leave room for merging traffic when safe to do so.",
          ],
        },
        {
          type: "heading", value: "Soft or Low Shoulders" },
        {
          type: "text",
          value:
            "If a wheel drops off the pavement onto a soft or low shoulder, hold the wheel firmly, slow down gradually without braking hard, and return to the road at a 45-degree angle only after regaining control. Jerking back onto the pavement is how people convert a minor mistake into a spin.",
        },
        {
          type: "heading", value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are entering the highway and the acceleration lane is ending. The traffic gap is not yet safe. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Keep checking the traffic flow, adjust your speed, and merge only when a safe gap opens. Do not stop at the end of the acceleration lane unless absolutely necessary.",
        },
      ],
    },
    {
      id: "m3ch2_pg9",
      title: "Roundabouts, Night Driving, and Visibility Control",
      content: [
        {
          type: "text",
          value:
            "Roundabouts, night driving, and reduced visibility all punish hesitation in different ways. The fix is the same: read early, signal correctly, and do not improvise once you are committed.",
        },
        { type: "heading", value: "Roundabouts" },
        {
          type: "list",
          items: [
            "Yield to traffic already in the roundabout and to pedestrians.",
            "Travel counterclockwise.",
            "In a single-lane roundabout, signal left for a left turn or U-turn before entering, signal right before exiting.",
            "If going straight, do not signal on entry, but signal right before exiting.",
            "In a dual-lane roundabout, stay in your lane and do not change lanes inside the circle.",
            "Right turns must use the right-hand lane and signal right until exit.",
          ],
        },
        {
          type: "text",
          value:
            "Pedestrians at modern roundabouts may have to cross in two stages. They should make eye contact with drivers and ensure both lanes are yielding before crossing the second part. Cyclists can either ride through like vehicles or dismount and cross as pedestrians.",
        },
        { type: "heading", value: "Night Driving" },
        {
          type: "text",
          value:
            "Night driving is more dangerous because visibility drops sharply and the distance you can see ahead becomes much shorter. Headlights must be used from sunset to sunrise or whenever visibility is poor. Parking lights are for parking, not for pretending you are visible.",
        },
        {
          type: "list",
          items: [
            "Use low beams in city driving unless road conditions require otherwise.",
            "Dim lights when meeting oncoming traffic within 150 metres.",
            "Use low beams when following a vehicle within 60 metres.",
            "Reduce speed so you are not over-driving your headlights.",
          ],
        },
        {
          type: "heading", value: "Visibility and Fatigue" },
        {
          type: "text",
          value:
            "If road conditions are poor or visibility is reduced, slow down to a speed that lets you stop within the distance you can see. Fatigue also reduces the quality of your decisions, which is a polite way of saying tired drivers make expensive mistakes.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Good night driving is mostly about humility. If you cannot see far enough to stop, your speed is already too high.",
        },
      ],
    },
    {
      id: "m3ch2_pg10",
      title: "Winter Driving, Weather, Distractions, and Impaired Driving",
      content: [
        {
          type: "text",
          value:
            "Bad weather and bad judgment often arrive together. Winter, rain, fog, distraction, and impairment all shrink the space between your decision and the consequence of that decision.",
        },
        { type: "heading", value: "Winter Driving" },
        {
          type: "list",
          items: [
            "Slow down early, not after you begin to skid.",
            "Get the feel of the road before you commit to speed.",
            "Be alert for black ice and bridges that freeze before the road.",
            "Brake carefully and avoid hard, steady pressure on slippery roads unless your vehicle has ABS.",
          ],
        },
        {
          type: "text",
          value:
            "The handbook explains that on wet or icy roads, braking distance grows and wheels can lock if you brake too hard. The correct response is controlled braking and reduced speed, not panic and foot drama.",
        },
        { type: "heading", value: "Rain, Snow, and Hydroplaning" },
        {
          type: "text",
          value:
            "In poor weather, reduce speed and maintain a larger following distance. Hydroplaning happens when tires ride on a layer of water and lose contact with the road. That means steering and braking become much less effective until the tires regain grip.",
        },
        { type: "heading", value: "Driving Distractions" },
        {
          type: "text",
          value:
            "Distraction is dangerous because it steals attention from the exact task that keeps you alive. A moment looking away, reaching for a device, or mentally checking out can be enough to miss a hazard, a stopped vehicle, or a pedestrian stepping into the road.",
        },
        { type: "heading", value: "Impaired Driving" },
        {
          type: "text",
          value:
            "Alcohol and drugs reduce vision, slow reaction time, and increase collision risk. Combining them makes the problem worse. For novice drivers, the handbook states zero blood alcohol content rules apply, and the penalties for impaired driving are serious. The road does not negotiate with chemistry.",
        },
        {
          type: "heading", value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are driving in snow, you feel tired, and your phone starts buzzing. What should you do first?",
        },
        {
          type: "text",
          value:
            "**Answer:** Reduce risk immediately by slowing down, increasing following distance, and removing the distraction. If fatigue is strong, stop driving when safe to do so.",
        },
        {
          type: "text",
          value:
            "Why: Weather, fatigue, and distraction stack on top of each other. When those three team up, the car becomes a very expensive moving mistake generator.",
        },
      ],
    },
  ],
};