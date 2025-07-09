import { test, expect } from '@playwright/test'

test('Assertions usage', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    const logo = page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();
    const searchBox = page.getByPlaceholder('Search store');
    await expect(searchBox).toBeEnabled();
    const maleRadio = page.locator('#gender-male')
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();
})