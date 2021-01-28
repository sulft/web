import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Part1Component } from './components/part1/part1.component';
import { Part2Component } from './components/part2/part2.component';
import { Part3Component } from './components/part3/part3.component';
import appRoutes from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    Part3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
