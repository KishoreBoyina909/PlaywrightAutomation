export const emailInput = (page) => page.getByPlaceholder('Enter Email');
export const submitButton = (page) =>
    page.locator('[data-testid="cta-submit-signin"]');
export const passwordInput = (page) => page.getByPlaceholder('Password');
export const signInButton = (page) => page.getByRole('button', { name: 'Sign in' });
export const approveText = (page) => page.getByText('Approve sign in request');
export const dataHubTile = (page) => page.getByTestId('appdashboard-data-hub');
export const dataHubText = (page) =>
    page.locator('div.app-name:visible', { hasText: 'Data Hub' });
export const appsDashboardHeader = (page) =>
    page.locator('div.custom-card-header', { hasText: 'Apps Dashboard' });