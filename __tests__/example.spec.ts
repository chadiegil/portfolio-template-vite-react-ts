import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test("should render correctly", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/")

    // Get the page title
    const title = await page.title()

    // Log the title (optional)
    console.log("Page title:", title)

    // Assert the title is as expected
    await expect(page.getByText("Home")).toBeVisible()
  })
})
