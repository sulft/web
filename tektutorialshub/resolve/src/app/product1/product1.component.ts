import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component {
  public products:Product[];
   
   constructor(private route: ActivatedRoute,private productService:ProductService){
   }
 
   ngOnInit() {
      this.products=this.route.snapshot.data['products'];
   }
}
