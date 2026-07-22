import { z } from "zod";

export const contactSchema = z.object({
  submissionId: z.string().uuid({
    message: "Invalid submission ID format."
  }),
  firstName: z
    .string()
    .min(1, { message: "First name is required." })
    .max(50, { message: "First name must not exceed 50 characters." })
    .trim(),
  lastName: z
    .string()
    .min(1, { message: "Last name is required." })
    .max(50, { message: "Last name must not exceed 50 characters." })
    .trim(),
  email: z
    .string()
    .email({ message: "Invalid email address format." })
    .max(255, { message: "Email must not exceed 255 characters." })
    .trim(),
  phone: z
    .string()
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, "");
        return digits.length >= 10 && digits.length <= 15;
      },
      {
        message: "Phone number must contain between 10 and 15 digits."
      }
    )
    .trim(),
  plan: z.enum([
    "Single Lesson Package",
    "Multi Lesson Package",
    "Co-Pilot Package",
    "Online Course Purchase",
    "Not sure yet"
  ], {
    message: "Please select a valid package plan."
  }),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .max(500, { message: "Message must not exceed 500 characters." })
    .trim()
});

export type ContactInput = z.infer<typeof contactSchema>;
