/* eslint-disable no-undef */
import { expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import randomString from "randomstring";
dotenv.config({ path: path.resolve(__dirname, '.env') });

export class RegistrationPage{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page){
    this.page = page;
    this.pageheading = page.getByRole('heading', { name: 'Get started absolutely free.' });
    this.firstName = page.getByRole('textbox', { name: 'First name' });
    this.lastName = page.getByRole('textbox', { name: 'Last name' });
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.realtorCheckbox = page.getByRole('checkbox', { name: 'Register as Realtor' });
    this.realtorWelcomeMessage = page.getByRole('heading', { name: 'Realtor Welcome' });
    this.successfulRegistrationText = page.getByText('Thank you for registering');
    this.closebtnSuccessModal = page.getByRole('button', { name: 'Close' });
    this.headingPostRegistration = page.getByRole('heading', { name: 'Account' });
    this.requiredLastName = page.getByText('First name required');
  }

  generateId(){
    return randomString.generate(10);
  }

  async isPageHeadingVisible(){
    const result = await this.pageheading.isVisible();

    expect(result).toBe(true)
  }

  async isFirstNameFieldVisible(){
    const result = await this.firstName.isVisible();

    expect(result).toBe(true)
  }

  async isLastNameVisible(){
    const result = await this.lastName.isVisible();

    expect(result).toBe(true)
  }

  async isEmailFieldVisible(){
    const result = await this.email.isVisible();

    expect(result).toBe(true)
  }

  async isPasswordFieldVisible(){
    const result = await this.password.isVisible();

    expect(result).toBe(true)
  }

  async isRegisterBtnVisible(){
    const result = await this.registerButton.isVisible();

    expect(result).toBe(true)
  }

  async isRealtorCheckBoxVisible(){
    const result = await this.realtorCheckbox.isVisible();

    expect(result).toBe(true)
  }

  async isCloseBtnFieldVisible(){
    const result = await this.closebtnSuccessModal.isVisible();

    expect(result).toBe(true)
  }

  async isSuccesseRegistrationTextVisible(){
    const result = await this.successfulRegistrationText.isVisible();

    expect(result).toBe(true)
  }

  async isRealtorWelcomeMsgVisible(){
    const result = await this.realtorWelcomeMessage.isVisible();

    expect(result).toBe(true)
  }


  async assertRegistrationPagehasRequiredFields(){
    await this.isPageHeadingVisible();
    await this.isFirstNameFieldVisible();
    await this.isLastNameVisible();
    await this.isEmailFieldVisible();
    await this.isPasswordFieldVisible();
    await this.isRegisterBtnVisible();
  }

  async registerUser(){
    const email = `${this.generateId()}@yopmail.com`;
    const password = process.env.PASSWORD || "QaasimAhmad1";

    await this.isRealtorCheckBoxVisible();
    await this.realtorCheckbox.check();
    await this.firstName.fill("Qaasim");
    await this.lastName.fill("Ahmad");
    await this.email.fill(email);
    await this.password.fill(password);
    await this.registerButton.click({force: true});
  }

  async registerUserError(){
    await this.lastName.fill("Ahmad");
    const email = `${this.generateId()}@yopmail.com`;

    await this.email.fill(email);
    await this.realtorCheckbox.check();
    await this.registerButton.click({force: true});
  }

  async assertProfilePageUrl(baseUrl){
    const pageUrl = `${baseUrl}/dashboard/user/profile`;

    await this.page.waitForURL(pageUrl);
    await expect(this.page).toHaveURL(pageUrl);
  }

  async assertRegistrationPageUrl(baseUrl){
    const pageUrl = `${baseUrl}/auth/register`;

    await expect(this.page).toHaveURL(pageUrl);
  }

}
export default RegistrationPage;