import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  data:any;

  ngOnInit(): void {
    this.service.getWeather().subscribe(res => console.log(res));
  }

  constructor(
    private service: WeatherService
  ) {}

 
}
