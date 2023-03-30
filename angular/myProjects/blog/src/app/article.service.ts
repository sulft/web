import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  articles:Article[] = ARTICLES;

  getArticles():Article[] {
    return this.articles;
  }

  createArticle(name:string, description:string) {
    let lastArticle = this.articles[this.articles.length - 1];
    this.articles.push(new Article(lastArticle.id+1,name,description));
  }
}
