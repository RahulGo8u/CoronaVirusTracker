import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalCasesListComponent } from './global-cases-list/global-cases-list.component';
import { Covid19APIService } from '../../services/covid19-api.service';
import { CountriesListComponent } from './countries-list/countries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalCasesListComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Covid19APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
