import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  { path: 'weather/:name', component: WeatherDetailComponent},
  { path: '', redirectTo: '/weather/Paris', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
