import { z } from "zod";

export const contactSchema = z.object({
  submissionId: z.string().uuid({
    message: "Invalid submission ID format."
  }),
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required." })
    .max(50, { message: "First name must not exceed 50 characters." }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required." })
    .max(50, { message: "Last name must not exceed 50 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address format." })
    .max(255, { message: "Email must not exceed 255 characters." }),
  phone: z
    .string()
    .trim()
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, "");
        return digits.length >= 10 && digits.length <= 15;
      },
      {
        message: "Phone number must contain between 10 and 15 digits."
      }
    ),
  plan: z.enum([
    "Single Lesson Package",
    "Multi Lesson Package",
    "Co-Pilot Package",
    "Online Course Purchase",
    "General Inquiry"
  ], {
    message: "Please select a valid package plan."
  }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required." })
    .max(500, { message: "Message must not exceed 500 characters." })
});

export type ContactInput = z.infer<typeof contactSchema>;
