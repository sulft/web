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
      <ng-content select="app-fancy-btn"></ng-content>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `.card { min-width: 280px;  margin: 5px;  float:left  } 
    .header { color: blue}`,
  ],
})
export class CardComponent {}
