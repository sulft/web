//un composant importera toujours au minimum la notation "component" au moins 
import { Component } from '@angular/core'; 

@Component({
  selector: 'pokemon-app', //donne un nom au composant
  templateUrl: './app.component.html', //redirige le template vers un fichier un html avec sa localisation
  styleUrls: ['./app.component.css'] //même chose pour le css
})
export class AppComponent {
  title = 'pokemonApp';
} //le mot clé export rends le "component" accessible pour d'autre fichier
