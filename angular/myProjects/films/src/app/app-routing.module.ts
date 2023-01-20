import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './films/detail/detail.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { path:'connexion', component: ConnexionComponent },
  { path:'films', component: FilmsComponent, canActivate: [AuthGuard] },
  { path:'detail/:id', component: DetailComponent },
  { path:'contact', component: ContactComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
