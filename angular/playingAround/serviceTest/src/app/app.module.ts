import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChoisirCouleurComponent } from './choisir-couleur/choisir-couleur.component';
import { AffichageCouleurComponent } from './affichage-couleur/affichage-couleur.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoisirCouleurComponent,
    AffichageCouleurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
