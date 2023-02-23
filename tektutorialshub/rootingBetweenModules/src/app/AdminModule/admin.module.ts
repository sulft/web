import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightsComponent } from './rights/rights.component';

@NgModule({
  declarations: [UserComponent, DashboardComponent, RightsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
