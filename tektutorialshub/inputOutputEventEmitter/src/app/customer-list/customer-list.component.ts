import { Component } from '@angular/core';
import { Customer } from '../customer.class';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: [],
})
export class CustomerListComponent {
  customers: Customer[] = [
    {
      customerNo: 1,
      prenom: 'Rahuld',
      nom: "Dravid"
    },
    {
      customerNo: 2,
      prenom: 'Sachin',
      nom: "Tendulkar"
    },
    {
      customerNo: 3,
      prenom: 'Saurrav',
      nom: "Ganguly"
    },
    {
      customerNo: 4,
      prenom: 'Mahendra',
      nom: "Singh Dhoni"
    },
    {
      customerNo: 5,
      prenom: 'Virat',
      nom: "Kohli"
    },
  ];

  selectedCustomer: Customer = new Customer();

  constructor() {}

  ngOnInit() {}

  showDetails(customer: Customer) {
    Object.assign(this.selectedCustomer, customer);
    // Ici comme on a un object pour assigner une valeur à un objet on utilise "Object.assign(objet à changer, valeur à assigner)"
    // ou
    // this.selectedCustomer = Object.assign({}, customer);
  }

  update(customer: Customer) {
    console.log(customer);
    var cust = this.customers.find((e) => e.customerNo == customer.customerNo);
    console.log(cust);
    Object.assign(cust, customer);
    alert('Customer Saved');
  }
}
