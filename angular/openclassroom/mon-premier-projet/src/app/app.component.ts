import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth:boolean = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils:any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000 
    )
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm("Etes-vous sûr de vouloir éteindre tous vos appareils")) {
      this.appareilService.switchOffAll();
    } 
  }
}
