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
    this.moi = new Person( "H", "Terry", 25, "description");
  }

  reset() {
    this.moi.age = 0;
    this.moi.description = "";
    this.moi.name = "";
    this.moi.sexe = "";
  }

  createPerson(val) {
    console.log(val.errors)
  }
}
