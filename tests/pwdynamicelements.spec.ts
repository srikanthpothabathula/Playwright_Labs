import{test,expect,Locator} from "@playwright/test"

//Using playwright specific locators

test('handling Dynamic elements using PW locators',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    for(let i=1;i<=5;i++)
    {
        const buton = page.getByRole('button',{name: /START|STOP/});

       await buton.click();

       await page.waitForTimeout(2000);
    }
});

//Using with CSS locators

test('handling Dynamic elements using CSS locators',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    for(let i=1;i<=5;i++)
    {
        const buton = page.locator('button[name="start"], button[name="stop"]');


       await buton.click();

       await page.waitForTimeout(2000);
    }
});

//Using with Xpath locators

test('handling Dynamic elements using Xpath locators',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    for(let i=1;i<=5;i++)
    {
        const buton = page.locator('//button[text()="STOP" or text()="START"]');


       await buton.click();

       await page.waitForTimeout(2000);
    }
});