import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { CityComponent } from './components/city/city.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityService } from './services/city.service';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    CityComponent,
    CitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
