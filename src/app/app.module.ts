import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { YearCompComponent } from './year-comp/year-comp.component';
import { SearchComponent } from './country-details/search/search.component';
import { SearchCardsComponent } from './country-details/search/search-cards/search-cards.component';
import { TwEffectComponent } from './home/tw-effect/tw-effect.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    CountryDetailsComponent,
    YearCompComponent,
    SearchComponent,
    SearchCardsComponent,
    TwEffectComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
