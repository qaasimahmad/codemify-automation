import { test, expect } from '@playwright/test';
import { RegistrationPage } from "../pages/registrationPage";
import config from "../../playwright.config";

const baseUrl = config.use.baseURL;

test.beforeEach(async({page}) => {
  await page.goto(`${baseUrl}/auth/register`);
});


test.describe('registration', ()=>{
  test('Should register a new account', async({page})=>{
    const registrationPage = new RegistrationPage(page);

    await registrationPage.registerUser();
    await registrationPage.assertProfilePageUrl(baseUrl);
    expect(await registrationPage.realtorWelcomeMessage.isVisible()).toBeTruthy();
  });

  test('Should not register with an already existing email account',async({page})=>{
    const registrationPage = new RegistrationPage(page);

    await registrationPage.registerUser();
    await registrationPage.assertRegistrationPageUrl(baseUrl);
    expect(await registrationPage.realtorWelcomeMessage.isVisible()).toBeFalsy();
  });

  test('Should not register without filling in required fields', async({page})=>{
    const registrationPage = new RegistrationPage(page);

    await registrationPage.registerUserError();
    expect(await registrationPage.requiredFirstName.isVisible()).toBeTruthy();
  });
})

