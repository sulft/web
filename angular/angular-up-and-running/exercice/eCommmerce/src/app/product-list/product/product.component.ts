import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onAdd: EventEmitter<number> = new EventEmitter<number>();
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();

  quantity: number[];
  products: Array<Product>;

  ngOnInit() {
    this.quantity = Array(21);
  }

  add(index: number): void {
    this.onAdd.emit(index);
  }

  remove(index: number): void {
    this.onRemove.emit(index);
  }
}
