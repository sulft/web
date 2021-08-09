import { EventEmitter, Injectable } from "@angular/core";

@Injectable()

export class ChoixService {

  constructor() { }

  couleur = new EventEmitter<string>()

  // choixCouleur(couleurChoisie:string) {
  //   if(couleurChoisie == "red" || couleurChoisie == "green" || couleurChoisie == "blue") {
  //     this.affichage.obtentionCouleur(couleurChoisie);
  //   } else {
  //     console.log("Erreur dans la saisie");
  //   } 
  // }
}
