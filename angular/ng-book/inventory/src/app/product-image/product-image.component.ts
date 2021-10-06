import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from 'src/assets/models/product.model';

@Component({
  selector: 'product-image',
  template: '<img class="product-image" [src]="product.imageUrl">'
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'img-fluid';

  constructor() { }

  ngOnInit(): void {
  }

}
