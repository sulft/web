import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  key:string = "7784ea3c5d5b09fe672b1f98a52cafca";
  query?:string;

  weatherUrl:string = `http://api.weatherstack.com/current?access_key=d258e8fbe75657c085181b82721a45a9&query=New York`;// URL to web api
  

  constructor(
    private http: HttpClient,
  ) { }

    setQuery(query: string) : void {
      this.query = query; 
    }

    getWeather() : Observable<any> {
      //récupération de la météo en fonction de paramètre récupéré
      console.log("test");
      //return this.http.get<any>(this.weatherUrl + `${this.key}&query=${this.query}`);
      return this.http.get<any>(this.weatherUrl);

    }
}
