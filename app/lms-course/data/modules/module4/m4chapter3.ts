import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m4chapter3: Chapter = {
  id: "m4chapter3",
  title: "Core Vehicle Registration Requirements",
  type: "lesson",
  slug: "core-vehicle-registration-requirements",
  completed: false,
  lessons: [
    {
      id: "m4ch3_pg1",
      title: "Core Vehicle Registration Requirements",
      content: [
        { type: "heading", value: "🧾 Core Vehicle Registration Requirements" },
        {
          type: "text",
          value:
            "Before you can drive a motor vehicle or tow a trailer on Prince Edward Island roads, it must be properly registered. The vehicle and the trailer, if one is being drawn, must have the correct licence according to their class, the proper number plates, and valid inspection stickers or markers issued under the Highway Traffic Act.",
        },
        {
          type: "text",
          value:
            "The law is simple because the risk is simple. If the vehicle is not registered, not insured, not inspected, or not properly plated, it should not be on the highway. Registration is not paperwork for the drawer. It is the proof that the vehicle is allowed to exist on the road today.",
        },
        {
          type: "heading",
          value: "Rules to Remember",
        },
        {
          type: "list",
          items: [
            "You may not operate a vehicle on a highway unless it is registered.",
            "Any trailer drawn by the motor vehicle must also be registered.",
            "The vehicle and trailer must have the proper licence according to class.",
            "The vehicle and trailer must have valid number plates and inspection markers or stickers.",
            "The registration permit must be kept in the vehicle and shown when asked by a peace officer or inspector.",
          ],
        },
        {
          type: "text",
          value:
            "A traffic officer or inspector may ask for the permit at any time. If you cannot produce it, you are inviting trouble that could have been avoided by keeping one piece of paper where it belongs.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: keeping the registration permit somewhere else and assuming you will remember where. Memory is not a legal storage system.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You are pulled over and the officer asks for the registration permit, but you left it at home. What is the correct response?",
        },
        {
          type: "text",
          value:
            "**Answer:** Explain the situation honestly, but understand that the permit should be kept inside the vehicle and produced when requested.",
        },
        {
          type: "text",
          value:
            "Why: The handbook requires the registration permit to stay in the vehicle. A missing permit does not magically make the vehicle legal.",
        },
      ],
    },
    {
      id: "m4ch3_pg2",
      title: "Applying, Renewing, and Transferring Registration",
      content: [
        { type: "heading", value: "📋 Applying and Managing Registration" },
        {
          type: "text",
          value:
            "To register a vehicle, you need the proper application form, a valid public liability insurance card, and a successful motor vehicle inspection report form. Some vehicles may also be re-examined at your expense if Highway Safety wants to confirm their condition.",
        },
        {
          type: "text",
          value:
            "Registration is not a one-time ritual. It expires on the registered owner’s birthday or, for a company, on the company’s registration date. That means the vehicle must stay current, not just once, but continuously.",
        },
        {
          type: "heading",
          value: "How It Works",
        },
        {
          type: "list",
          items: [
            "Bring the application form, insurance card, and inspection report to Highway Safety/Access PEI.",
            "If the vehicle is owned by a corporate body, a signing officer must sign the application.",
            "If the owner changes name or address, the Highway Safety office must be notified within 30 days.",
            "If the vehicle is sold or transferred, the transfer must be reported within seven days.",
            "The new owner must transfer the registration permit into their name within seven days.",
          ],
        },
        {
          type: "heading",
          value: "In-Transit Permits",
        },
        {
          type: "text",
          value:
            "If a vehicle is unregistered and unladen, the registrar may issue a single-journey in-transit permit for a fee. This is for moving the vehicle to a registration office, to another place for repairs, or for inspection before registration.",
        },
        {
          type: "text",
          value:
            "This is not a loophole. It is a narrow permission. It exists so an unregistered vehicle can be moved safely for a legitimate purpose, not so people can casually ignore the registration system.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "A vehicle moving on an in-transit permit is there for a specific legal purpose. Treat it like a temporary pass, not a blank cheque.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** You sold your vehicle, but the buyer has not yet transferred the registration permit into their name. What is the correct timeline?",
        },
        {
          type: "text",
          value:
            "**Answer:** The transfer must be reported within seven days, and the new owner must have the registration permit transferred into their name within seven days as well.",
        },
        {
          type: "text",
          value:
            "Why: Ownership changes do not pause legal responsibility. The handbook gives a short, clear timeline so the record matches the real owner quickly.",
        },
      ],
    },
    {
      id: "m4ch3_pg3",
      title: "Number Plates, Personalized Plates, and Visibility Rules",
      content: [
        { type: "heading", value: "🔢 Number Plate Rules" },
        {
          type: "text",
          value:
            "Highway Safety issues one number plate only for all vehicles, including trailers, motorcycles, and mopeds. That plate must be securely fastened, clearly visible, clean, and legible at all times.",
        },
        {
          type: "text",
          value:
            "At night, a rear light must shine on the plate. The vehicle, its equipment, or its load must not obscure the plate. If the plate cannot be read, the road cannot read your legal identity either.",
        },
        {
          type: "list",
          items: [
            "The plate must be at least 200 millimetres from the ground measured from the bottom of the plate.",
            "Motorcycle and trailer plates must be clearly visible from the rear.",
            "Do not use any plate or number that could be confused with your proper plate.",
            "A traffic officer may seize a plate if it was issued for a different vehicle, obtained by false pretenses, or used contrary to the law.",
          ],
        },
        {
          type: "heading", value: "Personalized Plates" },
        {
          type: "text",
          value:
            "Personalized plates are available for vehicles that normally use passenger vehicle or commercial plates. They come with an additional fee and are obtained through Highway Safety/Access PEI.",
        },
        {
          type: "heading", value: "Parking Permit for the Physically Challenged" },
        {
          type: "text",
          value:
            "Hanging parking passes for the physically challenged are available through the Council of the Disabled or Access PEI sites. The application must be completed by a doctor and returned to the Council of the Disabled, and there is an annual fee.",
        },
        {
          type: "heading", value: "Motorcycle Registration" },
        {
          type: "text",
          value:
            "All motorcycles and mopeds operated on public streets and highways must be registered and insured, and they must display valid licence plates. Minibikes are not registered for highway use and cannot be used on public roads or sidewalks.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: assuming a bike, trailer, or custom plate is automatically fine because it looks official. The plate has to be correct, visible, and legal, not merely present.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** Your plate is partially hidden by a bike rack or cargo. Is that acceptable?",
        },
        {
          type: "text",
          value:
            "**Answer:** No. The plate must remain clearly visible and legible.",
        },
        {
          type: "text",
          value:
            "Why: The handbook requires the plate to be visible at all times. If the plate is blocked, the vehicle is not meeting the visibility rule.",
        },
      ],
    },
    {
      id: "m4ch3_pg4",
      title: "Off-Highway Vehicles and Snowmobiles",
      content: [
        { type: "heading", value: "🏞️ Off-Highway Vehicles" },
        {
          type: "text",
          value:
            "Off-highway vehicles are not toys. They can reach very high speeds and can cause injury, crop damage, and property damage when used carelessly. The handbook treats them as regulated vehicles, not recreational objects exempt from common sense.",
        },
        {
          type: "text",
          value:
            "The Off-Highway Vehicle Act includes four-wheel drive or low-pressure tire vehicles, power motorcycles and related two-wheel vehicles, amphibious machines, all-terrain vehicles, and snow vehicles.",
        },
        {
          type: "list",
          items: [
            "No person under 14 may operate an off-highway vehicle other than a snowmobile.",
            "Protective clothing and equipment are required.",
            "A person age 14 or 15 must complete an approved off-highway vehicle safety training course and be supervised by an adult meeting the required conditions.",
            "If you are 16 or older, you must have held a driver’s licence for 24 months or have completed an approved ATV safety course.",
            "You cannot operate an off-highway vehicle in the ditch next to a highway.",
            "You cannot cross a highway on an off-highway vehicle unless you meet the licensing or training requirement.",
          ],
        },
        {
          type: "heading", value: "Snowmobile Registration" },
        {
          type: "text",
          value:
            "Snowmobiles must be registered annually on or before November 30. When ownership changes, the snowmobile must be registered in the new owner’s name within seven days. A number plate must be firmly attached to the rear of the machine.",
        },
        {
          type: "text",
          value:
            "If the plate is lost or illegible, the owner must buy a new one. All other off-highway vehicles are registered once by the owner and re-registered only when ownership changes.",
        },
        {
          type: "heading", value: "Owner Responsibility" },
        {
          type: "text",
          value:
            "The owner must not permit someone to operate an off-highway vehicle if that person is prohibited from doing so. In other words, you do not get to loan out danger and then act surprised when the law notices.",
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Common mistake: thinking a field or trail makes the rules disappear. The terrain changes. The law does not.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** A 15-year-old wants to operate an ATV for fun, but has not completed the required safety training. Is this allowed?",
        },
        {
          type: "text",
          value:
            "**Answer:** No, it is not allowed unless the required training and supervision rules are met.",
        },
        {
          type: "text",
          value:
            "Why: The handbook places age and training conditions on off-highway vehicle use to reduce injury and property damage.",
        },
      ],
    },
    {
      id: "m4ch3_pg5",
      title: "Mandatory Safety Inspections and Rejected Vehicles",
      content: [
        { type: "heading", value: "⚠️ Mandatory Safety Inspections" },
        {
          type: "text",
          value:
            "Most registered motor vehicles and trailers must have a yearly safety inspection at an official inspection station. A prescribed inspection is carried out by an authorized mechanic, and if the vehicle passes, an approval sticker is placed in the proper area.",
        },
        {
          type: "text",
          value:
            "The inspection report must stay in good condition inside the vehicle and be shown to a peace officer on request. Approval stickers issued in the month of inspection are normally valid until the end of that month in the following year.",
        },
        {
          type: "heading",
          value: "Rejected Vehicles",
        },
        {
          type: "text",
          value:
            "If a vehicle is rejected, the owner or operator has 10 days from the date of rejection to correct the defects and have it re-inspected. This does not allow the vehicle to keep operating while unsafe.",
        },
        {
          type: "list",
          items: [
            "A rejected vehicle still cannot be legally driven if it is unsafe.",
            "Repairs must be completed before the re-inspection.",
            "If the vehicle fails, it stays off the road until it passes.",
          ],
        },
        {
          type: "heading", value: "Why Inspections Matter" },
        {
          type: "text",
          value:
            "The inspection system is not bureaucracy for its own sake. It is the mechanism that catches worn brakes, bad tires, broken lights, and other mechanical problems before they become crash causes.",
        },
        {
          type: "callout",
          variant: "info",
          value:
            "A legal vehicle is not just one with a plate. It is one that is still mechanically fit to be there.",
        },
        {
          type: "heading",
          value: "🧠 Decision Scenario",
        },
        {
          type: "text",
          value:
            "**Question:** Your vehicle fails inspection today. Can you keep driving it until the repairs are convenient?",
        },
        {
          type: "text",
          value:
            "**Answer:** No. The vehicle must be repaired and re-inspected before it can be legally operated again if it is unsafe.",
        },
        {
          type: "text",
          value:
            "Why: The handbook is explicit that a rejected vehicle cannot be operated as if nothing happened. Safety comes before convenience.",
        },
      ],
    },
    {
      id: "m4ch3_pg6",
      title: "Transporting Dangerous Goods, Flares, and Vehicle Dimensions",
      content: [
        { type: "heading", value: "☢️ Transportation of Dangerous Goods" },
        {
          type: "text",
          value:
            "Only qualified people may transport dangerous goods. In the handbook, these materials are treated as a special risk category because a crash, fire, spill, or leak can become a community-level emergency very quickly.",
        },
        {
          type: "text",
          value:
            "Dangerous goods include classes such as explosives, compressed gases, flammable liquids, poisonous substances, radioactive materials, oxidizers, corrosives, and other regulated products. Ordinary drivers are not permitted to haul them casually in a personal vehicle.",
        },
        {
          type: "callout",
          variant: "danger",
          value:
            "Illegal Transportation Risk Never agree to carry hazardous, toxic, or dangerous materials unless you are specifically qualified and authorized to do so.",
        },
        {
          type: "heading", value: "Flares, Lanterns, and Fire Extinguishers" },
        {
          type: "text",
          value:
            "If a vehicle becomes disabled on the travelled portion of a highway or shoulder when lights are required, the driver must display warning lanterns or flares at specific distances. During daylight, red flags are used instead. These warning devices are there so other drivers see the hazard early enough to avoid it.",
        },
        {
          type: "text",
          value:
            "Commercial vehicles carrying explosives must also carry not less than two fire extinguishers, ready for use. School buses must carry at least one fire extinguisher.",
        },
        {
          type: "heading", value: "Width, Height, and Length of Vehicle" },
        {
          type: "text",
          value:
            "No vehicle may exceed the legal width, height, or length limits without a special permit. Size matters because oversized vehicles create clearance risks, turn-sweep risks, and lane-blocking problems that smaller vehicles do not.",
        },
        {
          type: "list",
          items: [
            "Maximum width, including load, is limited unless a special permit is issued.",
            "Maximum height is limited unless a special permit is issued.",
            "Single vehicles and combinations of vehicles have length limits unless permitted otherwise.",
          ],
        },
        {
          type: "heading", value: "🧠 Decision Scenario" },
        {
          type: "text",
          value:
            "**Question:** A friend asks you to carry a drum of unknown chemical material in your personal vehicle. What should you do?",
        },
        {
          type: "text",
          value:
            "**Answer:** Refuse. Only qualified people may transport dangerous goods, and ordinary drivers are not allowed to treat hazardous material like grocery bags.",
        },
        {
          type: "text",
          value:
            "Why: The handbook explicitly restricts dangerous goods transport because the crash consequences can be extreme.",
        },
      ],
    },
    {
      id: "m4ch3_pg7",
      title: "Chapter Summary: Keep the Paperwork, Keep It Legal",
      content: [
        {
          type: "text",
          value:
            "Vehicle registration is a legal identity system for the road. It ties the vehicle to its owner, confirms that the vehicle is insured and inspected, and makes enforcement possible when something goes wrong.",
        },
        {
          type: "heading",
          value: "Core Rules",
        },
        {
          type: "list",
          items: [
            "Keep the registration permit in the vehicle.",
            "Keep plates visible, clean, and properly attached.",
            "Renew on time and update name or address changes within 30 days.",
            "Transfer ownership quickly when the vehicle is sold.",
            "Never ignore inspection, permit, or registration requirements.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "If the vehicle is legal, visible, inspected, and documented, you removed a whole category of avoidable problems before they started.",
        },
      ],
    },
  ],
};