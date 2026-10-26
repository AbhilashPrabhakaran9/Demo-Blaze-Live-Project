import {test,expect} from '@playwright/test';
import normaltestdata from '../utils/normaltestdata.json' with {type: "json"};
import loginpage from '../pages/loginpage.js';
import logout from '../pages/logout.js';


test("Demo Blaze logout", async({page})=>{

await page.goto("https://www.demoblaze.com/");

await page.waitForTimeout(2000);

const lp = new loginpage(page);

let enterusername = normaltestdata.username;
let enterpassword =  normaltestdata.password;

await lp.logintap();
await lp.usernamevalue(enterusername);
await lp.passwordvalue(enterpassword);
await lp.loginbuttonclick();

const lo = new logout(page);
await lo.logoutbutton();

await expect(page).toHaveURL("https://www.demoblaze.com/index.html");



});