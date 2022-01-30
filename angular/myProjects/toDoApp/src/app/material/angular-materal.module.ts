import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatSliderModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
