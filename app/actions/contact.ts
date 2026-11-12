"use server";

import { Resend } from "resend";
import { adminClient } from "@/lib/supabase/admin";
import { contactSchema } from "@/lib/contact-schema";
import {
  ADMIN_NOTIFICATION_EMAIL,
  RESEND_FROM_EMAIL,
  escapeHtml,
  sanitizeEmailSubject,
} from "@/lib/email";

type UntypedInsertClient = {
  from: (table: string) => {
    insert: (values: Record<string, unknown>) => Promise<{
      error: { code?: string; message?: string } | null;
    }>;
  };
};

export async function sendContactInquiry(formData: FormData) {
  // 1. Honeypot check: check if the hidden field is filled
  const website = formData.get("website");
  if (website) {
    // Exit silently to trick spam bots into thinking the submit succeeded
    return { success: true };
  }

  // 2. Extract values from FormData
  const submissionId = formData.get("submissionId");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const plan = formData.get("plan");
  const message = formData.get("message");

  // 3. Validation: Run cheap validation schema checks
  const validationResult = contactSchema.safeParse({
    submissionId,
    firstName,
    lastName,
    email,
    phone,
    plan,
    message,
  });

  if (!validationResult.success) {
    const firstError = validationResult.error.issues[0]?.message || "Validation failed.";
    return {
      success: false,
      code: "VALIDATION_ERROR",
      message: firstError,
    };
  }

  const validatedData = validationResult.data;
  const fullName = `${validatedData.firstName} ${validatedData.lastName}`.trim();

  // 4. Supabase Insert: Save the lead details using admin service role client.
  // Cast via UntypedInsertClient because contact_inquiries doesn't exist in static database.types.ts yet.
  const { error: dbError } = await (adminClient as unknown as UntypedInsertClient)
    .from("contact_inquiries")
    .insert({
      submission_id: validatedData.submissionId,
      name: fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      plan: validatedData.plan,
      message: validatedData.message,
      status: "pending",
    });

  if (dbError) {
    console.error("[contact-form] Database insertion failed:", dbError);

    // Handle unique constraint conflict (double clicks)
    if (dbError.code === "23505") {
      return {
        success: false,
        code: "DUPLICATE_SUBMISSION",
        message: "This inquiry has already been submitted.",
      };
    }

    return {
      success: false,
      code: "DATABASE_ERROR",
      message: "Failed to store contact inquiry.",
    };
  }

  // 5. Resend: Email notification dispatch
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("[contact-form] Missing RESEND_API_KEY; inquiry saved to Supabase without email notification.", {
      submissionId: validatedData.submissionId,
    });
    return { success: true };
  }

  const resend = new Resend(resendApiKey);
  try {
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: ADMIN_NOTIFICATION_EMAIL,
      replyTo: validatedData.email,
      subject: `New Driving Lesson Inquiry — ${sanitizeEmailSubject(fullName)}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Driving Lesson Inquiry</h2>
          <p>A new contact request has been received from the landing page.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 6px 0;">${escapeHtml(fullName)}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${escapeHtml(validatedData.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(validatedData.email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 6px 0;">${escapeHtml(validatedData.phone)}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Selected Package:</td>
              <td style="padding: 6px 0;">${escapeHtml(validatedData.plan)}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #cbd5e1; white-space: pre-wrap;">${escapeHtml(validatedData.message)}</div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 11px; color: #64748b; margin-bottom: 0;">Submitted via Ready2Drive PEI Landing Page.</p>
        </div>
      `,
    });

    if (emailError) {
      console.error("[contact-form] Resend API error:", emailError);
    } else {
      console.log("[contact-form] Email sent successfully, Resend ID:", emailData?.id);
    }
  } catch (emailError) {
    // Log failure but return success: true because the lead is safely captured in Supabase
    console.error("[contact-form] Contact inquiry notification email failed:", {
      submissionId: validatedData.submissionId,
      email: validatedData.email,
      error: emailError,
    });
  }

  return { success: true };
}
