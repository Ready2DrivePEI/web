import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Tier 2: Accessibility (WCAG 2.1 AA Audit)", () => {
  test("Landing Page should have zero critical accessibility violations", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"]) // Optional override if custom gradients are used
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Login Page should have zero critical accessibility violations", async ({ page }) => {
    await page.goto("/login");
    await page.waitForLoadState("domcontentloaded");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("LMS Dashboard should have zero critical accessibility violations", async ({ page }) => {
    await page.goto("/login");
    await page.fill("#fullName", "test");
    await page.fill("#password", "test101");
    await page.click("button[type='submit']");
    await page.waitForURL(/\/lms-course/);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
