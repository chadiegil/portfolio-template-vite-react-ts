import { test, expect } from "@playwright/test"

test("catch JavaScript errors", async ({ page }) => {
  // Listen for console errors
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.error(`JavaScript Error: ${msg.text()}`)
    }
  })

  // Navigate to your app
  await page.goto("http://localhost:5173/") // replace with your actual URL

  // Verify the page loads without JavaScript errors
  await expect(page).toHaveTitle("Your Page Title") // Replace with actual title of your app

  // Additional checks for your app can go here
})
