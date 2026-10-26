
class productmonitors {

    constructor(page){

        this.page = page;
        this.monitorsclick = page.locator(".list-group-item").nth(3);
        this.monitorselect = page.locator(".hrefch").nth(1);
        this.cartbutton = page.locator(".btn.btn-success.btn-lg");
        this.cartclick = page.locator(".nav-link").nth(3);
        this.order = page.locator(".btn.btn-success");
        this.namefield = page.locator("#name");
        this.countryfield = page.locator("#country");
       this.cityfield = page.locator("#city");
       this.cardfield =  page.locator("#card");
       this.monthfield = page.locator("#month");
        this.yearfield = page.locator("#year");
        this.purchasebutton = page.locator(".btn.btn-primary").nth(2);
        this.okbutton = page.locator(".confirm.btn.btn-lg.btn-primary");

}

async monitorstap(){
    await this.monitorsclick.click();
}

async monitor(){
    await this.monitorselect.click();
}

async addtocartbutton(){
    await this.cartbutton.click();
}

async carticonclick(){
    await this.cartclick.click();
}

async orderbutton() {
    await this.order.click();
}

async enterdetails(namefield, countryfield, cityfield, cardfield, monthfield, yearfield){

    await this.namefield.fill("Ajax");
    await this.countryfield.fill("Greece");
    await this.cityfield.fill("Spot");
    await this.cardfield.fill("e563");
    await this.monthfield.fill("apr");
    await this.yearfield.fill("1983");
}

async purchaseclick(){
    await this.purchasebutton.click();
}

async clickok() {
    await this.okbutton.click();
}


}

export default productmonitors