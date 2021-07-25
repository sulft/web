import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() compteur: number;
  @Output() addCompte = new EventEmitter<number>();


  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  Add() {
    this.compteur++;
    this.addCompte.emit(this.compteur);
  }

  
}
