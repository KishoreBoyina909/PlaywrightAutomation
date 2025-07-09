// locators/login.locator.js
export const emailInput = (page) => page.getByPlaceholder('Enter Email');
export const nextButton = (page) => page.getByRole('button', { type: 'submit' });
export const passwordInput = (page) => page.getByPlaceholder('Password');
export const signInButton = (page) => page.getByRole('button', { name: 'Sign in' });
export const dataHubTile = (page) => page.getByTestId('appdashboard-data-hub');
