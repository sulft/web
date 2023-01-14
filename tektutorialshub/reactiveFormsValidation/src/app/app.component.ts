import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormsValidation';

  contactForm = this.fb.group({
    firstname: ['',[Validators.required,Validators.minLength(10)]],
    lastname: ['',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
    email:['',[Validators.email,Validators.required]],
    gender:['',[Validators.required]],
    isMarried:['',[Validators.required]],
    country:['',[Validators.required]],
    address:this.fb.group({
      city: ['',[Validators.required]],
      street:['',[Validators.required]],
      pincode:['',[Validators.required]]
    })
  });

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  constructor(
    private fb:FormBuilder
  ) { }

  get firstname() {
    return this.contactForm.get("firstname");
  }

  get lastname() {
    return this.contactForm.get("lastname");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get gender() {
    return this.contactForm.get("gender");
  }

  get isMarried() {
    return this.contactForm.get("isMarried");
  }

  get country() {
    return this.contactForm.get("country");
  }

  get city() {
    return this.contactForm.get("address").get("city");
  }

  get street() {
    return this.contactForm.get("address").get("street");
  }

  get pincode() {
    return this.contactForm.get("address").get("pincode");
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }
}

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
