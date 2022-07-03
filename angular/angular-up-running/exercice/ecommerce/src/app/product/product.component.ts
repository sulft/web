import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!:Product;
  productClass:any;
  quantity!:number[];

  constructor() { }

  ngOnInit(): void {
    this.product = new Product("Pantalon", 24.99, 29.99, 1);
    this.quantity = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    this.productClass = {
      "onSale" : this.product.onSale(),
      "notSale" : !this.product.onSale()
    }
  }
}
