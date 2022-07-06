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
}
