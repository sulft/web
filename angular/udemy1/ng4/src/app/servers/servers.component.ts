import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  activerAjoutServeur:boolean = false;
  statutCreationServeur:string = "Aucun serveur n'a été crée.";
  nomServeur:string = "tt";

  constructor() { 
    setTimeout(() => { this.activerAjoutServeur = !this.activerAjoutServeur }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.statutCreationServeur = "Le serveur a été crée ! "
  }

  // onAddServeurName(event:Event) {
  //   this.nomServeur = (<HTMLInputElement>event.target).value;
  // }

}
