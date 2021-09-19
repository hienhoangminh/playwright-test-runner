import test from "@playwright/test";

test("Interact with shadow DOM", async({page}) => {
    await page.goto("https://letcode.in/shadow");
    await page.fill("#fname", "koushik");
    await page.waitForTimeout(7000);
});

test("Chromium bug app", async({page}) => {
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
    const el = await page.$("#can");
    if(el){
       await el.selectOption({
           label: "Issues to verify"
       });
    }else throw new Error("Element not found");
    await page.fill("#searchq", "some bug");
    await page.waitForTimeout(7000);

});