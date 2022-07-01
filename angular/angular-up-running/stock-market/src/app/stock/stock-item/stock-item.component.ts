import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {


  stock!:Stock
  public stockClasses:any;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock company','TSC', 90, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    console.log(diff);
    let largeChange = Math.abs(diff) > 0.05;
    this.stockClasses = {
      "negative":!this.stock.isPositiveChange(),
      "positive":this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    }
  }

  toggleFavorite(event:any) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
