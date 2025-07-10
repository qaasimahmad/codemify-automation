import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import config from "../../playwright.config";

const baseUrl = config.use.baseURL;

test.beforeEach(async({page}) => {
  await page.goto(`${baseUrl}/auth/login`);
});


test.describe('Login and Logout', ()=>{
  test('Should log in with your existing account', async({page})=>{
    const loginPage = new LoginPage(page);

    const firstName = "Qaasim";
    const lastName = "Ahmad";
    const expectedProfileName = `${firstName} ${lastName}`;

    await loginPage.logIn(page);
    await loginPage.assertProfilePageUrl(baseUrl);
    const heading = page.getByRole('heading', { name: expectedProfileName });

    await expect(heading).toHaveText(expectedProfileName);
  })

  test('Should log out', async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.logIn(page);
    await loginPage.assertProfilePageUrl(baseUrl);
    await loginPage.logout(baseUrl);
  })
});