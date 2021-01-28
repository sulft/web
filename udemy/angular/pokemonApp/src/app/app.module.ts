import { BrowserModule } from '@angular/platform-browser'; // Module fournissant des éléments essentielles pour le fonctionnement de l'app
import { NgModule } from '@angular/core'; // Permet de déclarer un module

import { AppComponent } from './app.component';
import { CardDirecDirective } from './card-direc.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardDirecDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
