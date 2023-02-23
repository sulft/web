import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard Component</h1>
    <ul>
      <li><a [routerLink]="['user']">User</a></li>
      <li><a [routerLink]="['rights']" routerLink="rights">Rights</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DashboardComponent {}
