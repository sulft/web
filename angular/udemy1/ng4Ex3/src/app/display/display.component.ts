import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displaying:boolean = true;
  myArray:number[] = [];
  i:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay() {
    this.i = ++(this.i);
    this.displaying = !this.displaying;
    this.myArray.push(this.i);
  }

}
