import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:"./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created!"
  serverName:string = "test"
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    },3000)

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdates(event:any) {
    console.log(event);
    this.serverName = event.target.value;
  }


}
