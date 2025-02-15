

const { chromium,test,expect }= require('@playwright/test');
test ('browser launch',async ()=>{
    const browser = await chromium.launch({headless:false});
    const Context1 = await browser.newContext();
    const page1 = await Context1.newPage();
    await page1.goto ('https://www.amazon.in/')
    await page1.waitForTimeout(2000);
    const bookbtn= await page1.locator("//a[contains(text(),'Kindle')]");
    bookbtn.click();
    await page1.waitForTimeout(2000);
    const search = await page1.getByPlaceholder('Search Amazon.in');
    await expect(search).toBeVisible();
    await search.fill('harrypotter books');
    await page1.waitForTimeout(2000);
    const searchbtn = await page1.locator('input#nav-search-submit-button');
    await searchbtn.click();
    // await page1.waitForSelector("//div[@role='listitem']/descendant::div[@data-cy='title-recipe']/a/h2/span");
    const harrypotter = await page1.locator("//div[@role='listitem']/descendant::div[@data-cy='title-recipe']/a/h2/span").allTextContents();
    console.log("result:", harrypotter);
    await expect(harrypotter).toBeTruthy();

}

//h2[text()='Results']/ancestor::div[4]/following-sibling::div[@role='listitem']


);