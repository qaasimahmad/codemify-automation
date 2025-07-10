/* eslint-disable no-undef */
import { expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export class LoginPage{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page){
    this.page = page;
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Login' });
    this.profileBannerBtn = page.getByRole('banner').getByRole('button');
    this.profileMenuItem = page.getByRole('menuitem', { name: 'Logout' });
  }


  async isSignInButtonVisible(){
    const result = await this.signInButton.isVisible();

    expect(result).toBe(true)
  }

  async logIn(page){
    await expect(page).toHaveURL(/\/auth\/login/);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.isSignInButtonVisible();
    await expect(this.signInButton).toBeEnabled();
    await this.signInButton.click();
  }

  async assertProfilePageUrl(baseUrl){
    const pageUrl = `${baseUrl}/dashboard/user/profile`;

    await this.page.waitForURL(pageUrl);
    await expect(this.page).toHaveURL(pageUrl);
  }

  async assertLoginPageUrl(baseUrl){
    const pageUrl = `${baseUrl}/auth/login`;

    await this.page.waitForURL(pageUrl);
    await expect(this.page).toHaveURL(pageUrl);
  }

  async logout(baseUrl){
    expect(await this.profileBannerBtn.isVisible()).toBeTruthy();
    await this.profileBannerBtn.click();
    expect(await this.profileMenuItem.isVisible()).toBeTruthy();
    await this.profileMenuItem.click();
    await this.assertLoginPageUrl(baseUrl);
  }

}
export default LoginPage;