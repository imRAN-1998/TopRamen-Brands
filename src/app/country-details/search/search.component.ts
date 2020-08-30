import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, animateChild, query, style, stagger, animate } from '@angular/animations';
import { lightSpeedIn } from 'ng-animate';

import { TopTenStructure } from '../country-details.component';
// import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations:[
    // countryAnimations,
    trigger('bounce', [transition('* <=> *', [
      // query('@lists', [
      //   animateChild()
      // ]),
      useAnimation(lightSpeedIn,{
      params : {
        timing : 0.5,
        // delay : 2
      }
    }), 
    // animateChild()
  ])]),
  ]
})
export class SearchComponent implements OnInit {
  change1:boolean=true;
  constructor() { }
  newArray : TopTenStructure[]= [];
  searchedArray : {struct1 : TopTenStructure, starsArray : String[]}[]=[];
  ngOnInit(): void {
    let country;
    this.newArray=JSON.parse(localStorage.getItem('country'));
    // console.log(this.newArray);    
  }
  func1(search : HTMLInputElement){
    this.searchedArray=[];
    // console.log(search);
    this.newArray.forEach(data=>{
      const temp1= data.structure1.Brand.toLowerCase();
      if(temp1.indexOf(search.value.toLowerCase()) != -1 && search.value != ''){
          const p=[];
          let c=data.structure1.Stars;
          while(c--){
            p.push('s');
          }
        this.searchedArray.push({struct1 : data, starsArray : p});
      }
    })
    this.change1=false;
    setTimeout(()=>{
      this.change1=true;
    },100)
  }
  
  

}
