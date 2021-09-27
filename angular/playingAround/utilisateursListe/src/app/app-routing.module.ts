import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: 'creation', component: CreationComponent },
  { path: 'liste', component: ListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }