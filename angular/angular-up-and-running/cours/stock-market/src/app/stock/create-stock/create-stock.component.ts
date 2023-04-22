import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  public nameControl = new FormControl();

  onSubmit() {
    console.log('name Control value', this.nameControl.value)
  }
}
