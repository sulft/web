import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created yet !";
  serverName:string = "";
  serverCreated:boolean = false;
  servers = ["TestServer 1","TestServer 2"]


  constructor() { 
    //création d'un timeOut afin de réaliser une action après 2sec
    setTimeout(() => {
      this.allowNewServer = true;
      }, 2000
    ) 

    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created ! Name is ${this.serverName}.`;
  }

  onUpdateServerName(event:InputEvent) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
