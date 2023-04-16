import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    this.stock = new Stock("", "", 0, 0, "NASDAQ");
  }

  setStockPrice(price:number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm:NgForm) {
    console.log("Stock form ", stockForm);
    if(stockForm.valid) {
      console.log("creating stock ", this.stock);
    } else {
      console.error("Stock form is in an invalid state.")
    }
  }
}
