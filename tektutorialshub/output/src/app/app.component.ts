import { Component, ViewChild } from '@angular/core';
import { Child3Component } from './child3/child3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output Example';

  counter:number = 0;
  @ViewChild(Child3Component) child3?: Child3Component;

  onCounter(val:number) {
    this.counter = val;
  }

  increment() {
    this.child3?.incremente();
  }
 
  decrement() {
    this.child3?.decremente();
  }
}
