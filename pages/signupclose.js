
class signupclose {

    constructor(page){

        this.page = page;
        this.signup = page.locator(".nav-link").nth(7);
        this.username = page.locator("#sign-username");
        this.password = page.locator("#sign-password");
        this.close = page.locator(".btn.btn-secondary").nth(1);
    }

    async signupClick(){
        await this.signup.click();
    }

    async enterUsername(username){
        await this.username.fill(username);
    }

    async enterPassword(password){
        await this.password.fill(password);
    }

    async clickClose(){
        await this.close.click();
    }
}

export default signupclose