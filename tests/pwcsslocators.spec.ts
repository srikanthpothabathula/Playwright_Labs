import{test,expect,Locator} from "@playwright/test"

test("Verify CSS Locators",async ({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const searchbox:Locator=page.locator("input#small-searchterms");
await searchbox.fill("T-Shirt");


})