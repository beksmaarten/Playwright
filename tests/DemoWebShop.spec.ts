import { test, expect } from '@playwright/test'

test('Simple test', async ({ page }) => {
  // This one is correct and is reading from the .env file
  console.log(process.env.ENV)
  // This one is not correct. It says undefined, but I expect the value as specified in playwright.config.ts
  console.log(process.env.baseURL)
});
