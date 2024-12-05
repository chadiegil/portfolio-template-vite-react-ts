import { test } from "@playwright/test"

test.describe("Dashboard", () => {
  test("should render correctly", async ({ page }) => {
    await page.goto("/")
  })
})
