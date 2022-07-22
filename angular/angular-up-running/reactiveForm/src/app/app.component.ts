import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/assets/models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';

  person:Person
  
  public personForm: FormGroup;

  ngOnInit() {
    this.person = new Person("Terry",24);

    this.personForm = new FormGroup({
      namePerson: new FormControl(this.person.name, Validators.required),
      agePerson: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(120)])
    });
    
  }

  onSubmit() {

  }
}
