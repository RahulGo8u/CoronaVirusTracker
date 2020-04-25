import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Covid19APIService {
  private readonly apiBaseURL: string = environment.apiBaseURL;
  private apiSummaryURL;
  static countriesList;static newConfirmed; static totalConfirmed; static newDeaths; static totalDeaths; static newRecovered; static totalRecovered;
  constructor(private http: HttpClient) { }

  getResponse() {
    this.apiSummaryURL = this.apiBaseURL.concat('/summary');
    return this.http.get(this.apiSummaryURL)
      .toPromise().then(data =>
      {
        console.log(data);
        Covid19APIService.countriesList = data['Countries'].map(res => res.Country);
        Covid19APIService.newConfirmed = data['Global'].NewConfirmed;
        Covid19APIService.totalConfirmed = data['Global'].TotalConfirmed;
        Covid19APIService.newDeaths = data['Global'].NewDeaths;
        Covid19APIService.totalDeaths = data['Global'].TotalDeaths;
        Covid19APIService.newRecovered = data['Global'].NewRecovered;
        Covid19APIService.totalRecovered = data['Global'].TotalRecovered;        
        console.log(Covid19APIService.countriesList);
        console.log(Covid19APIService.newConfirmed);
        console.log(Covid19APIService.totalConfirmed);
        console.log(Covid19APIService.newDeaths);
        console.log(Covid19APIService.totalDeaths);
        console.log(Covid19APIService.newRecovered);
        console.log(Covid19APIService.totalRecovered);
      });
  }
}
