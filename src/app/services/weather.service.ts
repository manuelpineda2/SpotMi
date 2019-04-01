import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: any;

  constructor(private http: HttpClient) {
    this.url = 'http://api.apixu.com/v1/current.json?key=418be1917a8c4216b0740648180711&q=';
  }

  getWeather(location) {
    return this.http.get(this.url + location + ',Belize');
  }
}
