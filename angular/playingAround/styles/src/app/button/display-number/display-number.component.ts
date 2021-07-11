import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.css']
})
export class DisplayNumberComponent implements OnInit {

  @Input() numberOfClick: number;

  constructor() { }

  ngOnInit(): void {
  }

  checkClick() {
    if(this.numberOfClick % 3 == 0) { return "blue"; }
    else if(this.numberOfClick % 3 == 2) { return 'red'; }
    else { return 'green '}
  }
}
