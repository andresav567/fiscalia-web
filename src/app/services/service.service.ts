import { Injectable } from '@angular/core';
import { City } from 'src/app/model/city'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080/fiscal/';

  getCiudades(): Observable<City> {
    return this.http.get<City>(this.apiURL + "cities")
  }
}
