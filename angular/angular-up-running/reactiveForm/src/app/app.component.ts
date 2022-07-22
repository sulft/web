import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Person } from 'src/assets/models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';

  get name() { return this.personForm.get('name') }
  get age() { return this.personForm.get('age') }

  person:Person
  
  public personForm: FormGroup;

  constructor(private fb:FormBuilder) {

  }

  ngOnInit() {
    this.personForm = this.fb.group({
      name: ["", Validators.required],
      age: [0, [Validators.required, Validators.min(0), Validators.max(120)]]
    });
    this.person = new Person("test",24);
  }

  resetForm() {
    this.personForm.reset();
  }

  loadStockFromServer() {
    this.person = new Person("Terry",24);
    let PersonFormModel = Object.assign({},this.person);
    console.log(PersonFormModel);
    /* delete PersonFormModel.address; Si des attributs sont des constantes inutiles de le copier
     dans un objet une instance qui le possède dejà */
    this.personForm.setValue(PersonFormModel);
    /* ICI on attribue au form les valeurs ci dessus */
  }

  patchPersonForm() {
    this.person = new Person("Terry",24);
    this.personForm.patchValue(this.person);
    console.log(this.person)
  }

  onSubmit() {
    this.person = Object.assign({},this.personForm.value); /* on envoie plutot une copie des valeurs valeurs du Form, c'est un best practice */
    console.log(this.person);
  }
}
