import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  template: `<app-product
    *ngFor="let product of products"
    [product]="product"
    (onAdd)="add($event)"
    (onRemove)="remove($event)"
  ></app-product>`,
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Array<Product>;

  ngOnInit() {
    this.products = [
      new Product('Pants', 25, 'assets/images/pants.png', false),
      new Product('Skirt', 10, 'assets/images/skirt.png', false),
      new Product('Hat', 12, 'assets/images/hat.png', true),
    ];
  }

  add(index: number): void {
    let i = this.products.findIndex((a) => a.productId === index);
    this.products[i].quantity++;
  }

  remove(index: number): void {
    let i = this.products.findIndex((a) => a.productId === index);
    this.products[i].quantity--;

  }
}
