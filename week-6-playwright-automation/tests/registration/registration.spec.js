/* eslint-disable no-undef */
import { test, expect } from '@playwright/test';
import { RegistrationPage } from "../pages/registrationPage";

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
const baseUrl = process.env.BASE_URL || "https://dev.delekhomes.com";
let registrationPage;


test.beforeEach(async({page}) => {
  await page.goto(`${baseUrl}/auth/register`);
});


test.describe('registration', ()=>{
  test('Should register a new account', async({page})=>{
    registrationPage = new RegistrationPage(page);
    await registrationPage.assertRegistrationPagehasRequiredFields();
    await registrationPage.registerUser();
    await registrationPage.assertProfilePageUrl(baseUrl);
    expect(await registrationPage.realtorWelcomeMessage.isVisible()).toBeTruthy();
  });

  test('Should not register with an already existing email account',async({page})=>{
    registrationPage = new RegistrationPage(page);
    await registrationPage.assertRegistrationPagehasRequiredFields();
    await registrationPage.registerUser();
    await registrationPage.assertRegistrationPageUrl(baseUrl);
    expect(await registrationPage.realtorWelcomeMessage.isVisible()).toBeFalsy();
  });

  test('Should not register without filling in required fields', async({page})=>{
    registrationPage = new RegistrationPage(page);
    await registrationPage.registerUserError();
    expect(await registrationPage.requiredLastName.isVisible()).toBeTruthy();
  })
})

