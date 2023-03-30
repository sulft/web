import { Component } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  name:string = "";
  description:string = "";

  constructor(private articleService:ArticleService) {}

  addArticle(name:string, description:string) {
    this.articleService.createArticle(name,description);
    this.name = "";
    this.description = "";
  }
}
