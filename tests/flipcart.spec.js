const{chromium,test,expect} =require ('@playwright/test');
test ('browser launch',async()=>{
const browser = await chromium.launch({headless:false});
const context1 = await browser.newContext();
const page1 = await context1.newPage();
await page1.goto('https://www.flipkart.com/');
await page1.waitForTimeout(2000);
await page1.locator("//div[contains(text(),'Electronics')]/ancestor::div[3]/following-sibling::div/descendant::div[3]/child::div[3]");
await page1.waitForTimeout(2000);
await page1.screenshot({path:'flipcart.png',fullPage:true});


});