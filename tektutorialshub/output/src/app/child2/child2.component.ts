import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  <h2>Child component 2</h2>
  <p>counter from child2 : {{ count }}</p>
  `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  count:number = 0;

  incremente() {
    this.count++;
  }

  decremente() {
    this.count--;
  }
}
