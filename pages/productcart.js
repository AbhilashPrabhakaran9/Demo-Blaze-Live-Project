
class productcart {

    constructor(page){
        this.page = page;
        this.product = page.locator(".hrefch").nth(3);
        this.addtocart = page.locator(".btn.btn-success.btn-lg");

    }

    async productclick(){
        await this.product.click();
    }

    async cartclick() {
        await this.addtocart.click();
    }



}

export default productcart