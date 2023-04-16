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
  exchanges: String[]=["NYSE","NASDAQ","OTHER"];

  ngOnInit() {
    this.stock = new Stock("", "", 0, 0, "NASDAQ");
  }

  createStock(stockForm:NgForm) {
    console.log("Stock form ", stockForm);
    if(stockForm.valid) {
      console.log(stockForm.value.stock);
      this.stock = stockForm.value.stock;
      console.log("creating stock ", this.stock);
    } else {
      console.error("Stock form is in an invalid state.")
    }
  }
}
