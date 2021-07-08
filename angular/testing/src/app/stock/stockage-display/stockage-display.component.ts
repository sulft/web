import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/model/item.model';


@Component({
  selector: 'app-stockage-display',
  templateUrl: './stockage-display.component.html',
  styleUrls: ['./stockage-display.component.css']
})
export class StockageDisplayComponent implements OnInit {

  @Input('element') item:Item;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }


}
