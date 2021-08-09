import { Component, OnInit } from '@angular/core';
import { ChoixService } from '../choix.service';

@Component({
  selector: 'app-choisir-couleur',
  templateUrl: './choisir-couleur.component.html',
  styleUrls: ['./choisir-couleur.component.css'],
})
export class ChoisirCouleurComponent implements OnInit {

  constructor(private choix: ChoixService) { }

  couleur:string;

  ngOnInit(): void {
  }

  choixCouleur(couleurChoisie) {
    this.choix.couleur.emit(couleurChoisie)
  }

}
