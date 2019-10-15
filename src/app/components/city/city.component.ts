import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(
    public name: String,
    public temp: Number,
    public weather: String
    ) { 
  }

  ngOnInit() {
    
  }

}
