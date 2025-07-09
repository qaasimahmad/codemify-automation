/* eslint-disable no-undef */

import { test } from '@playwright/test';
import { LoginPage } from "./pages/loginPage";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const baseUrl = process.env.BASE_URL || "https://dev.delekhomes.com";
const email = process.env.EMAIL || "kasscodemify@yopmail.com";
const password = process.env.PASSWORD || "QaasimAhmad1"
let loginPage;

test.beforeEach(async({page}) => {
  await page.goto(`${baseUrl}/auth/login`);
});


test.describe('Login and Logout', ()=>{
  test('Should log in with your existing account', async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.assertLoginPagehasRequiredFields();
    await loginPage.enterEmailAndPassword(email, password);
    await loginPage.clickSignInButton();

    await loginPage.assertProfilePageUrl(baseUrl);
  })

  test('Should log out', async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.assertLoginPagehasRequiredFields();
    await loginPage.enterEmailAndPassword(email, password);
    await loginPage.clickSignInButton();
    await loginPage.assertProfilePageUrl(baseUrl);
    await loginPage.logout(baseUrl);
  })
});