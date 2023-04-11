export class Product {
  onSale: boolean;
  quantity: number = 0;
  name: string;
  price: number;
  image: string;

  constructor(name: string, price: number, image: string, onSale: boolean) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.onSale = onSale;
  }
}
