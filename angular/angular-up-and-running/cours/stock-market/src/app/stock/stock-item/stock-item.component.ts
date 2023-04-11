import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent {
  stocks: Stock[];

  ngOnInit() {
    this.stocks= [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765),
    ]

    // En utilisant ngStyle
    // this.stockStyles = {
    //   "color" : this.stock.isPositiveChange() ? "green" : "red",
    //   "font-size" : largeChange ? "1.5em" : "0.8em"
    // }
  }

  toggleFavorite(event: any, index:number): void {
    console.log(event);
    this.stocks[index].favorite = !this.stocks[index].favorite
  }
}
