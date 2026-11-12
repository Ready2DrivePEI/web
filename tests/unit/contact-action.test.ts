import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const { mockInsert, mockSend } = vi.hoisted(() => ({
  mockInsert: vi.fn(),
  mockSend: vi.fn(),
}));

vi.mock("@/lib/supabase/admin", () => ({
  adminClient: {
    from: vi.fn(() => ({
      insert: mockInsert,
    })),
  },
}));

vi.mock("resend", () => ({
  Resend: class MockResend {
    emails = {
      send: mockSend,
    };
  },
}));

import { sendContactInquiry } from "@/app/actions/contact";

function buildValidFormData(overrides?: Record<string, string>): FormData {
  const fd = new FormData();
  fd.set("submissionId", "123e4567-e89b-12d3-a456-426614174000");
  fd.set("firstName", "test");
  fd.set("lastName", "test");
  fd.set("email", "test@test.com");
  fd.set("phone", "1234567890");
  fd.set("plan", "General Inquiry");
  fd.set("message", "test");
  if (overrides) {
    for (const [k, v] of Object.entries(overrides)) {
      fd.set(k, v);
    }
  }
  return fd;
}

describe("sendContactInquiry", () => {
  const originalApiKey = process.env.RESEND_API_KEY;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RESEND_API_KEY = "re_test_key";
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env.RESEND_API_KEY = originalApiKey;
    vi.restoreAllMocks();
  });

  it("still sends email and returns success when Supabase insert returns a DB error", async () => {
    mockInsert.mockResolvedValue({ error: { code: "42P01", message: "relation does not exist" } });
    mockSend.mockResolvedValue({ data: { id: "email_123" }, error: null });

    const result = await sendContactInquiry(buildValidFormData());

    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ success: true });
  });

  it("still sends email and returns success when Supabase throws a network error", async () => {
    mockInsert.mockRejectedValue(new Error("connect ETIMEDOUT"));
    mockSend.mockResolvedValue({ data: { id: "email_456" }, error: null });

    const result = await sendContactInquiry(buildValidFormData());

    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ success: true });
  });

  it("stops duplicate email dispatch on Supabase unique violation (23505)", async () => {
    mockInsert.mockResolvedValue({ error: { code: "23505", message: "duplicate key" } });

    const result = await sendContactInquiry(buildValidFormData());

    expect(mockSend).not.toHaveBeenCalled();
    expect(result.success).toBe(false);
    expect(result.code).toBe("DUPLICATE_SUBMISSION");
  });

  it("returns DELIVERY_ERROR only when both Supabase and Resend fail", async () => {
    mockInsert.mockResolvedValue({ error: { code: "500", message: "db down" } });
    mockSend.mockResolvedValue({ data: null, error: { message: "Resend down" } });

    const result = await sendContactInquiry(buildValidFormData());

    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      success: false,
      code: "DELIVERY_ERROR",
      message: "Failed to submit inquiry. Please try again.",
    });
  });
});
