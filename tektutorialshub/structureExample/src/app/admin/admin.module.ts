import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, DashboardComponent, RightsComponent, UsersComponent } from './pages';


@NgModule({
  declarations: [ RightsComponent, AdminComponent, UsersComponent, DashboardComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  providers: [],
})
export class AdminModule { }
