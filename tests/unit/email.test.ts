import { describe, it, expect } from "vitest";
import {
  ADMIN_NOTIFICATION_EMAIL,
  RESEND_FROM_EMAIL,
  escapeHtml,
  sanitizeEmailSubject,
} from "@/lib/email";

describe("email helpers", () => {
  it("escapes HTML special characters", () => {
    expect(escapeHtml(`<script>alert("x" & 'y')</script>`)).toBe(
      "&lt;script&gt;alert(&quot;x&quot; &amp; &#39;y&#39;)&lt;/script&gt;"
    );
  });

  it("strips newlines from plain-text email subjects without HTML encoding apostrophes", () => {
    expect(sanitizeEmailSubject("  O'Connor\r\nBcc: attacker@evil.com  ")).toBe(
      "O'Connor Bcc: attacker@evil.com"
    );
  });

  it("exposes expected default sender and admin notification email", () => {
    expect(RESEND_FROM_EMAIL).toBe("Ready2Drive PEI <onboarding@resend.dev>");
    expect(ADMIN_NOTIFICATION_EMAIL).toBe("ready2drive2025@gmail.com");
  });
});
