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

  onAddArticle(articleData:{articleName: string, articleNumber:number}) {
    console.log(articleData)
    if(articleData.articleName && articleData.articleNumber != 0) {
      this.items.push(
        new Item(articleData.articleName, articleData.articleNumber)
      );
    }
  }

}
