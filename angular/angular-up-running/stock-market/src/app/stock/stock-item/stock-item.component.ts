import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {


  // stock!:Stock
  stocks!:Stock[]
   /* public stockClasses:any;*/
   public stockStyles:any;

  constructor() { }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock company','TSC', 90, 80),
      new Stock('Second Stock company','SSC', 10, 20),
      new Stock('Third Stock company','LSC', 876, 765)
    ]
    // new Stock('Test Stock company','TSC', 90, 80);
    // let diff = (this.stock.price / this.stock.previousPrice) - 1;
    // console.log(diff);
    // let largeChange = Math.abs(diff) > 0.05;
    /*this.stockClasses = {
      "negative":!this.stock.isPositiveChange(),
      "positive":this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    }*/
    // this.stockStyles = {
    //   "font-size": largeChange ? '1.2em' : '0.8em',
    //   "color": this.stock.isPositiveChange() ? 'green' : 'red'
    // }
  }

  toggleFavorite(event:any, index:number) {
    console.log('We are toggling the favorite state for this stock', index,event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }
}
