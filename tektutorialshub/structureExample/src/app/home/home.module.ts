
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
 
import { AboutUsComponent,ContactUsComponent,HomeComponent } from './pages';
 
 
@NgModule({
  imports: [
    HomeRoutingModule, SharedModule
  ],
  providers: [
  ],
  declarations: [AboutUsComponent,ContactUsComponent,HomeComponent]
})
export class HomeModule { 
 
}