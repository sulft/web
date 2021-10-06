import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/assets/models/product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product
  constructor() { }

  ngOnInit(): void {
  }

}
