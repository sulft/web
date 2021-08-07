import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {

  numberOfClick:number = 0;

  constructor() { }

  @Input() compteur: number;
  @Output() addCompte = new EventEmitter<number>();


  ngOnInit(): void {
  }

<<<<<<< HEAD

  addPlus():void {
    this.numberOfClick++;
  }

  reset():void {
    this.numberOfClick = 0;
  }
=======
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  Add() {
    this.compteur++;
    this.addCompte.emit(this.compteur);
  }

  
>>>>>>> 6b28f9db03ea7bca070d1c05bf4f7b535f42523e
}
