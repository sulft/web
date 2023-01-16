import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { ProductService } from '../product.service';
import { Product } from '../product';
 
@Component({
  template: `
  
  <h3>Product Details Page</h3>
  product : {{product.name}}
  price : {{ product.price}}

  <ul class="nav navbar-nav">
    <li><a [routerLink]="['overview']">OverView </a></li>
    <li><a [routerLink]="['spec']">Specification </a></li>
  </ul>

  <router-outlet></router-outlet>

  <p>
      <a class='btn btn-default' (click)="onBack()">Back </a>
  </p>
  `,
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  products: Product[];
  id;
 
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}
 
  /* Using snapshot */
  //ngOnInit() {
  //  this.id = this._Activatedroute.snapshot.paramMap.get('id');
  //
  //  //You can use this also
  //  //this.id=this._Activatedroute.snapshot.params['id'];
 
  //  let products = this._productService.getProducts();
  //  this.product = products.find((p) => p.productID == this.id);
  //}
 
  /* Using Subscribe */
 
  sub;
 
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = params.get('id');
      this._productService.getProducts().subscribe(data =>
        { this.products = data}  
      );
      this.product = this.products.find((p) => p.productID == this.id);
    });
 
    //You can also use this
    //this.sub=this._Activatedroute.params.subscribe(params => {
    //    this.id = params['id'];
    //    let products=this._productService.getProducts();
    //    this.product=products.find(p => p.productID==this.id);
    //});
  }
 
  ngOnDestroy() {
    if (this.sub) { this.sub.unsubscribe(); }
  }
 
  onBack(): void {
    this._router.navigate(['product']);
  }
}
 