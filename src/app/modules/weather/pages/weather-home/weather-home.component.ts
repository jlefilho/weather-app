import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/weatherData';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  cityName = 'Porto Alegre'
  weatherData: WeatherData | undefined;
  private readonly destroy$: Subject<void> = new Subject()
  searchIcon = faMagnifyingGlass

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getWeatherData(cityName: string):void{
    this.weatherService.getWeatherData(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          response && (this.weatherData = response)
        },
        error: error => console.log(error)
      })
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
}
