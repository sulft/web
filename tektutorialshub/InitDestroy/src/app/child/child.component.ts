import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  constructor() {
    console.log("initialisation constructeur child");
  }

  ngOnInit(): void {
    console.log("initialisation OnInit child");
  }

  ngOnDestroy(): void {
    console.log("initialisation OnDestroy child");
  }
}
