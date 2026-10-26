import {test,expect} from '@playwright/test';
import loginpage from '../pages/loginpage.js';
import normaltestdata from '../utils/normaltestdata.json' with {type : "json"};
import paratestdata from '../utils/paratestdata.json' with {type : "json"};


//Applying Data Driven Testing
test("Valid Login", async({page}) => {

    await page.goto("https://www.demoblaze.com/");

    
    const lp1 = new loginpage(page);

    let enterusername = normaltestdata.username;
    let enterpassword = normaltestdata.password;
    
    await lp1.logintap();
    await page.waitForTimeout(2000);
    await lp1.usernamevalue(enterusername);
    await lp1.passwordvalue(enterpassword);
    await lp1.loginbuttonclick();
    await page.waitForTimeout(2000);

    //await expect(page.locator("#nameofuser")).toHaveText("Welcome abhilashprabhakaran");

    await expect(page.locator("#nameofuser")).toHaveText(`Welcome ${enterusername}` , {timeout : 10000});



});

//Applying Parmeterised Data Driven Testing

for(const data of paratestdata) {
test(`Invalid Login ${data.username} , ${data.password}`,async ({page}) => {

    await page.goto("https://www.demoblaze.com/");
    await page.waitForTimeout(2000);

    
    
    const lp2 = new loginpage(page);

    let enterusername = data.username;
    let enterpassword = data.password;

    await lp2.logintap();
    //await page.waitForTimeout(2000);
    await lp2.usernamevalue(enterusername);
    await lp2.passwordvalue(enterpassword);
    await lp2.loginbuttonclick();
    //await page.waitForTimeout(2000);

    page.on('dialog' , dialog=>{ dialog.accept()});

    await lp2.closebuttonclick();

    await expect(page).toHaveURL("https://www.demoblaze.com/");



    


});
}
