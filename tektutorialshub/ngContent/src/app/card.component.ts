import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="header">
        <ng-content select="header"></ng-content>
      </div>
      <div class="content">
        <ng-content select="content"></ng-content>
      </div>
      <div class="footer">
        <ng-content select="footer"></ng-content>
      </div>
    </div>
  `,
  styles: [],
})
export class CardComponent {}
