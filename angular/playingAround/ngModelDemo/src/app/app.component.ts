import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngModelDemo';
  texte:string;

  constructor() {
    this.texte = "le texte"
  }
}
