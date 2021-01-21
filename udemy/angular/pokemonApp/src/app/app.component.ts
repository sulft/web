//un composant importera toujours au minimum la notation "component" au moins 
import { Component } from '@angular/core'; 
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-app', //donne un nom au composant
  templateUrl: './app.component.html', //redirige le template vers un fichier un html avec sa localisation
  styleUrls: ['./app.component.css'] //même chose pour le css
})
export class AppComponent implements OnInit{

  title = 'Liste de pokemon'
  private pokemons:Pokemon[];

  ngOnInit() {
    this.pokemons = [
      { 
        id:1,
        hp:100,
        cp:100,
        name:'Carapuce',
        picture:'test',
        types:['Feu','Eau'],
        created:new Date()
      }
    ];
  }
    selectPokemon(pokemon: Pokemon) {
      alert("vous avez cliqué sur" + pokemon.name);

    }
}
 //le mot clé export rends le "component" accessible pour d'autre fichier
