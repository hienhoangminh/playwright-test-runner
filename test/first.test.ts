import { expect, Page, test } from "@playwright/test";

test.describe("Test suite Letcode", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://letcode.in/");
  });

  test("Open letcode & verify title", async () => {
    const title = await page.title();
    expect(title).toBe("LetCode with Koushik");
  });

  test("Open letcode and login", async () => {
    await Promise.all([
      page.waitForNavigation(),
      page.click("text=/.*Log in.*/"),
    ]);
    await page.click('input[name="email"]');
    await page.fill('input[name="email"]', "koushik350@gmail.com");
    await page.fill('input[name="password"]', "Pass123$");
    await Promise.all([
        page.waitForNavigation(),
        page.click("//button[normalize-space(.)='LOGIN']"),
    ]);
    expect(page.url()).toContain("https://letcode.in/");
  });
});
