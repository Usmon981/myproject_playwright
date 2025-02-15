const { chromium,test,expect } = require("@playwright/test")

test ('Browser launch',async()=>{ 
 const Browser = await chromium.launch({headless:false});
 const context1 = await Browser.newContext();
 const page1 = await context1.newPage();
 await page1.goto('https://www.amazon.in/');
 await page1.waitForTimeout(2000);
 await expect(page1).toHaveURL('https://www.amazon.in/'); 
 const search = await page1.getByPlaceholder('Search Amazon.in');//Search Amazon.in
 await expect(search).toBeVisible();
 await search.fill('mobiles');
 await page1.waitForTimeout(2000);
await page1.screenshot({path:'amazon.png',fullpage:true});

}
    
);