import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "for loop in Angular";
  data:string[]=["Terry",'Sam','Peter','John'];
  array:Object[]=[
    {
      nom:'Terry',
      age:'18',
      email:'xyz@test.com'
    },
    {
      nom:'Sam',
      age:'22',
      email:'xyz@test.com'
    },
    {
      nom:'Peter',
      age:'17',
      email:'xyz@test.com'
    },
    {
      nom:'John',
      age:'28',
      email:'xyz@test.com'
    }
  ]
}
