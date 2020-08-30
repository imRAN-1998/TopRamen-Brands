import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { LoadingResolverService } from './loading-resolver.service';
import { YearCompComponent } from './year-comp/year-comp.component';
import { SearchComponent } from './country-details/search/search.component';

const routes: Routes = [
  {path:'',component : HomeComponent,resolve:[LoadingResolverService]},
  {path : ':country/details',component : CountryDetailsComponent,resolve:[LoadingResolverService],children:[
    {path: 'search', component : SearchComponent}
  ]},
  {path : '**' , redirectTo : '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
