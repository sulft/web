import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Property binding";
  name:string = 'Terry';
  state:boolean = true;
  enableBox() {
    if(this.state) { this.state = false }
    else { this.state = true }
  }

}
