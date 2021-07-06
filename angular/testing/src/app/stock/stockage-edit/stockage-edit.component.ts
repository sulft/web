import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockage-edit',
  templateUrl: './stockage-edit.component.html',
  styleUrls: ['./stockage-edit.component.css']
})
export class StockageEditComponent implements OnInit {

  input1:boolean = false;
  input2:boolean = false;
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked = !this.clicked;
  }

}
