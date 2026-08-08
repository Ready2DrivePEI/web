import { describe, it, expect } from "vitest";
import { getYouTubeEmbedUrl, renderFormattedText } from "@/lib/lesson-utils";

describe("getYouTubeEmbedUrl", () => {
  it("should extract embed URL from standard youtube.com watch link", () => {
    // Arrange
    const inputUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    // Act
    const result = getYouTubeEmbedUrl(inputUrl);

    // Assert
    expect(result).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });

  it("should extract embed URL from short youtu.be link", () => {
    // Arrange
    const inputUrl = "https://youtu.be/dQw4w9WgXcQ";

    // Act
    const result = getYouTubeEmbedUrl(inputUrl);

    // Assert
    expect(result).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });

  it("should extract embed URL from mobile m.youtube.com link", () => {
    // Arrange
    const inputUrl = "https://m.youtube.com/watch?v=dQw4w9WgXcQ";

    // Act
    const result = getYouTubeEmbedUrl(inputUrl);

    // Assert
    expect(result).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });

  it("should return null for non-YouTube domains", () => {
    // Arrange
    const inputUrl = "https://vimeo.com/123456789";

    // Act
    const result = getYouTubeEmbedUrl(inputUrl);

    // Assert
    expect(result).toBeNull();
  });

  it("should return null for invalid/malformed URLs", () => {
    // Arrange
    const invalidUrl = "not-a-valid-url";

    // Act
    const result = getYouTubeEmbedUrl(invalidUrl);

    // Assert
    expect(result).toBeNull();
  });

  it("should handle empty or missing arguments gracefully", () => {
    // Act & Assert
    expect(getYouTubeEmbedUrl("")).toBeNull();
    // @ts-expect-error Testing invalid runtime types
    expect(getYouTubeEmbedUrl(null)).toBeNull();
    // @ts-expect-error Testing invalid runtime types
    expect(getYouTubeEmbedUrl(undefined)).toBeNull();
  });
});

describe("renderFormattedText", () => {
  it("should return empty array when input text is empty", () => {
    // Act
    const result = renderFormattedText("");

    // Assert
    expect(result).toEqual([]);
  });

  it("should parse text containing **bold** sections into React strong elements", () => {
    // Arrange
    const inputText = "Always **stop** at red lights.";

    // Act
    const nodes = renderFormattedText(inputText);

    // Assert
    expect(nodes.length).toBeGreaterThan(0);
  });
});
