import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  stock:Stock;
  confirmed:boolean;

  ngOnInit() {
    this.stock = new Stock("test", '', 0, 0, "NASDAQ");
  }

  setStockPrice(price:number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock() {
    console.log(this.stock);
  }
}
