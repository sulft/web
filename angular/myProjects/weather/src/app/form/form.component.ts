import { Component } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  constructor(
    private service: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  cities:string[] = ["Paris","New York","Rome"]
  myCity:string = "";

  onSubmit() {
    this.service.setQuery(this.myCity);
    this.router.navigate(['detail']);
  }
}
