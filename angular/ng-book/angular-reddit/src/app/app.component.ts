import { Component } from '@angular/core';
import { Article } from 'src/assets/models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ]
  }

  AjoutArticle(titre:HTMLInputElement,lien:HTMLInputElement) {
    console.log(`Ajout article avec le titre ${titre.value} et le lien ${lien.value}!`)
    this.articles.push(new Article(titre.value,lien.value,0));
    titre.value="";
    lien.value="";
  }
}
