import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosing-article',
  templateUrl: './choosing-article.component.html',
  styleUrls: ['./choosing-article.component.css']
})
export class ChoosingArticleComponent implements OnInit {

  @Input() tableauArticle;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableauArticle);
  }

}
