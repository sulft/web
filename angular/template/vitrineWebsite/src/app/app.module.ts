import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { OffreComponent } from './offre/offre.component';
import { ContactComponent } from './contact/contact.component';
import { RoutingModule } from './routing-app.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    OffreComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
