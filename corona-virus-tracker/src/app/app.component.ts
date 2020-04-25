import { Component } from '@angular/core';
import { Covid19APIService } from 'services/covid19-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-virus-tracker';
  constructor(private covid19API: Covid19APIService) {  
    this.covid19API.getResponse();
  };   
}
