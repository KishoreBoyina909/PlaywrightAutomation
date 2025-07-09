import { test, expect } from '@playwright/test'
import { linkSync } from 'fs';

test('Finding Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('id=login2');
    await page.locator('#loginusername').fill("Kishore Boyina");

})