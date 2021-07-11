import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  numberOfClick:number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  addPlus():void {
    this.numberOfClick++;
  }

  reset():void {
    this.numberOfClick = 0;
  }
}
