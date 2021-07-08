import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockageEditComponent } from './stock/stockage-edit/stockage-edit.component';
import { StockageDisplayComponent } from './stock/stockage-display/stockage-display.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    StockageEditComponent,
    StockageDisplayComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
