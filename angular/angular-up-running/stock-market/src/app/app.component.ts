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

  ngOnInit() {
    this.stockObj =  new Stock(
      "Test Stock Company",
      "TSC",
      85,
      80
    )
  }
  
}
