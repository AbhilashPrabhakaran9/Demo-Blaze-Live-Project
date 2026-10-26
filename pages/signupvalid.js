

class signupvalid {

constructor(page){
    this.page = page;
    this.signup = page.locator(".nav-link").nth(7);
    this.username = page.locator("#sign-username");
    this.password = page.locator("#sign-password");
    this.signupbutton = page.locator(".btn.btn-primary").nth(1);
    this.close = page.locator(".btn.btn-secondary").nth(1);
}

async clickSignup(){
await this.signup.click();

}

async enterUsername(username){
await this.username.fill(username);
}

async enterPassword(password){
await this.password.fill(password);
}

async clickSignupbutton(){
await this.signupbutton.click();
}

async clickClose(){
        await this.close.click();
    }



}

export default signupvalid