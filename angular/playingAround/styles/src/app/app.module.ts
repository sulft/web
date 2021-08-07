import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
<<<<<<< HEAD
import { DisplayNumberComponent } from './button/display-number/display-number.component';
=======
import { ReinitialiserComponent } from './reinitialiser/reinitialiser.component';
>>>>>>> 6b28f9db03ea7bca070d1c05bf4f7b535f42523e

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
<<<<<<< HEAD
    DisplayNumberComponent
=======
    ReinitialiserComponent
>>>>>>> 6b28f9db03ea7bca070d1c05bf4f7b535f42523e
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
