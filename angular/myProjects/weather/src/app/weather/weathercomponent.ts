import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  /*templateUrl: './weather.component.html', */
  template:`
    <p>weather works inline</p>
  `,
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
