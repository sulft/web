import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth:boolean = false;

  appareils = [
    {
      name:'Machine à laver',
      status:'éteint'
    },
    {
      name:'Frigo',
      status:'allumé'
    },
    {
      name:'Ordinateur',
      status:'éteint'
    }
  ]


  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000 
    )
  }

  onAllumer() {
    console.log("On Allume tout!")
  }
}
