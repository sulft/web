import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  @Input() article1;
  @Output() articleChild = new EventEmitter<{nom:string, nombre:number}>();
  @Output() choosedItem = new EventEmitter<{nom:string, nombre:number}>();



  constructor() { }

  ngOnInit(): void {
  }

  ajoutArticle(article:Article) {
    this.articleChild.emit({nom: article.nom, nombre: article.nombre});
  }

  choosed(articleChoosed) {
    this.choosedItem.emit({nom: articleChoosed.nom,nombre: articleChoosed.nombre})
  }

}
