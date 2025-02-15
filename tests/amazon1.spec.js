const {chromium,test,expect}= require ('@playwright/test');
test ('browser launch',async()=>{
    const browser = await chromium.launch({headedless:false});
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.amazon.in/');
    await page1.waitForTimeout(2000);
    await page1.locator('//div[contains(text(),"Let")]/following::a[contains(text(),"Amazon")]');
await page1.waitForTimeout(2000);
await page1.screenshot({path:'amazon.png',fullpage:true});

});
