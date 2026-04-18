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
            "Before you can drive any motor vehicle or tow a trailer on Prince Edward Island roads, it must be properly registered. You also need the correct licence plates and a valid inspection sticker. The registration permit must always be kept inside the vehicle and shown to any police officer when asked.",
        },
        { type: "heading", value: "Rules to Remember" },
        {
          type: "list",
          items: [
            "The registration permit must always be carried inside the vehicle and shown to police when requested.",
            "Only one licence plate is issued, and it must be firmly attached.",
            "The plate must be kept clean, clearly visible, and lit at night.",
            "Motorcycles and mopeds must also be registered and insured.",
            "Vehicles must meet applicable inspection and insurance requirements to remain road-legal.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Missing Documents If you cannot produce your registration permit when asked by a police officer, your vehicle plate may be seized and you may face a fine.",
        },
      ],
    },
    {
      id: "m4ch3_pg2",
      title: "Applying and Managing Registration",
      content: [
        { type: "heading", value: "📋 Applying and Managing Registration" },
        {
          type: "text",
          value:
            "To get your vehicle registered, you need to provide proof of public liability insurance and a passed vehicle safety inspection report. Once registered, the registration expires every year on the ownerâ€™s birthday.",
        },
        { type: "heading", value: "How It Works" },
        {
          type: "list",
          items: [
            "**Applying**: Bring a completed application, insurance slip, and inspection report to a Highway Safety office.",
            "**In-Transit Permits**: If you need to move an unregistered vehicle for repairs or registration, you can get a single-journey permit.",
            "**Updating Information**: If you change your name or address, you must notify Highway Safety within 30 days.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Out-of-Province Visitors If you are visiting PEI, you can drive your passenger vehicle for up to four months before you are required to register it locally.",
        },
      ],
    },
    {
      id: "m4ch3_pg3",
      title: "Off-Highway Vehicles",
      content: [
        { type: "heading", value: "Off-Highway Vehicles" },
        {
          type: "text",
          value:
            "Off-highway vehicles like ATVs and snowmobiles travel at high speeds and carry significant crash risks. They cannot be legally driven on regular highways or in the ditches next to highways. Vehicles like minibikes, ATVs, and snowmobiles must be registered specifically for off-highway use.",
        },
        { type: "heading", value: "Restrictions" },
        {
          type: "list",
          items: [
            "**Age Limits**: No one under 14 can operate an off-highway vehicle (except a snowmobile).",
            "**Protective Gear**: You must wear mandatory protective clothing and equipment when riding.",
            "**Crossing Highways**: You cannot cross a highway on an ATV unless you have held a driver's licence for 24 months, or completed an approved safety course.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Owner Responsibility As the vehicle owner, it is illegal to let anyone operate your off-highway vehicle if they do not meet the age, training, or licensing requirements.",
        },
      ],
    },
    {
      id: "m4ch3_pg4",
      title: "Mandatory Safety Inspections",
      content: [
        { type: "heading", value: "⚠️ Mandatory Safety Inspections" },
        {
          type: "text",
          value:
            "To ensure all vehicles on the road remain safe, PEI requires most registered vehicles and trailers to undergo a yearly safety inspection. This inspection must be conducted at an official testing station by an authorized mechanic.",
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "list",
          items: [
            "**Approval Sticker**: Once passed, your vehicle will receive an inspection sticker valid until the end of that same month the following year.",
            "**Inspection Report**: You must keep the passed inspection report inside your vehicle and show it to an officer on request.",
          ],
        },
        {
          type: "text",
          value:
            "Q: What happens if my vehicle fails the inspection?\nA: You cannot legally drive or register the vehicle until the necessary repairs are made and it passes a re-inspection.",
        },
      ],
    },
    {
      id: "m4ch3_pg5",
      title: "Transportation of Dangerous Goods",
      content: [
        { type: "heading", value: "☢️ Transportation of Dangerous Goods" },
        {
          type: "text",
          value:
            "Transporting dangerous goods is tightly controlled due to the extreme risks of a crash, explosion, or chemical spill. Regular drivers are not permitted to transport these materials. Only individuals who are specifically qualified and licensed for hazardous cargo may haul them.",
        },
        { type: "heading", value: "Penalties and Consequences" },
        {
          type: "list",
          items: [
            "If you transport hazardous materials without the proper qualifications, you are breaking the law and face severe legal penalties.",
            "You are not allowed to carry any classified dangerous goods (like explosives, toxic chemicals, or radioactive materials) unless you represent an authorized commercial carrier.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Illegal Transportation Risk Never agree to transport hazardous, toxic, or dangerous materials in your personal vehicle. Doing so is illegal and endangers everyone on the road.",
        },
        { type: "heading", value: "Summary" },
        {
          type: "text",
          value:
            "Every vehicle on PEI roads must be registered, insured, and safety-inspected annually. The driver must always carry the registration permit and passed inspection report. Special rules govern ATVs and snowmobiles to reduce injury, and regular drivers must never illegally transport dangerous goods.",
        },
      ],
    },
  ],
};

