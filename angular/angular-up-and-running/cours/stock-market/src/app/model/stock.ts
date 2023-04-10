export class Stock {
  favorite: boolean = false;
  name: string;
  code: string;
  price: number;
  previousPrice: number;

  constructor(
    name: string,
    code: string,
    price: number,
    previousPrice: number
  ) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.previousPrice = previousPrice;
  }

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
