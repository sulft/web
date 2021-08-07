import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reinitialiser',
  templateUrl: './reinitialiser.component.html',
  styleUrls: ['./reinitialiser.component.css']
})
export class ReinitialiserComponent implements OnInit {

  @Input() compteur: number;
  @Output() resetCompte = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.compteur = 0;
    this.resetCompte.emit(this.compteur);
  }
}
