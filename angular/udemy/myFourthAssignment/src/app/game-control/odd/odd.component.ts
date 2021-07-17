import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

  @Input() aNumber:number;
  oddNumber:number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    if(this.aNumber % 2 != 0) {
      this.oddNumber = this.aNumber;
    }
  }

}
