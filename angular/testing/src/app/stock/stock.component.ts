import { Component, OnInit, Input } from '@angular/core';

import { Item } from 'src/app/shared/model/item.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  items:Item[] = [
    new Item("Pantalon",3),
    new Item("T-shirt",1),
    new Item("Pull",6),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
