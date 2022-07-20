import { Component, OnInit } from '@angular/core';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'templateDrivenForm';

  moi:Person;

  ngOnInit() {
    this.moi = new Person( "", "", 0, "");
  }

  reset() {
    this.moi.age = 0;
    this.moi.description = "";
    this.moi.name = "";
    this.moi.sexe = "";
  }

  createPerson(personForm) {
    console.log(personForm.value);
    if(personForm.valid) {
      this.moi = personForm.value.person;
      console.log(this.moi);
    } else {
      console.error('Form non valide')
    }
  }
}
