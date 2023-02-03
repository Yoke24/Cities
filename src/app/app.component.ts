import { Component } from '@angular/core';
import { AppService } from './appService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cities';
  citiesData: any;

  constructor(public appService: AppService) {
    this.getCities();
  }

  getCities() {
    this.appService.getCitiesData().subscribe((data: any) => {
      console.log(data, 'data');
      this.citiesData = data;
    });
  }
}
