export class Stock {
  favorite: boolean = false;
  name: string;
  code: string;
  price: number;
  previousPrice: number;
  exchange: string;

  constructor(
    name: string,
    code: string,
    price: number,
    previousPrice: number,
    exchange: string,
  ) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.previousPrice = previousPrice;
    this.exchange = exchange;
  }

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
