import { BrowserModule } from '@angular/platform-browser'; // Module fournissant des éléments essentielles pour le fonctionnement de l'app
import { NgModule } from '@angular/core'; // Permet de déclarer un module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
