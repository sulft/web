import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, RightsComponent, UserComponent } from './pages';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [DashboardComponent, UserComponent, RightsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {

}
