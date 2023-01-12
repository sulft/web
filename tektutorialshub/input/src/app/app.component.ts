import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input';

  counter:number = 0;

  incrementer() {
    this.counter++;
  }

  decrementer() {
    this.counter--;
  }
}
