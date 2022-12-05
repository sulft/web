import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  cities:String[] = ["Paris","New York","Rome"]
  myCity?:String;

  onSubmit() {

  }

  func(value:any) {
    console.log(value);
  }

}
