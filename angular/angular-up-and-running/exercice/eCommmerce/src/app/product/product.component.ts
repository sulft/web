import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product: Product;
  quantity: number;

  ngOnInit() {
    this.product = new Product('Pants', 25, 'assets/images/pants.jpeg');
    this.quantity = 0;
    this.product.onSale = true;
  }

  add(): void {
    this.quantity++;
  }

  remove(): void {
    this.quantity--;
  }
}
