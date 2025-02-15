const {chromium,test,expect}  = require('@playwright/test');
test('Browser Launch', async() =>{
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https:www.amazon.in/');
    await page1.waitForTimeout(2000);
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
    await search.fill('harry potter');
    await page1.waitForTimeout(2000);
    await page1.getByLabel('harry potter and the order of phoenix').focus();
    await page1.waitForTimeout(2000);
   await page1.locator("div.left-pane-results-container").check('harry potter');
    
    






})