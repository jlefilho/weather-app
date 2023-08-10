import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/weatherData';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent {
  @Input() weatherData: WeatherData | undefined

  minTempIcon = faTemperatureLow
  maxTempIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
}
