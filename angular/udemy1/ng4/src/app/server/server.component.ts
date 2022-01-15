import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color:white
    }
  `]
})
export class ServerComponent implements OnInit {

  idServer:number = 1;
  statutServer:string = "actif"

  constructor() {
    this.statutServer = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
    
  }

  getColor() {
    return this.statutServer === 'online' ? 'green' : 'red';
  }


}
