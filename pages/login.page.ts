import { Page } from "playwright";

export default class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  eleMailTextField = async () => await this.page.$("input[name='email']");
  elePassTextField = async () => await this.page.$("input[name='password']");
  eleLoginBtn = async () => await this.page.$("//button[text()='LOGIN']");

  public async enterUserName(name: string) {
    const ele = await this.eleMailTextField();
    if(ele != null){
       await ele.fill(name);
    }else{
      throw new Error("User name field not found or dettached! Please check again");
    }
  }

  public async enterPassword(pass: string) {
    const ele = await this.elePassTextField();
    if(ele != null){
    await ele.fill(pass);
    }else{
      throw new Error("Password field not found or dettached! Please check again");
    }
  }

  public async clickLoginButton() {
    const button = await this.eleLoginBtn();
    if(button != null){
    await button?.click();
    }else {
      throw new Error("Login button not found or dettached! Please check again");
    }
  }

  public async login(email: string, pass: string) {
    await this.enterUserName(email);
    await this.enterPassword(pass);
    await this.clickLoginButton();
  }
}
