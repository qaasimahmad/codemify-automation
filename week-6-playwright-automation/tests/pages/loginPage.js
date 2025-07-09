/* eslint-disable no-undef */
import { expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export class LoginPage{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page){
    this.page = page;
    this.headingText = "Sign in to Delek Homes";
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Login' });
    this.pageheading = page.getByText(this.headingText, {exact: true});
    this.bannerBtn = page.getByRole('banner').getByRole('button');
    this.menuItem = page.getByRole('menuitem', { name: 'Logout' });
  }


  async isEmailFieldVisible(){
    const result = await this.email.isVisible();

    expect(result).toBe(true)
  }

  async isHeadingVisible(){
    const result = await this.pageheading.isVisible();

    expect(result).toBe(true)
  }

  async isPasswordFieldVisible(){
    const result = await this.password.isVisible();

    expect(result).toBe(true)
  }

  async isSignInButtonVisible(){
    const result = await this.signInButton.isVisible();

    expect(result).toBe(true)
  }

  async enterEmailAndPassword(email, password){
    await this.email.fill(email);
    await this.password.fill(password);
  }

  async clickSignInButton(){
    await this.signInButton.click({force: true});
  }

  async signIn(successfulLoginUrl, baseUrl){
    await this.clickSignInButton();
    await this.assertPageUrl(successfulLoginUrl, baseUrl);
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

  async assertLoginPagehasRequiredFields(){
    await this.isEmailFieldVisible();
    await this.isPasswordFieldVisible();
    await this.isSignInButtonVisible();
  }

  async logout(baseUrl){
    expect(await this.bannerBtn.isVisible()).toBeTruthy();
    await this.bannerBtn.click();
    expect(await this.menuItem.isVisible()).toBeTruthy();
    await this.menuItem.click();
    await this.assertLoginPageUrl(baseUrl);
  }

}
export default LoginPage;