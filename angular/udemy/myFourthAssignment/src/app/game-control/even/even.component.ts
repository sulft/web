import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {

  @Input() aNumber:number;
  evenNumber:number;

  tableOfEvenNumber:number[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    if(this.aNumber % 2 == 0) {
      this.evenNumber = this.aNumber;
    }
  }


}
