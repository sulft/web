import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {

  @Input() product!:Product;
  @Output() updatedProduct = new EventEmitter();

  productClass:any;

  constructor() { }

  ngOnInit(): void {
    this.productClass = {
      "onSale" : this.product.onSale(),
      "notSale" : !this.product.onSale()
    }
  }

  
  onMoreProduct(product:Product):void {
    product.quantity++;
    this.updatedProduct.emit(product);
  }

  onLessProduct(product:Product):void {
    product.quantity--;
    this.updatedProduct.emit(product);
  }

}
