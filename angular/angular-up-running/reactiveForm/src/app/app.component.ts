import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
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
  get favorite() { return this.personForm.get('favorite') as FormArray }

  person:Person
  
  public personForm: FormGroup;

  constructor(private fb:FormBuilder) {

  }

  ngOnInit() {
    this.personForm = this.fb.group({
      name: ["", Validators.required],
      age: [0, [Validators.required, Validators.min(0), Validators.max(120)]],
      favorite: this.fb.array([])
    });
    this.person = new Person("test",24);
  }

  resetForm() {
    this.personForm.reset();
  }

  addFavorite() {
    const favorite:FormGroup = this.fb.group({
      color:['',Validators.required],
      film:['',Validators.required]
    })
    this.favorite.push(favorite);
  }

  removeFavorite(index:number) {
    this.favorite.removeAt(index)
  }

  onSubmit() {
    this.person = Object.assign({},this.personForm.value); /* on envoie plutot une copie des valeurs valeurs du Form, c'est un best practice */
    console.log(this.person);
  }
}
