import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  public stockForm = this.fb.group({
    name: [null, Validators.required],
    code: [null, [Validators.required, Validators.minLength(2)]],
    price: [null, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}
  onSubmit() {
    console.log('name Control value', this.stockForm.value);
  }
}
