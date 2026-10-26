
class loginpage {

    constructor(page){
        this.page = page;
        this.loginclick = page.locator("#login2");
        this.usernamefield = page.locator("#loginusername");
        this.passwordfield = page.locator("#loginpassword");
        this.loginbutton = page.locator(".btn.btn-primary").nth(2);
        this.closebutton = page.locator(".btn.btn-secondary").nth(2);
    }

    async logintap(){
        await this.loginclick.click();
    }

    async usernamevalue(username){
        await this.usernamefield.fill(username);
    }

    async passwordvalue(password){
        await this.passwordfield.fill(password);
    }

    async loginbuttonclick()
    {

    await this.loginbutton.click();
    
    }

    async closebuttonclick(){
        await this.closebutton.click();
    }

}

export default loginpage