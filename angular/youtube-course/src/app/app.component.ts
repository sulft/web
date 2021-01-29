import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bienvenu';
  myName:string = 'Terry'
    getName(name:string) {
    alert('Bonjour ' + name + " ! ");
  }

}
