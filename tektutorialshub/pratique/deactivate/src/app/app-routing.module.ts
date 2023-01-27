import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'blog', component:BlogComponent, canDeactivate:[DeactivateGuard]},
  { path:'about', component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
