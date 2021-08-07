import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-minuteur',
  templateUrl: './minuteur.component.html',
  styleUrls: ['./minuteur.component.css']
})
export class MinuteurComponent implements OnInit {

  temps: number;
  retake: boolean = false;
  nouveauTemps:number;
  seconde: number;
  state: string;
  validate: boolean = false;
  ref: any;

  constructor() { }

  ngOnInit(): void {
    this.temps = 0;
    this.nouveauTemps = 0;
    this.state = ""
  }

  validation(value:number):void {
    this.validate = !this.validate;
    this.state = "valider"
    this.temps = value;
    if(this.retake == false) {
      this.retake = true;
      this.timer();
    } else {
      console.log('ok');
      setTimeout(this.timer(), 1000);
    }



  }

  isStopped(value:string) {
    this.state = value;
    this.temps = 0;
    // si je renvoie "stop" dans la variable value en paramètre, le compte a rebours dois s'arrêter
  }

  timer():TimerHandler {
    this.ref = setInterval(() => {
      if(this.temps >= 0 && this.state == "valider") {
        this.temps = this.temps - 1 ;
      }
    });
    if(this.temps > 0 && this.state == "stop") {
      clearInterval(this.ref);
      this.ref = undefined;
    }
    else if(this.temps == 0 && this.state == "valider") {
      this.state = "stop";
      this.ref = undefined;
    }
    else {
      return
    }
  }
}
