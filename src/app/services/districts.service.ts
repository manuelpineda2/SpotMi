import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DistrictsModel} from '../models/districts.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  constructor(private http: HttpClient) { }

  getDistricts() {
    return this.http.get<DistrictsModel[]>('https://my-json-server.typicode.com/manuelpineda2/spot/Districts');
  }
}
