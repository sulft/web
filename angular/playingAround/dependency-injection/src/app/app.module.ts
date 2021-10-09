import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'src/assets/services/message.service';
import { UserService } from 'src/assets/services/user.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
