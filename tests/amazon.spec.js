const { chromium, test, expect } = require('@playwright/test')

test ('browser launch',async()=>{
    const browser = await chromium.launch();
const context = await browser.newContext();
const page1 = await context.newPage();
await page1.goto('https://www.amazon.in/');
await page1.waitForTimeout(2000);
await expect(page1).toHaveURL('https://www.amazon.in/');
await page1.waitForTimeout(2000);
await page1.locator('//a[contains (text(),"Today")]/following-sibling::a[.="Amazon Pay"]')
await page1.waitForTimeout(2000);
await page1.screenshot({path:'amazon.png',fullpage:true});

});
