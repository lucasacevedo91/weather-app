import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

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
    public _cityService: CityService
  ) { 

  }

  ngOnInit() {
    this._cityService.getWeather();
    (response: any) => {
      console.log(response);
    }
  }

}
