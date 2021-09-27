import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreationComponent } from './creation/creation.component';
import { ListeComponent } from './liste/liste.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './liste/detail/detail.component';
import { ListeUsersComponent } from './liste/liste-users/liste-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    ListeComponent,
    DetailComponent,
    ListeUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
