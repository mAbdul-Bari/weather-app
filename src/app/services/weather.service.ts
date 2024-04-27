
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../app.component';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('location', cityName)
      .set('format', 'json')
      .set('u','c')
    })
  }
}
