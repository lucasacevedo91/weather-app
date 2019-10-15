import { Component, OnInit } from '@angular/core';
import { CityComponent } from '../city/city.component';
import { Ciudad } from '../../models/newCity.model';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {  
  public cities: Array<Ciudad>;
  public newCity: any;
  constructor() { 
    this.cities = [];
  }

  addCity(name, weather, temp){
    this.newCity = new CityComponent(name, temp, weather);
    this.cities.push(this.newCity);
    console.log(this.cities);
  }

  ngOnInit() {
  }

}


