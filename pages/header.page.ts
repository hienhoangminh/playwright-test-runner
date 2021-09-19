import { Page } from "playwright";

export default class HeaderPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  eleLoginLink = async () => await this.page.waitForSelector("text=Log in");
  eleSignOutLink = async () => await this.page.waitForSelector("text=Sign out");

  public async clickLoginLink() {
    const loginLink = await this.eleLoginLink();
    if (loginLink != null) {
      await Promise.all([
        this.page.waitForNavigation(),
        loginLink.click()
      ]);
    } else {
      throw new Error("Login link not found or dettached! Please check again!");
    }

  }

  public async clickSignOutLink() {
    const signOutLink = await this.eleSignOutLink();
    if (signOutLink != null) {
      await signOutLink.click();
    } else {
      throw new Error("Sign out link not found or dettached! Please check again!");
    }
  }
}
