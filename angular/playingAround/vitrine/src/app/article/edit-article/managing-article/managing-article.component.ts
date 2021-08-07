import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-managing-article',
  templateUrl: './managing-article.component.html',
  styleUrls: ['./managing-article.component.css']
})
export class ManagingArticleComponent implements OnInit {

  @Input() article2;
  @ViewChild('nom') nom:ElementRef;
  @ViewChild('nombre') nombre:ElementRef;
  @Output() article = new EventEmitter <{nom:string,nombre:number}>();


  constructor() { }

  ngOnInit(): void {
  }

  ajouterUnArticle() {
    var monNom = this.nom.nativeElement.value; 
    var monNombre = this.nombre.nativeElement.value;
    this.article.emit({nom: monNom, nombre: monNombre})
  }

  supprimerUnArticle() {
    alert("article supprimé");
  }

  modifierUnArticle() {
    alert("article modifié");
  }

}
