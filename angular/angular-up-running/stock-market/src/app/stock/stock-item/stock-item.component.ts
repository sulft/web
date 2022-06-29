import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {


  stock!:Stock

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock company','TSC', 85, 80);
  }

  toggleFavorite(event:any) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
