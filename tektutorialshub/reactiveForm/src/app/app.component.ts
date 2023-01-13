import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm Example';

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    address:new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode:new FormControl(),
      country: new FormControl(),
    })
  })

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
