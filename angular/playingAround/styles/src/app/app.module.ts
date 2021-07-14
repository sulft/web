import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ReinitialiserComponent } from './reinitialiser/reinitialiser.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ReinitialiserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
