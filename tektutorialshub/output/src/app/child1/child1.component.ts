import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
  <h2>Child component 1</h2>
  <p>from child component : {{ count }}</p>
  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
  `,
})
export class Child1Component {
  @Input() count!:number;
  @Output() countChanged: EventEmitter<number> = new EventEmitter;

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
