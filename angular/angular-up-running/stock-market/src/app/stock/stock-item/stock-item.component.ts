import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  name!:string;
  code!:string;
  price!:number;
  previousPrice!:number;
  positiveChange!:boolean;
  favorite!:boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = "Test Stock Company";
    this.code = "TSC";
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite(event:any) {
    console.log('We are toggling the favorite state for this stock', event);
    this.favorite = !this.favorite;
  }
}
