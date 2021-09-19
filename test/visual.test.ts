import test, { expect } from "@playwright/test";

 // Comment this test since it will be failed due to ads
// test("Visual comparison", async({page}) => {
//     await page.goto("https://letcode.in");
//     expect(await page.screenshot({
//         fullPage: true
//     })).toMatchSnapshot("letcode.png");
// });

test("Example test", async({page}) => {
    await page.goto("https://playwright.dev");
    expect(await page.screenshot()).toMatchSnapshot('snapshot-name.png');
})