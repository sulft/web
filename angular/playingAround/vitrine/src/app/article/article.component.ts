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

  articlePreview:Article;

  constructor() { }

  ngOnInit(): void {

  }

  ajoutArticle(monArticle:Article) {
    this.article.push(monArticle);
  }

  choosed(articleChoosed) {
    this.articlePreview= articleChoosed
    console.log(this.articlePreview);
  }
}
