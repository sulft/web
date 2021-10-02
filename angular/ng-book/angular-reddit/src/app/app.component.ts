import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AjoutArticle(titre:HTMLInputElement,lien:HTMLInputElement) {
    console.log(`Ajout article avec le titre ${titre.value} et le lien ${lien.value}!`)
  }
}
