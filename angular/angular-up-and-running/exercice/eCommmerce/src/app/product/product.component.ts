import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product: Product;
  products: Array<Product>;
  quantity: number[];

  ngOnInit() {
    this.products = [
      new Product('Pants', 25, 'assets/images/pants.png', false),
      new Product('Skirt', 10, 'assets/images/skirt.png', false),
      new Product('Hat', 12, 'assets/images/hat.png', true),
    ];
    this.quantity = Array(21);
  }

  add(index: number): void {
    this.products[index].quantity++;
  }

  remove(index: number): void {
    this.products[index].quantity--;
  }
}
