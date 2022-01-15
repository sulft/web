import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displaying:boolean = true;
  myArray:Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay() {
    this.displaying = !this.displaying;
    this.myArray.push(new Date());
  }

}
