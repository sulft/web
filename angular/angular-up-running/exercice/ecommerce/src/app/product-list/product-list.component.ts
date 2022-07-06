import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-product-list',
  template: `<app-product-item *ngFor="let product of products" [product]="product" (updatedProduct)="updateProductQuantity($event)"></app-product-item>`,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products!:Product[];

  ngOnInit(): void {
    this.products = [
      new Product("Pantalon", 24.99, 29.99, 1),
      new Product("T-Shirt", 19.99, 14.99, 1),
      new Product("Manteau", 99.99, 119.99, 3)
    ]
  }

  updateProductQuantity(product:Product):void {
    console.log(product);
  }



}
