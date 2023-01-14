import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { gte } from './gte.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customValidator';

  myForm = new FormGroup({
    numVal:new FormControl('',[gte(12)])
  })

  get numVal() { return this.myForm.get("numVal") }

  onSubmit() {
    console.log(this.myForm.value);
  }
}


