import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatut:string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatut;
  }

  getColor() {
    if(this.appareilStatut == "allumé") {
      return "green";
    } else {
      return "red";
    }
  }
}
