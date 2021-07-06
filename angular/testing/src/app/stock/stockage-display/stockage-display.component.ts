import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/model/item.model';


@Component({
  selector: 'app-stockage-display',
  templateUrl: './stockage-display.component.html',
  styleUrls: ['./stockage-display.component.css']
})
export class StockageDisplayComponent implements OnInit {

  item:Item[] = [
    new Item("Pantalon",3),
    new Item("T-shirt",1),
    new Item("Pull",6),
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
