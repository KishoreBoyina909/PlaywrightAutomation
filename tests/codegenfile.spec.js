import { test, expect } from '@playwright/test';
/* Below is the command for creating file and script using codegen tool 
 npx playwright codegen \
  --target=javascript \
  --output=tests/checkout.spec.js \
  --browser=chromium \
  --device="Desktop Chrome"*/

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});