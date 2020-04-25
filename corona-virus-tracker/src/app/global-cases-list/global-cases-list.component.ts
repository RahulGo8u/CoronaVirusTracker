import { Component, OnInit } from '@angular/core';
import { Covid19APIService } from '../../../services/covid19-api.service';

@Component({
  selector: 'app-global-cases-list',
  templateUrl: './global-cases-list.component.html',
  styleUrls: ['./global-cases-list.component.css']
})
export class GlobalCasesListComponent implements OnInit {
  countriesList;newConfirmed;totalConfirmed;newDeaths;totalDeaths;newRecovered;totalRecovered;currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
    this.countriesList = Covid19APIService.countriesList
    this.newConfirmed = Covid19APIService.newConfirmed
    this.totalConfirmed = Covid19APIService.totalConfirmed
    this.newDeaths = Covid19APIService.newDeaths
    this.totalDeaths = Covid19APIService.totalDeaths
    this.newRecovered = Covid19APIService.newRecovered
    this.totalRecovered = Covid19APIService.totalRecovered
  }
}
