import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() compteur: number;
  @Output() addCompte = new EventEmitter<number>();


  ngOnInit(): void {
  }

  Add() {
    this.compteur++;
    this.addCompte.emit(this.compteur);
  }

  
}
