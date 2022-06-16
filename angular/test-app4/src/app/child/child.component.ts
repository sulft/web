import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() message:any;
  @Output() onSend = new EventEmitter<any>() /* Variable qui stockera les données de l'enfant qui seront envoyé au parent */

  ngOnInit(): void {
  }

  onSending() {
    this.onSend.emit(this.message); /* Récupération des données à transmettre à onSend */
  }

}
