import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-minuteur',
  templateUrl: './minuteur.component.html',
  styleUrls: ['./minuteur.component.css']
})
export class MinuteurComponent implements OnInit {

  temps: number;
  seconde: number;
  state: string;
  validate: boolean = false;
  ref: any;

  constructor() { }

  ngOnInit(): void {
    this.temps = 0;
  }

  validation(value:number):void {
    this.validate = !this.validate;
    if(this.validate == true) {
      this.temps = value;
      this.timer();
    }
  }

  isStopped(value:string) {
    console.log(value)
    // si je renvoie "stop" dans la variable value en paramètre, le compte a rebours dois s'arrêter
  }

  timer() {
    this.ref = setInterval(() => {
      if(this.temps > 0) {
        this.temps =  this.temps - 1 ;
      }
      else {
        clearInterval(this.ref);
      }

    }, 1000);

  }
}
