import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  time:number;
  ref:any;
  tableOfEvenNumber:number[];
  tableOfOddNumber:number[];

  constructor() { }

  ngOnInit(): void {
    this.time = 0;

  }

  startGame() {
    this.ref = setInterval(() => {
      this.time =  this.time + 1;
    }, 1000);
  }

  endGame() {
    clearInterval(this.ref);
    this.time = 0;
  }

  evenNumber():number {
    return 
  }
}
