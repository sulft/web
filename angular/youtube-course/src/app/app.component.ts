import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Get input box value";
  unTexte:string;
  myEvent(text) {
    this.unTexte = text;
  }

}
