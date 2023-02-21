import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styles: [
  ]
})
export class WeatherDetailComponent {
  constructor(private _Activatedroute:ActivatedRoute) {}
  
}
