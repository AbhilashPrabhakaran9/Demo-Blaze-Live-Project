
class productphones {

    constructor(page){

        this.page = page;
        this.phonesclick = page.locator(".list-group-item").nth(1);
        this.phoneselect = page.locator(".hrefch").nth(5);
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

async phonestap(){
    await this.phonesclick.click();
}

async phone(){
    await this.phoneselect.click();
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

    await this.namefield.fill("ABHI");
    await this.countryfield.fill("IRIS");
    await this.cityfield.fill("CORNER");
    await this.cardfield.fill("s895");
    await this.monthfield.fill("der");
    await this.yearfield.fill("1956");
}

async purchaseclick(){
    await this.purchasebutton.click();
}

async clickok() {
    await this.okbutton.click();
}






}

export default productphones