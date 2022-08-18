import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name:string = "Terry"; // typage ":string" pour rendre le code plus robuste

  constructor() { // Le constucteur charge avant l'affichage dans l'application, c'est pour cette raison que thed sera affiché
    console.log(123);
    this.name = "thed";
  }
}
