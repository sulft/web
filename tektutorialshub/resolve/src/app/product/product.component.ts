import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  public products:Product[];

  constructor(private route: ActivatedRoute,private productService:ProductService){
  }

  ngOnInit() {
      this.productService.getProducts().subscribe(data => {
        this.products=data;
     });
  }
}
