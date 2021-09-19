import { expect, Page, test } from "@playwright/test";
import CommonFunctions from "../pages/common.page";
import HeaderPage from "../pages/header.page";
import LoginPage from "../pages/login.page";
import * as data from "../data/login.cred.json";

test.describe("TC0001_Login", () => {
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let commonFunc: CommonFunctions;
  let page: Page;

  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    commonFunc = new CommonFunctions(page);
  });

  test.beforeEach(async() => {
    await page.goto("https://letcode.in");
  })

  test("Login: happy cases", async () => {
    expect(page.url()).toBe("https://letcode.in/");
    await headerPage.clickLoginLink();
    await page.waitForLoadState();
    expect(page.url()).toBe("https://letcode.in/signin"); // Intentionally make it fails here  
    await loginPage.enterUserName(data.email);
    await loginPage.enterPassword(data.pass);
    await loginPage.clickLoginButton();
    const toaster = await commonFunc.toastMessage();
    expect(await toaster?.textContent()).toContain("Welcome");
    await headerPage.clickSignOutLink();
  });

  test("Login again", async() => {
      await headerPage.clickLoginLink();
      await page.waitForLoadState();
      await loginPage.login(data.email, data.pass);
      await page.waitForLoadState();
      console.log(page.url());
      // expect(page.url()).toBe("https://www.letcode.in/");
  })
});
