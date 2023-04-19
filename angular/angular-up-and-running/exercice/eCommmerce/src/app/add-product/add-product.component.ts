import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  message:string = "";


  submitForm(form) {
    if(form.valid) {
       const product: Product = form.value[""];
       console.log(product);
    }
  }
}
