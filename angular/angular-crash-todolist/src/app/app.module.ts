import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; /* Permet de démarrer l'application sur les navigateurs */ 
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  /* Comprends les composants crée */ declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
  ],
  /* importer les modules */ imports: [
    BrowserModule,
    HttpClientModule
  ],
  /* importe les services */ providers: [],
  /* Permet d'afficher le composant lors du lancement de l'app*/ bootstrap: [AppComponent]
})
export class AppModule { }
