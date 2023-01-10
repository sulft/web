import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './contacts/ajout/ajout.component';
import { ListeComponent } from './contacts/liste/liste.component';
import { MajComponent } from './contacts/maj/maj.component';

const routes: Routes = [
  { path: 'liste', component: ListeComponent },
  { path: 'modification/:id', component: MajComponent },
  { path: 'ajouter', component: AjoutComponent },
  { path: '**', component: ListeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
