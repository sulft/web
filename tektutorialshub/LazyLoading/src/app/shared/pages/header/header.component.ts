import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<ul>
    <li>
      <a class="navbar-brand" routerLink="">home</a>
    </li>
    <li>
      <a class="navbar-brand" routerLink="/admin/dashboard">Dashboard</a>
    </li>
    <li>
      <a class="navbar-brand" routerLink="/admin/rights">rights</a>
    </li>
    <li>
      <a class="navbar-brand" routerLink="/admin/user">user</a>
    </li>
  </ul> `,
  styles: [
    `
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
      }

      li {
        float: left;
      }

      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
      }

      li a:hover {
        background-color: #111111;
      }
    `,
  ],
})
export class HeaderComponent {}
