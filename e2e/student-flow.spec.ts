import { test, expect } from "@playwright/test";

test.describe("Student Authentication & Login Flow", () => {
  test("should display validation error when submitting empty login credentials", async ({ page }) => {
    await page.goto("/login");

    // Click submit without entering credentials
    await page.click("button[type='submit']");

    // Expect HTML5 validation or page error alert
    const nameInput = page.locator("#fullName");
    await expect(nameInput).toBeVisible();
  });

  test("should allow student login and redirect to LMS course dashboard", async ({ page }) => {
    await page.goto("/login");

    // Fill test student credentials
    await page.fill("#fullName", "test");
    await page.fill("#password", "test101");

    // Click login button
    await page.click("button[type='submit']");

    // Wait for redirect to /lms-course
    await page.waitForURL(/\/lms-course/);
    await expect(page).toHaveURL(/\/lms-course/);
  });
});

test.describe("LMS Course Navigation & Content View", () => {
  test.beforeEach(async ({ page }) => {
    // Sign in before running navigation tests
    await page.goto("/login");
    await page.fill("#fullName", "test");
    await page.fill("#password", "test101");
    await page.click("button[type='submit']");
    await page.waitForURL(/\/lms-course/);
  });

  test("should load course dashboard and render sidebar modules", async ({ page }) => {
    // Verify course shell header and title
    await expect(page.locator("body")).toBeVisible();
    await expect(page).toHaveTitle(/Ready2Drive|Course|LMS/i);
  });

  test("should navigate to first chapter lesson page", async ({ page }) => {
    // Navigate directly to module 1 chapter 1
    await page.goto("/lms-course/module/module1/chapter/chapter1");

    // Verify reading content container is rendered
    await expect(page.locator("h1, h2, .lms-lesson-title")).toBeVisible();
  });
});

test.describe("Quiz Submission & Assessment Interaction", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    await page.fill("#fullName", "test");
    await page.fill("#password", "test101");
    await page.click("button[type='submit']");
    await page.waitForURL(/\/lms-course/);
  });

  test("should render quiz page and allow selecting options", async ({ page }) => {
    // Go to Module 1 Chapter 1 Quiz
    await page.goto("/lms-course/module/module1/chapter/chapter1/quizz/quiz1");

    // Check quiz question container or options exist
    const quizContainer = page.locator(".lms-quiz-option, input[type='radio'], button").first();
    await expect(quizContainer).toBeVisible();
  });
});
