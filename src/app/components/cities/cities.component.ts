import { Component, OnInit } from '@angular/core';
import { CityComponent } from '../city/city.component'

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {  
  public city: CityComponent;
  constructor() { }

  ngOnInit() {

  }

}


