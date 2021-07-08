import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  {
    type:'blueprint',
    name:'TestServer',
    content:'Je suis un test'
  },
  {
    type:'blueprint',
    name:'TestServer',
    content:'Je suis un test'
  }
];
  newServerName = '';
  newServerContent = '';

}
