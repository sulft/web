import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  count:number = 0;

  incremente() {
    this.count++;
  }

  decremente() {
    this.count--;
  }
}
