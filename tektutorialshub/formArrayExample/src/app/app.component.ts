import { Component } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formArrayExample';

  skillsForm:FormGroup = this.fb.group({
    name:"",
    skills:this.fb.array([])
  })


  constructor(
    private fb:FormBuilder,
  ) {}

  get skills():FormArray {
    return this.skillsForm.get("skills") as FormArray;
  }

  newSkill():FormGroup {
    return this.fb.group({
      skill:'',
      exp:''
    });
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value)
  }
}
