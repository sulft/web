import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'stock-market';

  stockObj!:Stock;
  counter:number = 1;

  ngOnInit() {
    this.stockObj =  new Stock(
      "Test Stock Company - " + this.counter++,
      "TSC",
      85,
      80
    )
  }

  onToggleFavorite(stock:Stock) {
    console.log('Favorite for stock', stock, 'was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }

  changeStockObject() {
    //this will update the value in the stock item component 
    //Because we are creating a new reference for the stock input
    this.stockObj = new Stock("Test Stock Company - " + this.counter++,
      "TSC",
      85,
      80
    );
  }

  changeStockPrice() {
    //this will update the value in the stock item component 
    //Because we are creating a new reference for the stock input
    this.stockObj.price += 10;
  }

  testMethod() {
    console.log("Test method in AppComponent triggered")
  }
  
}
