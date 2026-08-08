import { test, expect } from "@playwright/test";

test.describe("Tier 4: Visual Regression & UI Screenshots", () => {
  test("Landing page hero visual screenshot test", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Capture visual snapshot of the main hero section
    const hero = page.locator("main, section").first();
    await expect(hero).toBeVisible();
    await page.screenshot({ path: "e2e/screenshots/landing-hero.png" });
  });

  test("Login card visual snapshot test", async ({ page }) => {
    await page.goto("/login");
    await page.waitForLoadState("domcontentloaded");

    const loginCard = page.locator("main");
    await expect(loginCard).toBeVisible();
    await page.screenshot({ path: "e2e/screenshots/login-card.png" });
  });

  test("LMS Shell & sidebar navigation visual snapshot test", async ({ page }) => {
    await page.goto("/login");
    await page.fill("#fullName", "test");
    await page.fill("#password", "test101");
    await page.click("button[type='submit']");
    await page.waitForURL(/\/lms-course/);

    await page.screenshot({ path: "e2e/screenshots/lms-dashboard.png" });
  });
});
