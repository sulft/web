import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!:Product;

  constructor() { }

  ngOnInit(): void {
    this.product = new Product("Pantalon", 25, 29.99, 1);
  }
}
