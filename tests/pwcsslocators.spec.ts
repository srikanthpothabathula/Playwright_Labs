import{test,expect,Locator} from "@playwright/test"

/*
locators
1. tag#id 
2.tag.class
3.tag[attribute=value]
4.tag.class[attribute=value]
*/

test("Verify CSS Locators",async ({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
//tag#id
const searchbox:Locator=page.locator("input#small-searchterms");
await searchbox.fill("T-Shirt");

//tag.class
await page.locator("input.search-box-text").fill("T-shirts");

//tag[attribute=value]
await page.locator("input[value='Search store']").fill("T-Shirts");

//tag.class[attribute=value]
await page.locator("input.search-box-text[value='Search store']").fill("T-Shirts");
})