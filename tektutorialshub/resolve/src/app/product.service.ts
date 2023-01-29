import { Injectable } from '@angular/core';
import { of, Observable, throwError, delay} from 'rxjs';

import { Product } from './product.class';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];
  constructor() {
    this.products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
      new Product(4, 'Computer', 100),
      new Product(5, 'Laptop', 100),
      new Product(6, 'Printer', 100),
    ];
  }

  getProducts():Observable<Product[]> {
    return of(this.products).pipe(delay(1500))
  }

  getProduct(id:number):Observable<Product> {
    var product = this.products.find(i => i.id==id)
    return of(product).pipe(delay(1500));
  }
}
