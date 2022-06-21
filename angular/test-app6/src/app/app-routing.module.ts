import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com1Component } from './com1/com1.component';

const routes: Routes = [
  { path: 'routeA', component: Com1Component },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
