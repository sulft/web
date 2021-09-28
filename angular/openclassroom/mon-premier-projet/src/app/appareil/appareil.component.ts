import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatut:string;
  @Input() index:number;
  @Input() id:number;

  constructor(private appareilService:AppareilService) { }

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

  onSwitch() {
    if(this.appareilStatut == "allumé") {
      this.appareilService.switchOffOne(this.index);
    } else {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
