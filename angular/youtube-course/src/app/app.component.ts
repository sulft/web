import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bienvenu';
  test = {
    name: 'kelly',
    age: 20,
    tab1:['nb','nb1','nb2']
  };
  tab = ['test','test1','test2'];
  siteUrl=window.location.href;

}
