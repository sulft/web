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
      new Product('Pants', 25, 'assets/images/pants.png'),
      new Product('Skirt', 10, 'assets/images/skirt.png'),
      new Product('Hat', 12, 'assets/images/hat.png'),
    ];
    this.quantity = Array(21);
    this.products[2].onSale = true;
  }

  add(index: number): void {
    this.products[index].quantity++;
  }

  remove(index: number): void {
    this.products[index].quantity--;
  }
}
