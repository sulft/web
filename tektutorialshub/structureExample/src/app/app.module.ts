import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubModule } from './github';
import { HomeModule } from './home';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HomeModule,
    GithubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
