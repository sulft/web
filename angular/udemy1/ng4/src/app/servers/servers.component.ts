import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  activerAjoutServeur:boolean = true;

  constructor() { 
    setTimeout(() => { this.activerAjoutServeur = !this.activerAjoutServeur }, 2000);
  }

  ngOnInit(): void {
  }

}
