import { Component, OnInit } from '@angular/core';
import { ChoixService } from '../choix.service';


@Component({
  selector: 'app-affichage-couleur',
  templateUrl: './affichage-couleur.component.html',
  styleUrls: ['./affichage-couleur.component.css'],
})
export class AffichageCouleurComponent implements OnInit {

  couleur:string;

  constructor(private Choix:ChoixService) {
    this.Choix.couleur.subscribe(
      (couleur:string) => { 
        this.couleur = couleur;
        console.log(this.couleur);
      }
    )
  }

  ngOnInit(): void {
  }
  

}
