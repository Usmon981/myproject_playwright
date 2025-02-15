const { chromium,test,expect } = require("@playwright/test")

test ('browser launch',async()=>{
    const browser = await chromium.launch({headless:false});
    const Context1 = await browser.newContext();
    const page1 = await Context1.newPage();
    await page1.goto('https://www.amazon.in/');
    await page1.waitForTimeout(2000);
//    const pagetitle = await page1.title();
//    const pageurl = await page1.url();
//    const hasAmazonInTitle = await pagetitle.includes("amazon");
//    const hasAmazonInURL = await pageurl.includes("amazon");
//    console.log('Title contains "amazon":${hasAmazonInTitle}');
//    console.log('URL contains "amazon":${hasAmazonInURL}');
    await expect(await page1.url().toLowerCase()).toContain('amazon');
    await expect((await page1.title()).toLowerCase()).toContain('amazon');
 const bookbtn = await page1.locator('#searchDropdownBox');
await bookbtn.click();
await page1.waitForTimeout(2000);
await bookbtn.selectOption("Books");
await page1.waitForTimeout(2000);
await bookbtn.click();
await page1.waitForTimeout(2000);
const search = await page1.getByPlaceholder('Search Amazon.in');
await expect(search).toBeVisible();
await search.fill('harrypotter');
await page1.waitForTimeout(2000);
const clk =await page1.locator("div#sac-suggestion-row-9");
await clk.click();
await page1.waitForTimeout(2000);
await page1.screenshot({path:'miniproject2.png',fullPage:true});
await page1.waitForTimeout(2000);
await page1.waitForSelector("//h2[text()='Results']/ancestor::div[4]/following-sibling::div[@role='listitem']");
const harrypotter = await page1.locator("//h2[text()='Results']/ancestor::div[4]/following-sibling::div[@role='listitem']").allTextContents();
console.log("result:", harrypotter);
await expect(harrypotter).toBeTruthy();
await page1.screenshot({path:'miniproject2.png',fullPage:true});






});