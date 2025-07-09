import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { validUser } from '../utils/testData';

test('Login and navigate to Data Hub app', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToAIDF(validUser.email, validUser.password);
});
