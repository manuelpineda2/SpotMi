import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DistrictsModel, RestaurantsModel} from '../models/districts.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  constructor(private http: HttpClient) { }

  getDistricts() {
    return this.http.get<DistrictsModel[]>('https://my-json-server.typicode.com/manuelpineda2/spotdistrict/Districts');
  }
  getRestaurants() {
    return this.http.get<RestaurantsModel[]>('https://api.myjson.com/bins/11tphy');
  }
}
