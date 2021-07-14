import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'styles';
  compteur: number;

  ngOnInit() {
    this.compteur = 0;
  }

  onReset(num:number) {
    this.compteur = num;
  }

  onAdd(num:number) {
    this.compteur = num;
  }
}
