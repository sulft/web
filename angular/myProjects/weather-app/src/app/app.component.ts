import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weather } from './weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  selectedValue: string;

  constructor(private _router: Router,
    private weatherService:WeatherService) {}

  cities: Weather[];

  ngOnInit() {
    this.cities = this.weatherService.listOfWeather();
  }

  navigate() {
    this._router.navigate(['weather', this.selectedValue]);
  }
}
