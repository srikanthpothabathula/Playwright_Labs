import {test,expect,Locator} from "@playwright/test"

//text boxes
test('Verify the textox Actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
   // await page.waitForTimeout(5000);

    const textbox :Locator = page.locator('#name');

    //assertion
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    const maxlength: string | null = await textbox.getAttribute("maxlength"); //return the value
    expect(maxlength).toBe("15");

    await textbox.fill("joxy Raj")
    const enteredvalue:String = await textbox.inputValue();
    console.log("Entered value - ",enteredvalue); //retunr the entered value reading
    expect(enteredvalue).toBe("joxy Raj")


})

//radio buttons
test('verify the Radio buttons Action',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const maleradio:Locator = page.locator('#male');
    //assertion for visible
    await expect(maleradio).toBeVisible();
    //asserion for enable or not
    await expect(maleradio).toBeEnabled();
    expect(await maleradio.isChecked()).toBe(false);



    await maleradio.check();
    expect(await maleradio.isChecked()).toBe(true);
    await expect(maleradio).toBeChecked();

    await page.waitForTimeout(5000);
})

//checkboxes
test.only('Verify the checkboxes Action', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //select specific checkbox and slect
   const sundaycheckbox:Locator =  page.getByLabel('Sunday');
   await sundaycheckbox.check();
   //assertion checkbox is checked or not
   await expect(sundaycheckbox).toBeChecked();
   await sundaycheckbox.uncheck();

   //select all checkboxes and assert each is checked
   const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   const checkboxes:Locator[] = days.map(index => page.getByLabel(index));
   expect(checkboxes.length).toBe(7);

   //select all checkboxes
   for(const checkbox of checkboxes)
   {
    await checkbox.check();
   }




   await page.waitForTimeout(5000);

})
