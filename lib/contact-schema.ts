import { z } from "zod";

export const PHONE_MAX_DIGITS = 15;

/** Format phone input up to 15 digits (E.164 max) with optional leading `+`. */
export function formatPhoneNumber(val: string): string {
  const hasPlus = val.trimStart().startsWith("+");
  const digits = val.replace(/\D/g, "").slice(0, PHONE_MAX_DIGITS);
  const prefix = hasPlus ? "+" : "";

  if (!digits) return prefix;

  // Format North American numbers with leading country code 1 (e.g. +1 902 555 1234)
  if (digits.startsWith("1") && digits.length <= 11 && (hasPlus || digits.length === 11)) {
    const rest = digits.slice(1);
    const parts = ["1", rest.slice(0, 3), rest.slice(3, 6), rest.slice(6, 10)].filter(Boolean);
    return `${prefix}${parts.join(" ")}`;
  }

  // Standard 10-digit grouping (902 555 1234) or 11-15 digit international grouping
  const groups = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 10),
    digits.slice(10, PHONE_MAX_DIGITS),
  ].filter(Boolean);

  return `${prefix}${groups.join(" ")}`;
}

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
        return digits.length >= 10 && digits.length <= PHONE_MAX_DIGITS;
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
