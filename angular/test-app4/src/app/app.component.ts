import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app4';
  mesMessages:any[] = [];

  /* Ici utilisation d'un injecteur pour injecter une instance de mon service dans le composant qui en a besoin*/
  constructor(private message:MessageService) {}

  ngOnInit() {
    this.mesMessages = this.message.getMessages();
  }
}
