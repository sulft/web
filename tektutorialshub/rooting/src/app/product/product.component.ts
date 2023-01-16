import { Component, OnInit } from '@angular/core';
 
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  templateUrl: './product.component.html',
})
 
export class ProductComponent implements OnInit
{
 
   products:Product[];
   snapshotPageNo = 0;
   pageNo = 0;
   
   constructor(
    private productService:ProductService,
    private Activatedroute: ActivatedRoute,
    private router: Router,
  ){ }
 
   ngOnInit() {
    this.snapshotPageNo = this.Activatedroute.snapshot.queryParams['pageNum'] || 0; /* ne charge pas dynmamiquement la valeur de snapshotPageNo tant que
    je ne recharge pas le composant */
     
    this.Activatedroute.queryParamMap.subscribe(params => { 
      this.pageNo = +params.get('pageNum')||0;
      console.log('Query params ',this.pageNo) 
    });

    this.productService.getProducts().subscribe(data => 
      this.products= data 
    );
   }

   nextPage() {
    this.router.navigate(['./'], 
    { queryParams: { pageNum: this.pageNo + 1 }, 
      relativeTo: this.Activatedroute }   );
 } 
  
}