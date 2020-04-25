import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Covid19APIService {
  private readonly apiBaseURL: string = environment.apiBaseURL;
  private url;
  constructor(private http: HttpClient) { }

  getResponse() {
    this.url = this.apiBaseURL.concat('/summary');
    return this.http.get(this.url)
      .toPromise().then(data => {
        console.log(data);
      });
  }
}
