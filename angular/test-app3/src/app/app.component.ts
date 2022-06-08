import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app3';

  answer:boolean = true

  persons:any[] = [
    {'nom':'Terry', 'age':22},
    {'nom':'Jean', 'age':25},
    {'nom':'Jo', 'age':20},
  ]
}
