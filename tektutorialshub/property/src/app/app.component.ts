import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property example';
  isDisabled = true;
  evilText = 'Template <script>alert("You are hacked")</script> Syntax';


}
