//un composant importera toujours au minimum la notation "component" au moins 
import { Component } from '@angular/core'; 
import { OnInit } from '@angular/core';

import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-app', //donne un nom au composant
  templateUrl: './app.component.html', //redirige le template vers un fichier un html avec sa localisation
  styleUrls: ['./app.component.css'] //même chose pour le css
})
export class AppComponent implements OnInit{

  private pokemons:Pokemon[];
  title:string = 'Liste de pokemons'

  ngOnInit() {
    this.pokemons = POKEMONS;

  }
  //methode permettant de gérer les intéractions de l'utilisateur
  //ICI détecter le clique du pokemon sélectionner et dire son nom
  selectPokemon(pokemon: Pokemon) {
      alert("vous avez cliqué sur" + pokemon.name);

    }
}
 //le mot clé export rends le "component" accessible pour d'autre fichier (exemple le app.module.ts)
