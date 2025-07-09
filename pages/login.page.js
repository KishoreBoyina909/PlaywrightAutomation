import {
    emailInput,
    passwordInput,
    submitButton,
    signInButton,
    approveText,
    dataHubTile,
    dataHubText
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

    async waitForMicrosoftRedirects() {
        await this.page.waitForURL('https://login.microsoftonline.com/e2641ba0-d27c-4997-ac7e-ca388da2d5d4/login', { timeout: 120_000 });
        await this.page.waitForURL('https://login.microsoftonline.com/common/SAS/ProcessAuth', { timeout: 120_000 });
    }

    async clickDataHubApp() {
        await dataHubTile(this.page).click();
    }

    async verifyDataHubVisible() {
        await dataHubText(this.page).waitFor({ timeout: 10000 });
    }

    // 💡 HIGH-LEVEL composed method
    async loginToAIDF(email, password) {
        await this.gotoLoginPage();
        await this.fillEmail(email);
        await this.clickSubmit();
        await this.fillPassword(password);
        await this.clickSignIn();
        await this.waitForApproveText();
        await this.waitForMicrosoftRedirects();
        await this.clickDataHubApp();
        await this.verifyDataHubVisible();
    }
}
