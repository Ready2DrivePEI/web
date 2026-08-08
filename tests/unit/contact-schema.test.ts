import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

describe("contactSchema Zod Validation", () => {
  const validPayload = {
    submissionId: "123e4567-e89b-12d3-a456-426614174000",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(902) 555-1234",
    plan: "Online Course Purchase",
    message: "I would like to register for the online course.",
  };

  it("should pass validation for a completely valid payload", () => {
    // Act
    const result = contactSchema.safeParse(validPayload);

    // Assert
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.firstName).toBe("John");
      expect(result.data.email).toBe("john.doe@example.com");
    }
  });

  it("should fail validation if submissionId is not a valid UUID", () => {
    // Arrange
    const invalidPayload = { ...validPayload, submissionId: "not-a-uuid" };

    // Act
    const result = contactSchema.safeParse(invalidPayload);

    // Assert
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Invalid submission ID");
    }
  });

  it("should fail validation if firstName is empty or only whitespace", () => {
    // Arrange
    const invalidPayload = { ...validPayload, firstName: "   " };

    // Act
    const result = contactSchema.safeParse(invalidPayload);

    // Assert
    expect(result.success).toBe(false);
  });

  it("should fail validation if email format is invalid", () => {
    // Arrange
    const invalidPayload = { ...validPayload, email: "invalid-email-at-domain.com" };

    // Act
    const result = contactSchema.safeParse(invalidPayload);

    // Assert
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Invalid email");
    }
  });

  describe("Phone number boundary tests (10 to 15 digits)", () => {
    it("should fail for a 9-digit phone number (below lower bound)", () => {
      // Arrange (9 digits: 902555123)
      const payload = { ...validPayload, phone: "902-555-123" };

      // Act
      const result = contactSchema.safeParse(payload);

      // Assert
      expect(result.success).toBe(false);
    });

    it("should pass for a 10-digit phone number (exact lower bound)", () => {
      // Arrange (10 digits: 9025551234)
      const payload = { ...validPayload, phone: "902-555-1234" };

      // Act
      const result = contactSchema.safeParse(payload);

      // Assert
      expect(result.success).toBe(true);
    });

    it("should pass for a 15-digit phone number (exact upper bound)", () => {
      // Arrange (15 digits)
      const payload = { ...validPayload, phone: "123456789012345" };

      // Act
      const result = contactSchema.safeParse(payload);

      // Assert
      expect(result.success).toBe(true);
    });

    it("should fail for a 16-digit phone number (above upper bound)", () => {
      // Arrange (16 digits)
      const payload = { ...validPayload, phone: "1234567890123456" };

      // Act
      const result = contactSchema.safeParse(payload);

      // Assert
      expect(result.success).toBe(false);
    });
  });

  it("should fail if plan selection is not in allowed enum options", () => {
    // Arrange
    const payload = { ...validPayload, plan: "Invalid Package Name" };

    // Act
    const result = contactSchema.safeParse(payload);

    // Assert
    expect(result.success).toBe(false);
  });

  it("should fail if message exceeds maximum allowed limit of 500 characters", () => {
    // Arrange (501 characters)
    const longMessage = "a".repeat(501);
    const payload = { ...validPayload, message: longMessage };

    // Act
    const result = contactSchema.safeParse(payload);

    // Assert
    expect(result.success).toBe(false);
  });
});
