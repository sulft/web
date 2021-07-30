import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minuteur',
  templateUrl: './minuteur.component.html',
  styleUrls: ['./minuteur.component.css']
})
export class MinuteurComponent implements OnInit {

  temps:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
