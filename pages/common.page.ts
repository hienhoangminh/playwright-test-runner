import { Page } from "playwright";

export default class CommonFunctions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  toastMessage = async () => await this.page.waitForSelector("div[role='alertdialog']");
}
