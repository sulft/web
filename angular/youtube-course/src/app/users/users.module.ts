import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent, //export des composants de UsersModule
    SignupComponent
  ]
})
export class UsersModule { }
