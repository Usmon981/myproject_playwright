const { chromium,test,expect } = require("@playwright/test");
test ('browser launch',async()=>{
    const browser = await chromium.launch({headless:false});
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.makemytrip.com/');
    await page1.waitForTimeout(2000);
    const clsbtn= await page1.locator("//span[@class='commonModal__close']");
    clsbtn.click();
    await page1.waitForTimeout(2000);
    const srbtn= await page1.locator("//div[contains(text(),'Senior')]");
await page1.waitForTimeout(2000);
await srbtn.click();
await page1.screenshot({path:'makemytrip.png',fullPage:true});
});

