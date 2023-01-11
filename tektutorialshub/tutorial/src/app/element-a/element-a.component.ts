import { Component } from '@angular/core';

@Component({
  selector: 'app-element-a',
  templateUrl: './element-a.component.html',
  styleUrls: ['./element-a.component.css']
})
export class ElementAComponent {
  prenom:string = "Terry";
  nom:string = "Vilver";
  texte:string = "un test";
  isDisabled:boolean = true;

  affiche() {
    alert('vous avez cliqué');
  }
}
