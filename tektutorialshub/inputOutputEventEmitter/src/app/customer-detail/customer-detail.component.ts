import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../customer.class';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styles: [
  ]
})
export class CustomerDetailComponent {
  @Input() customer:Customer = new Customer();
  @Output() customerChange:EventEmitter<Customer> = new EventEmitter<Customer>();

  update() {
    this.customerChange.emit(this.customer);
  }
}
