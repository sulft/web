import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngContent';

  test() {
    alert("je suis un test");
  }

  test1() {
    alert("je suis un test 1");
  }
}
