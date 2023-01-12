import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asyncPipe';
  

  obsValue = new Observable((observer) => {
    console.log("Observable starts");
    //equivalent à l'intervention des données avec un décalage
    setTimeout(() => { 
      console.log("Returns value");
      observer.next("1000");
    }, 5000);
  })
}
