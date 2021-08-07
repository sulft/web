import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MinuteurComponent } from './minuteur/minuteur.component';
import { BoutonsComponent } from './minuteur/boutons/boutons.component';
import { StopComponent } from './minuteur/boutons/stop/stop.component';
import { ReprendreComponent } from './minuteur/boutons/reprendre/reprendre.component';
import { InterrompreComponent } from './minuteur/boutons/interrompre/interrompre.component';
import { ButtonDirectiveDirective } from './my-directive/button-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    MinuteurComponent,
    BoutonsComponent,
    StopComponent,
    ReprendreComponent,
    InterrompreComponent,
    ButtonDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
