import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})

export class ChildAppModule { }
