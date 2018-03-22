import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
@Injectable()

export class WeatherService {


  constructor(private _http: Http) { }

getWeather(city, callback) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5812e9928b5d144b23ca8abb475b7ec3`).subscribe(
      (response) => {
        callback(response.json());
        console.log(response.json());
      },
      // callback => errors
      (errors) => {
        console.log(errors);
       }
      );
  }

}
