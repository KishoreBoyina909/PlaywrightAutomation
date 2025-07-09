import { test, expect } from '@playwright/test';

test('Locating Multiple elements', async ({ page }) => {
    console.log('🚀 Test started');

    await page.goto('https://www.demoblaze.com/index.html');
    console.log('✅ Navigated to page');

    // 🔥 Wait for product cards to appear
    await page.waitForSelector("//div[@id='tbodyid']//h4[@class='card-title']/a", { timeout: 10000 });

    const links = await page.$$("//div[@id='tbodyid']//h4[@class='card-title']/a");
    console.log('🔗 Total links found:', links.length);

    for (const link of links) {
        const linkName = await link.textContent();
        console.log('👉 Link name:', linkName?.trim());
    }

    console.log('🏁 Test complete');
});
