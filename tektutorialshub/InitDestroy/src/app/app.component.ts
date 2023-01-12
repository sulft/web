import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'InitDestroy';
  showing = false;

  constructor() {
    console.log("initialisation constructeur parent");
  }

  ngOnInit(): void {
    console.log("initialisation OnInit parent");
  }

  ngOnDestroy(): void {
    console.log("initialisation OnDestroy parent");
  }

  show(){
    this.showing = !this.showing;
  } 
}
