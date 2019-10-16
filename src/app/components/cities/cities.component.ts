import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/city.model';


@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {  
  public cities: Ciudad[];
  public newCity: Ciudad;
  constructor() { 
    this.cities = [];
    this.newCity = new Ciudad("", 0, "")
  }

  addCity(name, weather, temp){
    this.newCity = new Ciudad(name, temp, weather);
    this.cities.push(this.newCity);
    console.table(this.cities);
    console.log(this);
  }

  ngOnInit() {
  }

  
}


