import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Style binding";
  color:string ='red';
  err:boolean = false;

  updateColor() {
    this.color = "yellow";
    this.err =! this.err;
  }

}
