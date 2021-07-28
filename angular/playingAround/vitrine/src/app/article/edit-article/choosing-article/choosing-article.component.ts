import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choosing-article',
  templateUrl: './choosing-article.component.html',
  styleUrls: ['./choosing-article.component.css']
})
export class ChoosingArticleComponent implements OnInit {

  @Input() tableauArticle;
  @Output() choosedItem = new EventEmitter<{nom:string, nombre:number}>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableauArticle);
  }

  choosed(articleChoosed) {
    this.choosedItem.emit({nom: articleChoosed.nom,nombre: articleChoosed.nombre})
  }

}
