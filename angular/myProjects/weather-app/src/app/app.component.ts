import { Component } from '@angular/core';
import { Weather } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  selectedValue: string;

  cities:Weather[] = [
    {name:'Paris', temp:12, weather_status:"feels sunny"},
    {name:'London', temp:12, weather_status:"feels sunny"},
    {name:'Moscow', temp:12, weather_status:"feels sunny"}
  ];
}
