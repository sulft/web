import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  { path: 'accueil', component: FormComponent },
  { path: 'detail', component: WeatherDetailComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
