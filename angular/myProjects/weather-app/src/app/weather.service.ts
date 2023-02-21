import { Injectable } from '@angular/core';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  weathers:Weather[] = [
    { name: 'Paris', temp: 12, weather_status: 'feels sunny' },
    { name: 'London', temp: 12, weather_status: 'feels sunny' },
    { name: 'Moscow', temp: 12, weather_status: 'feels sunny' },
  ]

  listOfWeather() {
    return this.weathers;
  }
}
