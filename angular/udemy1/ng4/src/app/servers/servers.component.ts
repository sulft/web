import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  activerAjoutServeur:boolean = false;
  statutCreationServeur:string = "Aucun serveur n'a été crée.";
  nomServeur:string = "serveur de test";
  serveurCree:boolean = false;

  constructor() { 
    setTimeout(() => { this.activerAjoutServeur = !this.activerAjoutServeur }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serveurCree = true;
    this.statutCreationServeur = `Le serveur a été crée ! Le nom du serveur est ${this.nomServeur}.`;
  }

  // onAddServeurName(event:Event) {
  //   this.nomServeur = (<HTMLInputElement>event.target).value;
  // }

}
