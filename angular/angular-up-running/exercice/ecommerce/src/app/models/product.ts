export class Product {
    constructor(
        public name:string,
        public price:number,
        public previousprice:number,
        public quantity:number
    ) {}

    onSale(): boolean {
        return this.price < this.previousprice;
    }

    moreProduct():void {
        this.quantity = this.quantity+1
    }

    lessProduct():void {
        this.quantity = this.quantity-1
    }

    assignNumberQuantity(quantity:any):void {
        console.log(quantity)
        // this.quantity = quantity;
    }
}
