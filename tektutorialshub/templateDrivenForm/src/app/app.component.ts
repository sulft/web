import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template Driven Forms';

  contries:Country[] = [
    {
      id:1,
      name:"USA"
    },
    {
      id:2,
      name:"India"
    },
    {
      id:3,
      name:"England"
    },
  ]

  onSubmit(form:Form) {
    console.log(form);
  }
}

export class Country {
  id?:number;
  name?:string;
}


export class Contact1 {
  prenom?:string;
  nom?:string;
  age?:number;
  pays?:string;
  addresse?: {
    ville:string;
    rue:string;
    code:string
  }
}

