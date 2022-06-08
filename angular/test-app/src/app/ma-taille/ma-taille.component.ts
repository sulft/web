import { Component, Input, Output, EventEmitter ,OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-taille',
  templateUrl: './ma-taille.component.html',
  styleUrls: ['./ma-taille.component.css']
})
export class MaTailleComponent implements OnInit {

  constructor() { }

  @Input() reponse!:String;
  @Output() reponseChange = new EventEmitter<String>();
  @Output() donneChange = new EventEmitter<String>();

  ngOnInit(): void {
  }

  notreReponse(laReponse:String) {
    this.reponse = laReponse;
    this.reponseChange.emit(this.reponse);
    this.donneChange.emit("test22");
  }




}
