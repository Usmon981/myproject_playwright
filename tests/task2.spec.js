const {chromium,test,expect} = require('@playwright/test')
test('browser launch',async()=>{
    const Browser = await chromium.launch({headless:false});
    const context1 = await Browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.flipkart.com/');
    await page1.waitForTimeout(2000);
    const cart = await page1.getByAltText('Cart');
    // await page1.screenshot({path:'flipcart.png',fullPage:true});
    await cart.click();
    await page1.waitForTimeout(2000);
    await page1.screenshot({path:'flipcart.png',fullPage:true});
    const locator = await page1.getByRole('button',{name:'Login'});
    await locator.click();
    await Login.fill('username123@gmail.com');
    await page1.waitForTimeout(2000);
await password.fill('12345');
await page1.waitForTimeout(2000);
await Login.click();
await page1.screenshot({path:'flipcart.png',fullPage:true});


});