import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Terry';

  constructor() {
    this.changeName('Edouard')
  }

  changeName(name:string) {
    this.name = name;
  }
}
