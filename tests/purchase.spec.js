import {test,expect} from '@playwright/test';
import normaltestdata from'../utils/normaltestdata.json' with {type : "json"};
import loginpage from '../pages/loginpage.js';
import productcart from '../pages/productcart.js';
import productphones from '../pages/productphones.js';
import productmonitors from '../pages/productmonitors.js';

test.beforeEach(async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.waitForTimeout(2000);
    let enterusername = normaltestdata.username;
    let enterpassword = normaltestdata.password;

    const lp =new loginpage(page);
    await lp.logintap();
    await lp.usernamevalue(enterusername);
    await lp.passwordvalue(enterpassword);
    await lp.loginbuttonclick();
})

//TEST CASE- 7 

test("Product selection", async({page})=>{

    //await page.goto("https://www.demoblaze.com/"); //Commented because i placed this code step inside 
    //beforeEach

    //Commented because i placed this code step inside beforeEach
    /*await page.waitForTimeout(2000);
    let enterusername = normaltestdata.username;
    let enterpassword = normaltestdata.password;

    const lp =new loginpage(page);
    await lp.logintap();
    await lp.usernamevalue(enterusername);
    await lp.passwordvalue(enterpassword);
    await lp.loginbuttonclick();*/

    const pc = new productcart(page);
    await pc.productclick();
    await pc.cartclick();
    page.on("dialog", dialog =>{
        dialog.accept();
    });

    await expect(page.locator(".name")).toHaveText("Samsung galaxy s7");

});

//TEST CASE - 8

test("Product under Phones", async({page})=>{

    /*await page.goto("https://www.demoblaze.com/");
    
    await page.waitForTimeout(2000);
    let enterusername = normaltestdata.username;
    let enterpassword = normaltestdata.password;

    const lp =new loginpage(page);
    await lp.logintap();
    await lp.usernamevalue(enterusername);
    await lp.passwordvalue(enterpassword);
    await lp.loginbuttonclick();*/

    const pp = new productphones(page);
    await pp.phonestap();
    await pp.phone();
    await pp.addtocartbutton();
    page.on("dialog",dialog =>{dialog.accept()});
    await pp.carticonclick();
    await pp.orderbutton();
    await pp.enterdetails();
    await pp.purchaseclick();
    await pp.clickok();

    await expect(page).toHaveURL("https://www.demoblaze.com/cart.html");



});

//TEST CASE- 9

test("Product under Monitors", async({page})=>{

    /*await page.goto("https://www.demoblaze.com/");
    
    await page.waitForTimeout(2000);
    let enterusername = normaltestdata.username;
    let enterpassword = normaltestdata.password;

    const lp =new loginpage(page);
    await lp.logintap();
    await lp.usernamevalue(enterusername);
    await lp.passwordvalue(enterpassword);
    await lp.loginbuttonclick();*/

    const pm = new productmonitors(page);
    await pm.monitorstap();
    //await page.pause();
    await pm.monitor();
    //await page.waitForTimeout(2000);
    await pm.addtocartbutton();
    page.on("dialog",dialog =>{dialog.accept()});
    await pm.carticonclick();
    await pm.orderbutton();
    await pm.enterdetails();
    await pm.purchaseclick();
    await pm.clickok();

    await expect(page).toHaveURL("https://www.demoblaze.com/cart.html");


});




