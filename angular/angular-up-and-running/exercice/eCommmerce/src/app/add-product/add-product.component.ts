import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product:Product;

  ngOnInit() {
    this.product = new Product("test",0,"",true)
  }

  submitForm(form:NgForm) {
    console.log(this.product)

    if(form.valid) {
      this.product = form.value;
    }
  }
}
