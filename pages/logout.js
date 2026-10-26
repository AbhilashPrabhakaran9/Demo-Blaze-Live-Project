
class logout {

    constructor(page){
        this.page = page;
        this.logout = page.locator(".nav-link").nth(5);
    }

    async logoutbutton(){
        await this.logout.click();
    }


}

export default logout