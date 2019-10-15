import { Component, OnInit } from '@angular/core';
import { CityComponent } from '../city/city.component';
import { CityModel } from '../../models/newCity.model';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {  
  public cities: CityComponent[];
  public newCity: any;
  public newName: String;
  public newWeather: String;
  public newTemp: Number;
  constructor() { 
    this.cities = []
  }

  addCity(newName, newWeather, newTemp){
    this.newName = newName;
    this.newWeather = newWeather;
    this.newTemp = newTemp;
  }

  ngOnInit() {

  }

}


