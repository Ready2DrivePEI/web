/** Default sender address used until a custom Resend domain is verified. */
export const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL?.trim() || "Ready2Drive PEI <onboarding@resend.dev>";

/** Default administrative inbox for contact inquiries and course completion alerts. */
export const ADMIN_NOTIFICATION_EMAIL =
  process.env.ADMIN_NOTIFICATION_EMAIL?.trim() || "ready2drive2025@gmail.com";

/** Escape HTML special characters to prevent markup injection in email templates. */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip line breaks from plain-text email headers/subjects to prevent header injection. */
export function sanitizeEmailSubject(str: string): string {
  return str.replace(/[\r\n]+/g, " ").trim();
}
