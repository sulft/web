import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.css']
})
export class PreviewArticleComponent implements OnInit {

  @Input("article1") affichageArticle;
  @Input() articlePreview;

  constructor() { }

  ngOnInit(): void {
    console.log(this.affichageArticle)
  }

}
