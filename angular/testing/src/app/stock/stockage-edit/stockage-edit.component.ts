import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stockage-edit',
  templateUrl: './stockage-edit.component.html',
  styleUrls: ['./stockage-edit.component.css']
})
export class StockageEditComponent implements OnInit {

  newArticleName: string = ""
  newArticleNumber: number = 0;
  input1:boolean = false;
  input2:boolean = false;
  clicked = false;
  
  @Output() articleCreated = new EventEmitter<{articleName: string, articleNumber: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  AddArticle() {
    this.clicked = !this.clicked;
    this.articleCreated.emit({articleName:this.newArticleName, articleNumber:this.newArticleNumber});
  }

}
