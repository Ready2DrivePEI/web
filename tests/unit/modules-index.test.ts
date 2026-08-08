import { describe, it, expect } from "vitest";
import {
  getFirstChapterId,
  getChapterIndex,
  getChapterById,
  getChapterHref,
  getNextChapter,
  getProgressPercentForChapter,
  orderedChapters,
  courseModules,
} from "@/app/lms-course/data/modules";

describe("Course Modules & Chapters Utility Functions", () => {
  it("should return a non-null valid first chapter ID", () => {
    // Act
    const firstId = getFirstChapterId();

    // Assert
    expect(firstId).not.toBeNull();
    expect(typeof firstId).toBe("string");
    expect(getChapterIndex(firstId as string)).toBe(0);
  });

  it("should return index 0 for the first chapter and -1 for non-existent chapter ID", () => {
    // Arrange
    const firstChapterId = orderedChapters[0].chapterId;

    // Act & Assert
    expect(getChapterIndex(firstChapterId)).toBe(0);
    expect(getChapterIndex("invalid-chapter-id-xyz")).toBe(-1);
    expect(getChapterIndex("")).toBe(-1);
  });

  it("should look up a chapter by ID and return matching OrderedChapter record", () => {
    // Arrange
    const targetChapter = orderedChapters[0];

    // Act
    const found = getChapterById(targetChapter.chapterId);

    // Assert
    expect(found).not.toBeNull();
    expect(found?.chapterId).toBe(targetChapter.chapterId);
    expect(found?.moduleId).toBe(targetChapter.moduleId);
  });

  it("should return null when searching for unknown chapter ID via getChapterById", () => {
    // Act
    const result = getChapterById("non-existent-id");

    // Assert
    expect(result).toBeNull();
  });

  describe("getNextChapter() Invariant Rules", () => {
    it("should never return the current chapter", () => {
      // Arrange
      const firstChapterId = orderedChapters[0].chapterId;

      // Act
      const next = getNextChapter(firstChapterId);

      // Assert
      expect(next).not.toBeNull();
      expect(next?.chapterId).not.toBe(firstChapterId);
    });

    it("should return null when calling getNextChapter on the final chapter", () => {
      // Arrange
      const lastChapterId = orderedChapters[orderedChapters.length - 1].chapterId;

      // Act
      const next = getNextChapter(lastChapterId);

      // Assert
      expect(next).toBeNull();
    });

    it("should return null for an invalid chapter ID", () => {
      // Act & Assert
      expect(getNextChapter("invalid-id")).toBeNull();
    });
  });

  describe("getProgressPercentForChapter() Range Invariants (0% to 100%)", () => {
    it("should return 0% for null or invalid chapter IDs", () => {
      expect(getProgressPercentForChapter(null)).toBe(0);
      expect(getProgressPercentForChapter("invalid-chapter")).toBe(0);
      expect(getProgressPercentForChapter("")).toBe(0);
    });

    it("should return 100% for the final chapter", () => {
      // Arrange
      const lastChapterId = orderedChapters[orderedChapters.length - 1].chapterId;

      // Act
      const percent = getProgressPercentForChapter(lastChapterId);

      // Assert
      expect(percent).toBe(100);
    });

    it("should satisfy invariant: 0 <= percent <= 100 for all valid chapters", () => {
      // Act & Assert
      for (const chapter of orderedChapters) {
        const percent = getProgressPercentForChapter(chapter.chapterId);
        expect(percent).toBeGreaterThan(0);
        expect(percent).toBeLessThanOrEqual(100);
      }
    });
  });

  it("should generate valid chapter URLs for regular, midsem, and final assessment chapters", () => {
    // Arrange
    const firstChapterId = orderedChapters[0].chapterId;

    // Act
    const href = getChapterHref(firstChapterId);

    // Assert
    expect(href).not.toBeNull();
    expect(href).toContain("/lms-course/module/");
  });
});
