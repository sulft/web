import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="align-element">
    <h1>My messages</h1>
    <hr>
    <app-success-message></app-success-message>
    <app-warning-message></app-warning-message>
  </div>
  `,
  styles: ['.align-element{text-align:center}']
})
export class AppComponent {
  title = 'Success and warning message';
}
