import test, { expect } from "@playwright/test";


test("Signin into Github", async({page}) => {
  await page.goto("https://github.com/login");
  await page.fill("input:below(:text('Username or email address'))", "hienhoangminh");
  await page.fill("input:above(:text('Sign in'))", "password");
  await page.click("a:near(:text('Password'))");
  expect(page.url()).toBe("https://github.com/password_reset");
  await page.waitForTimeout(5000); 
});

test.only("Medimum case", async({page}) => {
    await page.goto("https://opengiro.ing.de/pub/girokonto-einzelkonto");
    await page.waitForLoadState();
    const acceptCookieBtn = await page.waitForSelector('#uc-btn-accept-banner');
    await acceptCookieBtn.click();
    // await page.waitForLoadState();
    await page.fill("input:below(:text('Prof.')):right-of(:text('Vorname'))", "Hien");
    await page.waitForTimeout(10000);
})