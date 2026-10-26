import {test,expect} from '@playwright/test';
import signupvalid from '../pages/signupvalid.js';
import signupclose from '../pages/signupclose.js';

test("valid signup",async({page})=>{
    
await page.goto("https://www.demoblaze.com/");

//Implemented Page Object Model
const su = new signupvalid(page);
await su.clickSignup();
await page.waitForTimeout(2000);
await su.enterUsername("user5");
await su.enterPassword("fifthuser");
await su.clickSignupbutton();
await page.waitForTimeout(2000);


/*await page.locator(".nav-link").nth(7).click();
await page.waitForTimeout(2000);

await page.locator("#sign-username").fill("user2");
await page.locator("#sign-password").fill("seconduser");
await page.locator(".btn.btn-primary").nth(1).click();
await page.waitForTimeout(2000);*/

page.on('dialog',dialog=>{
    dialog.accept();
});

await su.clickClose();

await expect(page).toHaveURL("https://www.demoblaze.com/");



});

test("signupclose",async({page})=>{

await page.goto("https://www.demoblaze.com/");

//Implemented Page Object Model
const suc = new signupclose(page);
await suc.signupClick();
await page.waitForTimeout(2000);
await suc.enterUsername("user4");
await suc.enterPassword("fourthuser");
await suc.clickClose();
await page.waitForTimeout(2000);


/*await page.locator(".nav-link").nth(7).click();
await page.waitForTimeout(2000);

await page.locator("#sign-username").fill("user4");
await page.locator("#sign-password").fill("fourthuser");
await page.locator(".btn.btn-secondary").nth(1).click();
await page.waitForTimeout(2000);*/

await expect(page).toHaveURL("https://www.demoblaze.com/");



});


