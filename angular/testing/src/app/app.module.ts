import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockageEditComponent } from './stock/stockage-edit/stockage-edit.component';
import { StockageDisplayComponent } from './stock/stockage-display/stockage-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    StockageEditComponent,
    StockageDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
