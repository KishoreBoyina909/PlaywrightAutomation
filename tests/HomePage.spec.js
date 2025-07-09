import { test, expect } from '@playwright/test'

test('First Playwright test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');
    const screenTitle = await page.title();
    console.log('Page Title is:', screenTitle);
    await expect(page).toHaveTitle('STORE');
    const pageUrl = await page.url();
    console.log('Page Url is:', pageUrl)
    await expect(page).toHaveURL(pageUrl);
    await page.close();

})