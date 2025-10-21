import{test,expect,Locator} from "@playwright/test"

test("Verify the Xpath locators", async ({page})=>{

    //Relative xpath 
    await page.goto("https://demowebshop.tricentis.com/");
    const logovar:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logovar).toBeVisible();

    //contains
    const products:Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productcount:number=await products.count();
    console.log("No of products count :- ",productcount); //4 count displays
    expect(productcount).toBeGreaterThan(0);

    console.log("First computer related producr name:", await products.first().textContent()); //textcontent() - single value displays
    console.log("Last computer related product name:",await products.last().textContent());
    console.log("Nth element computer related product name: ",await products.nth(2).textContent());

    let Producttitles:string[] = await products.allTextContents(); //it displays all the elements in array format
    console.log("all product tile names in array format-",Producttitles);

    //print in list by using loop FOR
    for(let pt of Producttitles)
    {
        console.log(pt);
    }

    //starts-with()
    const buildproducttitles:Locator = page.locator("//h2/a[starts-with(@href,'/build')]"); //return multiple elements
    const count: number = await buildproducttitles.count();
    //assertion
    expect(count).toBeGreaterThan(0);

    //text()
    const reglink :Locator = page.locator("//a[text()='Register']");
    await expect(reglink).toBeVisible();

    




})