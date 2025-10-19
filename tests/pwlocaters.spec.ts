import {test,expect,Locator} from "@playwright/test"

//image alt locator
test("Verify the locator alt",async({page})=>{
await page.goto("http://127.0.0.1:5500/tests/app.html") ;

//alttext
const logo:Locator = page.getByAltText("logo image");
await expect(logo).toBeVisible();

// 2. page.getByText() to locate by text content (non interactive element)

await expect(page.getByText("List item 1")).toBeVisible();
await expect(page.getByText("List item 2 with ")).toBeVisible();
await expect(page.getByText("Special: Unique text identifier")).toBeVisible();

// 3. page.getByRole() to locate by explicit and implicit accessibility attributes.

await expect(page.getByText("Locate elements by their explicit or implicit ARIA roles. ")).toBeVisible();
await expect(page.getByRole("button", {name: 'Primary Action'})).toBeVisible();
await expect(page.getByRole("button", {name: 'Toggle Button'})).toBeVisible();
await expect(page.getByRole("button", {name: 'Div with button role'})).toBeVisible();
await expect(page.getByRole("textbox", {name : 'username'})).toBeVisible();
await expect(page.getByRole("checkbox", {name :' Accept terms'})).toBeEditable();


//await page.getByRole("link", {name: 'Home'}).click(); // This is matching with multiple elements. so cannot perfoem click. You need to take the first matched element.
await page.getByRole("link", {name: 'Home'}).first().click();
await page.getByRole("link", {name:'Products'}).first().click();
await page.getByRole("link", {name:'Contact'}).first().click();


//4. page.getByLabel() to locate a form control by associated label's text.

await page.getByLabel('Email Address:').fill("abc@gmail.com");
await page.getByLabel('password').fill("testing");
await page.getByLabel('Your Age:').fill("20"); 
await page.getByLabel(' Standard').check(); 
await page.getByLabel(' Express').check(); 

//5. page.getByPlaceholder() to locate an input by placeholder.

await page.getByPlaceholder("Enter your full name").fill("John Smith");
await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("123-456-7890");
await page.getByPlaceholder("Type your message here...").fill("this is playwrigth automation");
await page.getByPlaceholder("Search products...").fill("PW Book");
await page.getByRole("button", {name:'Search'}).click();

// 6. page.getByTitle() to locate an element by its title attribute.

await expect(page.getByTitle("Home page link")).toHaveText("Home");
await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");
await expect(page.getByTitle("Tooltip text")).toHaveText("This text has a tooltip");

// 7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)
 
await expect(page.getByTestId("profile-name")).toHaveText("John Doe");
await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
await page.getByTestId("edit-profile-btn").click();
await page.getByTestId("nav-home").click();
await page.getByTestId("nav-products").click();
await page.getByTestId("nav-contact").click();
})