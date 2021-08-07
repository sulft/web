import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  time:number;
  ref:any;
  tableOfEvenNumber:number[] = [];
  tableOfOddNumber:number[] = [];
  disabled = false;

  constructor() { }

  ngOnInit(): void {

  }

  startGame() {
    this.time = 0;
    this.tableOfEvenNumber = [];
    this.tableOfOddNumber = [];
    this.disabled = true;
    this.ref = setInterval(() => {
      this.time =  this.time + 1;
      if(this.time % 2 == 0) {
        this.evenNumber();
      } else {
        this.oddNumber()
      }
    }, 1000);
  }

  endGame() {
    this.disabled = false;
    clearInterval(this.ref);
    this.time = 0;
  }

  evenNumber() {
    this.tableOfEvenNumber.push(this.time);
  }

  oddNumber() {
    this.tableOfOddNumber.push(this.time);
  }
}
