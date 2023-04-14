import { Component, ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stock-market';

  stocks : Stock[];

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80,'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NASDAQ'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NASDAQ'),
    ]
  }

  onToggleFavorite(stock: Stock): void {
    let i = this.stocks.findIndex((a) => {
      return a.code === stock.code
    });
    this.stocks[i].favorite = !this.stocks[i].favorite;
  }

  testMethod(){
    console.log("test method triggered");
  }

  trackStockByCode(index:number, stock:Stock):string {
    return stock.code;
  }
}
