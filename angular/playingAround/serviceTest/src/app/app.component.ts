import { Component } from '@angular/core';
import { ChoixService } from './choix.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChoixService]
})
export class AppComponent {
  title = 'serviceTest';

  constructor(private Choix:ChoixService) {}

}
