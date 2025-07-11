/* eslint-disable no-undef */
import { expect } from '@playwright/test';
import dotenv from 'dotenv';
import randomString from "randomstring";
dotenv.config();

export class RegistrationPage{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page){
    this.page = page;
    this.firstName = page.getByRole('textbox', { name: 'First name' });
    this.lastName = page.getByRole('textbox', { name: 'Last name' });
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.realtorCheckbox = page.getByRole('checkbox', { name: 'Register as Realtor' });
    this.realtorWelcomeMessage = page.getByRole('heading', { name: 'Realtor Welcome' });
    this.requiredFirstName = page.getByText('First name required');
    this.requiredPassword = page.getByText('Password is required');
  }

  generateId(){
    return randomString.generate(10);
  }

  async isRegisterBtnVisible(){
    const result = await this.registerButton.isVisible();

    expect(result).toBe(true)
  }

  async isRealtorCheckBoxVisible(){
    const result = await this.realtorCheckbox.isVisible();

    expect(result).toBe(true)
  }

  async isRealtorWelcomeMsgVisible(){
    const result = await this.realtorWelcomeMessage.isVisible();

    expect(result).toBe(true)
  }

  async registerUser(){
    const email = `${this.generateId()}@yopmail.com`;
    const password = process.env.PASSWORD;

    await this.isRealtorCheckBoxVisible();
    await this.realtorCheckbox.check();
    await this.firstName.fill("Qaasim");
    await this.lastName.fill("Ahmad");
    await this.email.fill(email);
    await this.password.fill(password);
    await this.isRegisterBtnVisible();
    await expect(this.registerButton).toBeEnabled();
    await this.registerButton.click();
  }

  async registerUserError(){
    await this.lastName.fill("Ahmad");
    const email = `${this.generateId()}@yopmail.com`;

    await this.email.fill(email);
    await this.realtorCheckbox.check();
    await expect(this.registerButton).toBeEnabled();
    await this.registerButton.click();
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
