const{chromium,test} = require('@playwright/test');

test('Browser Launch',async() =>{

const browser = await chromium.launch({headless : false});

const context1 = await browser.newContext();

const page1 = await context1.newPage();

await page1.goto('https://www.amazon.in/');

console.log(await page1.ur)

await page1.waitForTimeout(2000);

const page2 = await context1.newPage();

await page2.goto('https://www.youtube.com/');

await page2.waitForTimeout(2000);

const context2 = await browser.newContext();

const page3 = await context2.newPage();

await page3.goto('https://www.facebook.com/');

await page3.waitForTimeout(2000);

await page2.close();

await page1.waitForTimeout(2000);

await context2.close();

await page1.waitForTimeout(2000);
});