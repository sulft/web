import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; /* Permet de démarrer l'application sur les navigateurs */ 
import { AppComponent } from './app.component';

@NgModule({
  /* Comprends les composants crée */ declarations: [
    AppComponent
  ],
  /* importer les modules */ imports: [
    BrowserModule
  ],
  /* importe les services */ providers: [],
  /* Permet d'afficher le composant lors du lancement de l'app*/ bootstrap: [AppComponent]
})
export class AppModule { }
