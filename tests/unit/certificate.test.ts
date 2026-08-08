import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { getCertificateStatus } from "@/lib/certificate";

describe("getCertificateStatus API Helper", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("should return normalized response shape when API returns existing certificate", async () => {
    // Arrange
    const mockPayload = { exists: true, url: "https://example.com/cert.pdf" };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockPayload,
    } as Response);

    // Act
    const result = await getCertificateStatus();

    // Assert
    expect(result).toEqual({
      exists: true,
      url: "https://example.com/cert.pdf",
    });
  });

  it("should normalize url to null when certificate does not exist", async () => {
    // Arrange
    const mockPayload = { exists: false };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockPayload,
    } as Response);

    // Act
    const result = await getCertificateStatus();

    // Assert
    expect(result).toEqual({
      exists: false,
      url: null,
    });
  });

  it("should throw an error on 404 Not Found response", async () => {
    // Arrange
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    } as Response);

    // Act & Assert
    await expect(getCertificateStatus()).rejects.toThrow("Failed to fetch certificate status");
  });

  it("should throw an error on 500 Internal Server Error response", async () => {
    // Arrange
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    } as Response);

    // Act & Assert
    await expect(getCertificateStatus()).rejects.toThrow("Failed to fetch certificate status");
  });

  it("should handle network failure gracefully (Fetch rejection)", async () => {
    // Arrange
    global.fetch = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));

    // Act & Assert
    await expect(getCertificateStatus()).rejects.toThrow("Failed to fetch");
  });

  it("should handle invalid/malformed JSON response gracefully", async () => {
    // Arrange
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => {
        throw new SyntaxError("Unexpected token < in JSON at position 0");
      },
    } as unknown as Response);

    // Act & Assert
    await expect(getCertificateStatus()).rejects.toThrow(SyntaxError);
  });

  it("should pass AbortSignal to fetch and support aborted request cancellation", async () => {
    // Arrange
    const controller = new AbortController();
    controller.abort();

    global.fetch = vi.fn().mockImplementation((_url, options) => {
      if (options?.signal?.aborted) {
        return Promise.reject(new DOMException("The operation was aborted.", "AbortError"));
      }
      return Promise.resolve({ ok: true, json: async () => ({ exists: false }) });
    });

    // Act & Assert
    await expect(getCertificateStatus(controller.signal)).rejects.toThrow("aborted");
  });
});
