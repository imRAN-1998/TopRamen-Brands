import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, transition, useAnimation, animateChild } from '@angular/animations';
import { jackInTheBox, zoomOut} from 'ng-animate';


import { DataServicesService } from '../data-services.service';
import { Structure } from '../structure.model';
// import { countryAnimations } from './country-animations';

export interface TopTenStructure{
  structure1 : Structure,
  year : number,
  rank : number
}

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
  animations:[
    // countryAnimations,
    trigger('bounce', [transition('* <=> *', [useAnimation(jackInTheBox), animateChild()])]),
  ]
})
export class CountryDetailsComponent implements OnInit,OnDestroy {

  bounce :any;
  constructor(private route1 : ActivatedRoute,
    private router1 : Router,
    private dataService1 : DataServicesService) { }

    Subscription1 : Subscription;
    countryArray: Structure[]=[];
    RankingArray: TopTenStructure[]=[];
    mainCountry : string;
    yearArray : number[]=[];
    yearValue : number;
  ngOnInit(): void {
    this.Subscription1=this.route1.params.subscribe((params : Params)=>{
      this.mainCountry =params['country'];
      // console.log(this.mainCountry);
      const newArray1=this.dataService1.getArray();
      newArray1.forEach(data=>{
        if(data.Country===this.mainCountry){
          this.countryArray.push(data);
        }
      })
      // console.log(this.countryArray);
      this.countryArray.forEach(a=>{
        if(a["Top Ten"]==='NaN'){
          // console.log(a);
          this.RankingArray.push({
            structure1 : a,
            year : -1,
            rank : -1
          })
        }else{
          const temp11=a["Top Ten"];
          const year = +temp11.substring(0,4);
          const rank= +temp11.substring(6,temp11.length);
          this.RankingArray.push({
            structure1 :a,
            year : year,
            rank : rank
          })
        }
      })
      
      this.RankingArray.sort(function(a,b){
        if(a.year < b.year){
          return 1;
        }else if(a.year > b.year){
          return -1;
        }else if(a.year === b.year){
          if(a.rank > b.rank){
            return 1;
          }else{
            return -1;
          }
        }
      })
      localStorage.setItem('country',JSON.stringify(this.RankingArray));
      this.RankingArray.forEach(rA=>{
        let f=0;
        this.yearArray.forEach(yA=>{
          if(yA===rA.year){
            f=1;
            return;
          }
        })
        if(f==0){
          this.yearArray.push(rA.year);
        }
      })
      this.yearValue=this.yearArray[0];
      // console.log(this.yearArray);
      // console.log(this.RankingArray);
    })
  }
  ngOnDestroy(){
    if(this.Subscription1){
      this.Subscription1.unsubscribe();
    }
    this.countryArray=[];
    localStorage.clear();
 }
 onClick(year : number){
   this.yearValue=year;
  }
  navTo(){
     this.router1.navigate(['search'],{relativeTo :this.route1});
   
 }

}
