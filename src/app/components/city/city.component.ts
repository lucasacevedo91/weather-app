import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  public cityName: String;
  public cityWeather: String;
  public cityTemperature: Number;
  constructor(
    public name: String,
    public temp: Number,
    public weather: String
    ) { 
      this.cityName = name;
      this.cityTemperature = temp;
      this.cityWeather = weather;
  }

  ngOnInit() {
    
  }

  addCity(name, temp, weather){
    this.cityName = name;
    this.cityTemperature = temp;
    this.cityWeather = weather;
  }
}
