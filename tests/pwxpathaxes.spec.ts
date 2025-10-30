import{test,expect,Locator} from "@playwright/test"

test('Using Xpath Axes Locators',async ({page})=>{

    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    //Self axes locator 
    const germanycell:Locator = page.locator("//td[text()='Germany']/self::td");
    await expect(germanycell).toHaveText('Germany');
})