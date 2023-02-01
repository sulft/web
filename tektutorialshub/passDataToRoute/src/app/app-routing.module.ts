import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HomeComponent } from './home/home.component';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'static',
    component: StaticComponent,
    data: { id: '1', name: 'Angular' },
  },
  { path: 'dynamic', component: DynamicComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
