import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
