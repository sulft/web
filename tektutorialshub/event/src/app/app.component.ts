import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event';
  clickCount = 0;
  clickCount1= 0;
  value = "";
  val = "";
  clickMe() {
    this.clickCount++;
  }

  handleInput(event:any) {
    this.value = (event.target as HTMLInputElement).value
  }

  handleInput1(element:any) {
    this.val=element.value;
  }
}
