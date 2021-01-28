import { Component, OnInit } from '@angular/core';
import countries from 'src/assets/json/countries.json';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {

  countryList:{name:string,code:string}[]=countries;

  constructor() { }

  ngOnInit(): void {
  }

}
