import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';
  myForm: FormGroup;
  sku:AbstractControl;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', [Validators.required, this.skuValidator]]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value) => console.log("sku changed to: ", value)
    );

    this.myForm.valueChanges.subscribe(
      (value) => console.log("form changed to: ", value)
    );
  }
  
  skuValidator(control: FormControl): { [s: string]: boolean } {
    return !control.value.match(/^123/) ? {champInvalide: true} : null;
  }

  onSubmit(form:any):void {
    console.log("Vous avez soumi ", form);
  }
 }

