import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CityService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = 'https://www.smn.gob.ar';
    }
    
    getWeather(): Observable<any>{
        return this._http.get(this.url + "/map_items/weather");
    }
}
