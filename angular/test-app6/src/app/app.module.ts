import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Com1Component } from './com1/com1.component';
import { ChildAppModule } from './child-app/child-app.module';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
