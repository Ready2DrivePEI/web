import type { Chapter } from "@/app/lms-course/data/modules/module1/chapter1";

export const m4chapter2: Chapter = {
  id: "m4chapter2",
  title: "Legal Consequences: Demerit Points, Penalties, and Interlocks",
  type: "lesson",
  slug: "legal-consequences-demerit-points-penalties-and-interlocks",
  completed: false,
  lessons: [
    {
      id: "m4ch2_pg1",
      title: "The Demerit Point System",
      content: [
        { type: "heading", value: "📉 How Demerit Points Work" },
        {
          type: "text",
          value:
            "The Demerit Point System tracks and penalizes experienced drivers who repeatedly break traffic laws. Each time you are convicted of an offence, demerit points are added to your driving record based on its severity. If too many points build up within a two-year period, your licence will be suspended.",
        },
        {
          type: "text",
          value:
            "This system applies only to drivers who have graduated from the GDL program. Its purpose is simple: to identify and remove drivers who consistently put others at risk.",
        },
        { type: "heading", value: "Key Concepts" },
        {
          type: "list",
          items: [
            "**Warning Letter**: Issued when you reach 6, 7, or 8 points.",
            "**Driver Interview**: Required if you accumulate 9, 10, or 11 points. You must convince an official why your license shouldn't be immediately suspended.",
            "**Suspension**: Reaching 12 or more points within two years results in an automatic three-month license suspension.",
            "**Probation**: After returning from a suspension, you are placed on a one-year probation. Any moving violation during this time leads to another three-month suspension.",
          ],
        },
        { type: "heading", value: "Examples of Point Values" },
        {
          type: "list",
          items: [
            "**6 Points**: Speeding 30 km/h or more over the limit.",
            "**5 Points**: Racing or driving without due care and attention.",
            "**3 Points**: Not wearing a seat belt or making an improper pass.",
          ],
        },
        {
          type: "imagePlaceholder",
          layout: "half",
          prompt:
            "A driving record graphic showing a gauge that goes from green (0 points) to red (12 points), with the \"Suspension\" label at the red tip.",
        },
      ],
    },
    {
      id: "m4ch2_pg2",
      title: "GDL Penalties and Zero Tolerance",
      content: [
        { type: "heading", value: "📋 Stricter Rules for New Drivers" },
        {
          type: "text",
          value:
            "Because new drivers are still building their skills, the consequences for breaking the rules are much stricter than for experienced drivers. Under the Graduated Driver Licensing (GDL) program, your allowed demerit point limit is cut in half, and certain offenses carry immediate suspensions.",
        },
        {
          type: "text",
          value:
            "The consequences depend on which stage of the GDL program you are in. Additionally, there is a strict zero-tolerance policy for alcohol that applies to young and newly licensed drivers regardless of their GDL stage.",
        },
        { type: "heading", value: "🚫 GDL Penalties and Restrictions" },
        {
          type: "list",
          items: [
            "**Stage 2 Penalties**: A warning is issued at 3 to 5 points. If you reach 6 points, you receive an automatic one-month suspension.",
            "**Stage 3 Penalties**: A warning is issued at 5 to 8 points. Reaching 9 points results in a one-month suspension.",
            "**Seat Belt Suspension**: While in the GDL program, receiving a seat belt ticket results in an immediate license suspension. You are also responsible for your passengers.",
            "**Passenger Restrictions**: In Stage 2, you are restricted to only one non-family passenger.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          value:
            "Zero BAC for New Drivers If you are under 19 years old, OR if you have held your license for less than three years, you must have a \"0\" Blood Alcohol Content when driving. Any reading above zero leads to a 24-hour roadside suspension and a 90-day administrative prohibition.",
        },
      ],
    },
    {
      id: "m4ch2_pg3",
      title: "The Ignition Interlock Program",
      content: [
        { type: "heading", value: "🔑 Regaining Your Driving Privilege" },
        {
          type: "text",
          value:
            "If a driver loses their license due to an impaired driving conviction, PEI offers the Ignition Interlock Program. This program allows eligible offenders to apply for an early reinstatement of their license by agreeing to strict monitoring and the installation of a breath-testing device in their vehicle.",
        },
        {
          type: "text",
          value:
            "This program encourages individuals to address their alcohol-related problems while safely regaining their driving privileges through a restricted license.",
        },
        { type: "heading", value: " Ignition Interlock System: How It Works and Requirements" },
        {
          type: "list",
          items: [
            "**How it Works**: A driver must blow into the interlock device before the vehicle will start. If the recorded alcohol level is above the preset limit, the ignition remains locked.",
            "**Random Testing**: Once the vehicle is moving, the device requires random breath samples. Failing these tests activates alarms, records the fail, and honks the horn until the car is turned off.",
            "**Maintenance**: The device must be calibrated and serviced at an installation facility at least every 60 days. Missing an appointment can cause the device to permanently lock.",
            "**Eligibility**: To join, a driver must serve the mandatory minimum prohibition period ordered by the court and pay all outstanding fines.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          value:
            "Program Non-Compliance All program activity is recorded by a data log. Repeated test failures show that the driver is not complying with the rules, which will result in the interlock device being removed and the full license suspension being reinstated.",
        },
        { type: "heading", value: " Summary" },
        {
          type: "text",
          value:
            "Every traffic violation acts against your driving privilege through the Demerit Point System, with new drivers in the GDL program facing suspensions at much lower thresholds. Offenses like speeding, racing, or not wearing a seat belt quickly accumulate into severe penalties. In cases of impaired driving, the province utilizes the Ignition Interlock Program to monitor convicted drivers with breath-testing technology, ensuring that roads remain safe while they rebuild their driving record.",
        },
      ],
    },
  ],
};
