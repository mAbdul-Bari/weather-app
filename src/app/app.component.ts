import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Weather_app';

  constructor(private weatherService: WeatherService) {

  }

  cityName : string = 'Pune';
  weatherData?: WeatherData

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
private getWeatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
  .subscribe({
    next: (response) => {
      this.weatherData = response;
      
      console.log(response);
    }
  });
}
 
}

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://yahoo-weather5.p.rapidapi.com/weather',
  XRapidAPIHostLabel: 'X-RapidAPI-Host',
  XRapidAPIHostValue: 'yahoo-weather5.p.rapidapi.com',
  XRapidAPIKeyLabel: 'X-RapidAPI-Key',
  XRapidAPIKeyValue: '8c000baademsh48ff5da7c8cdc08p1bc249jsn510c56c856a8'
}