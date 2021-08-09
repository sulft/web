import { Component, OnInit } from '@angular/core';
import { ChoixService } from '../choix.service';

@Component({
  selector: 'app-choisir-couleur',
  templateUrl: './choisir-couleur.component.html',
  styleUrls: ['./choisir-couleur.component.css'],
})
export class ChoisirCouleurComponent implements OnInit {

  constructor(private choix: ChoixService) { }

  isDisabled1:boolean = false
  isDisabled2:boolean = false
  isDisabled3:boolean = false

  couleur:string;

  ngOnInit(): void {
  }

  choixCouleur(couleurChoisie) {
    switch (couleurChoisie) {
      case 'blue':
        this.isDisabled1 = true;
        this.isDisabled2 = false;
        this.isDisabled3 = false;
        break;
      case 'red':
        this.isDisabled1 = false;
        this.isDisabled2 = true;
        this.isDisabled3 = false;
        break;
      case 'green':
        this.isDisabled1 = false;
        this.isDisabled2 = false;
        this.isDisabled3 = true;
        break;
    }
    this.choix.couleur.emit(couleurChoisie)
  }

  check(value) {
    return true;
  }

}
