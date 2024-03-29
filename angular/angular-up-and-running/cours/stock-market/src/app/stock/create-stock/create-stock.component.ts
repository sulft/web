import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  stockForm: FormGroup;

  get name() { return this.stockForm.get('name') }
  get code() { return this.stockForm.get('code') }
  get price() { return this.stockForm.get('price') }


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  onSubmit(): void {
    console.log('name Control value', this.stockForm.value);
  }

  createForm(): void {
    this.stockForm = this.fb.group({     
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }
}
