import { Component, OnInit } from '@angular/core';
import { Article } from 'src/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Article[] = [
    {nom:"pantalon",nombre:12}
  ];

  constructor() { }

  ngOnInit(): void {

  }

  ajoutArticle(monArticle:Article) {
    this.article.push(monArticle);
  }
}
