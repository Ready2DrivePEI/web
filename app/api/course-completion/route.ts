import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import type { Database } from "@/database.types";

type CompletionPayload = {
  user_id?: string;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getBearerToken(authorizationHeader: string | null): string | null {
  if (!authorizationHeader) return null;
  const [scheme, token] = authorizationHeader.split(" ");
  if (!scheme || !token || scheme.toLowerCase() !== "bearer") return null;
  return token.trim();
}

/** Format a date string as "July 8, 2026 at 2:15 PM UTC". */
function formatCompletionDate(isoString: string | null): string {
  const date = isoString ? new Date(isoString) : new Date();
  if (Number.isNaN(date.getTime())) return "Unknown date";

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  let hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${month} ${day}, ${year} at ${hours}:${minutes} ${ampm} UTC`;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SERVICE_ROLE ??
    process.env.SUPABASE_SECRET_KEY ??
    process.env.SUPABASE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Completion service is not configured (Supabase)." },
      { status: 500 },
    );
  }

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Completion service is not configured (Resend)." },
      { status: 500 },
    );
  }

  // --- DB client (service role — bypasses RLS) ---
  const supabase = createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // --- 1. Authenticate the caller ---
  const accessToken = getBearerToken(request.headers.get("authorization"));
  if (!accessToken) {
    return NextResponse.json({ error: "Missing session." }, { status: 401 });
  }

  const { data: callerData, error: callerError } = await supabase.auth.getUser(accessToken);
  if (callerError || !callerData.user) {
    return NextResponse.json({ error: "Invalid or expired session." }, { status: 401 });
  }

  // --- 2. Parse request body ---
  let payload: CompletionPayload;
  try {
    payload = (await request.json()) as CompletionPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const userId = String(payload.user_id ?? "").trim();
  if (!userId) {
    return NextResponse.json({ error: "Missing user_id." }, { status: 400 });
  }

  // --- 3. Verify caller matches payload (prevent spoofing) ---
  if (callerData.user.id !== userId) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  // --- 4. Fetch progress and verify completion ---
  const { data: progress, error: progressError } = await supabase
    .from("student_progress")
    .select("progress_percent, completion_email_sent, updated_at")
    .eq("user_id", userId)
    .single();

  if (progressError || !progress) {
    return NextResponse.json(
      { error: "Student progress not found." },
      { status: 404 },
    );
  }

  if (progress.completion_email_sent) {
    return NextResponse.json({ ok: true, skipped: "already sent" });
  }

  if (progress.progress_percent !== 100) {
    return NextResponse.json({ ok: true, skipped: "not complete" });
  }

  // --- 5. Atomic lock: conditional update (only succeeds if flag is still false) ---
  const { data: lockResult, error: lockError } = await supabase
    .from("student_progress")
    .update({ completion_email_sent: true })
    .eq("user_id", userId)
    .eq("completion_email_sent", false)
    .select("user_id")
    .maybeSingle();

  if (lockError) {
    console.error("[course-completion] Lock update failed:", lockError.message);
    return NextResponse.json({ error: "Database lock failed." }, { status: 500 });
  }

  // If no row was returned, another concurrent request already acquired the lock.
  if (!lockResult) {
    return NextResponse.json({ ok: true, skipped: "already sent" });
  }

  // --- 6. Fetch student details ---
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("user_id", userId)
    .maybeSingle();

  const studentName = profile?.full_name ?? "Unknown Student";

  // Fetch email from auth
  const { data: authData, error: authError } = await supabase.auth.admin.getUserById(userId);
  if (authError) {
    console.warn("[course-completion] Could not fetch auth user email:", authError.message);
  }
  const studentEmail = authData?.user?.email ?? "Missing Email";

  // --- 7. Format completion date from database timestamp ---
  const completedAt = formatCompletionDate(progress.updated_at);

  // --- 8. Build and send email ---
  const appUrl = supabaseUrl.replace(".supabase.co", "").includes("localhost")
    ? "http://localhost:3000"
    : (request.headers.get("origin") ?? "https://ready2drivepei.com");

  const resend = new Resend(resendApiKey);

  try {
    const { data: emailData } = await resend.emails.send({
      from: "Ready2Drive PEI <onboarding@resend.dev>",
      to: "kamizyt600@gmail.com",
      subject: `Course Completed — ${studentName}`,
      html: buildCompletionEmailHtml({
        studentName,
        studentEmail,
        completedAt,
        adminDashboardUrl: `${appUrl}/admin`,
      }),
    });

    console.log(
      "[course-completion] Course completion email sent\n" +
      `  User ID: ${userId}\n` +
      `  Resend ID: ${emailData?.id ?? "unknown"}`,
    );

    return NextResponse.json({ ok: true });
  } catch (emailError) {
    // --- 9. Revert the lock so future retries can try again ---
    console.error("[course-completion] Resend email failed:", emailError);

    const { error: revertError } = await supabase
      .from("student_progress")
      .update({ completion_email_sent: false })
      .eq("user_id", userId);

    if (revertError) {
      console.error("[course-completion] Failed to revert completion_email_sent flag:", revertError.message);
    }

    return NextResponse.json(
      { error: "Failed to send completion email." },
      { status: 502 },
    );
  }
}

// ---------------------------------------------------------------------------
// Email HTML template
// ---------------------------------------------------------------------------

function buildCompletionEmailHtml(args: {
  studentName: string;
  studentEmail: string;
  completedAt: string;
  adminDashboardUrl: string;
}): string {
  const { studentName, studentEmail, completedAt, adminDashboardUrl } = args;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Course Completion Notification</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color:#0f766e;padding:28px 32px;">
              <h1 style="margin:0;font-size:20px;font-weight:600;color:#ffffff;letter-spacing:-0.3px;">
                Course Completion Notification
              </h1>
              <p style="margin:6px 0 0;font-size:14px;color:#ccfbf1;">
                A learner has successfully completed the driving theory course.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- User -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#94a3b8;font-weight:600;">User</p>
                    <p style="margin:0;font-size:16px;color:#1e293b;font-weight:500;">${studentName}</p>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#94a3b8;font-weight:600;">Email</p>
                    <p style="margin:0;font-size:16px;color:#1e293b;">${studentEmail}</p>
                  </td>
                </tr>

                <!-- Completed -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#94a3b8;font-weight:600;">Completed</p>
                    <p style="margin:0;font-size:16px;color:#1e293b;">${completedAt}</p>
                  </td>
                </tr>

                <!-- Status -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#94a3b8;font-weight:600;">Status</p>
                    <p style="margin:0;font-size:16px;color:#0f766e;font-weight:600;">Successfully completed</p>
                  </td>
                </tr>

                <!-- Certificate -->
                <tr>
                  <td style="padding:12px 0;">
                    <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#94a3b8;font-weight:600;">Certificate</p>
                    <span style="display:inline-block;padding:3px 10px;font-size:13px;font-weight:600;color:#0f766e;background-color:#ccfbf1;border-radius:6px;">Eligible</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding:8px 32px 28px;">
              <a href="${adminDashboardUrl}" target="_blank" rel="noopener noreferrer"
                style="display:block;text-align:center;padding:12px 24px;background-color:#0f766e;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">
                View Admin Dashboard
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">
                Ready2Drive PEI &mdash; Automated notification
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}
