import {
    emailInput,
    passwordInput,
    submitButton,
    signInButton,
    approveText,
    dataHubTile,
    dataHubText,
    appsDashboardHeader
} from '../locators/login.locator';

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async gotoLoginPage() {
        await this.page.goto('/');
    }

    async fillEmail(email) {
        await emailInput(this.page).fill(email);
    }

    async clickSubmit() {
        await submitButton(this.page).click();
    }

    async fillPassword(password) {
        await passwordInput(this.page).fill(password);
    }

    async clickSignIn() {
        await signInButton(this.page).click();
    }

    async waitForApproveText() {
        await approveText(this.page).waitFor({ timeout: 10000 });
    }

    async handleStaySignedInPrompt() {
        const yesButton = this.page.getByRole('button', { name: 'Yes' });
        if (await yesButton.isVisible({ timeout: 5000 })) {
            await yesButton.click();
        }
    }

    async waitForMicrosoftRedirects() {
        // Wait until the Microsoft login completes
        await this.page.waitForURL(/login\.microsoftonline\.com/, { timeout: 120_000 });

        // ✅ Wait for the actual landing page after successful login
        await this.page.waitForURL(/.*centific\.com\/apps\/apps\/myapps/, { timeout: 120_000 });
    }


    async waitForAuthenticationComplete() {
        // Wait for "Authentication in process" to disappear
        await this.page.getByText('Authentication in process, Please wait ...').waitFor({ state: 'hidden', timeout: 30000 });
    }

    async clickDataHubApp() {
        await this.page.waitForSelector('[data-testid="appdashboard-data-hub"]', { timeout: 30000 });
        await dataHubTile(this.page).click();
    }

    async waitForDataHubVisible() {
        await dataHubText(this.page).waitFor({ state: 'visible', timeout: 15000 });
    }

    async getAppsDashboardHeader() {
        return appsDashboardHeader(this.page);
    }

    async loginToAIDF(email, password) {
        await this.gotoLoginPage();
        await this.fillEmail(email);
        await this.clickSubmit();
        await this.fillPassword(password);
        await this.clickSignIn();
        await this.waitForApproveText();
        await this.handleStaySignedInPrompt();
        await this.waitForMicrosoftRedirects();
        await this.waitForAuthenticationComplete();
    }
}