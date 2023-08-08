import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_key } from 'src/app/environments/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = API_key

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&APPID=${this.apiKey}`, {})
  }
}
