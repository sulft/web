import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisplayNumberComponent } from './button/display-number/display-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
