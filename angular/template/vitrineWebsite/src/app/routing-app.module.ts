import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffreComponent } from './offre/offre.component';

const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Offre', component: OffreComponent },
    { path: 'Contact', component: ContactComponent }
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }