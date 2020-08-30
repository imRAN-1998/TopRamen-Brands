import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, transition, useAnimation, animateChild, query, style, stagger, animate, state } from '@angular/animations';
import { jackInTheBox } from 'ng-animate';
import { ActivatedRoute, Params } from '@angular/router';

import { Structure } from '../structure.model';
import { DataServicesService } from '../data-services.service';
import { TopTenStructure } from '../country-details/country-details.component';

@Component({
  selector: 'app-year-comp',
  templateUrl: './year-comp.component.html',
  styleUrls: ['./year-comp.component.css'],
  animations:[
    // trigger('bounce', [transition('* => *', [useAnimation(jackInTheBox),
    //   animateChild()])]),
    trigger('lists',[
      transition('void => *',[
        query('.list',style({
          opacity:0,
          transform: 'translateY(-55px)'
        }),{optional:true}),
        query('.list',[
          stagger(200,[
            animate(500,style({
              opacity:1,
              transform: 'translateY(40px)'
            })),
            animate(500,style({
              opacity:1,
              transform: 'translateY(0px)'
            }))
          ])
        ],{optional:true}),
        animateChild()

      ])
    ]),
    
  ]
})
export class YearCompComponent implements OnInit ,OnDestroy{

  @Input('input1') year : number;
  @Input('input3') rankingArray : TopTenStructure[];
  bounce :any
  constructor(private dataService1 : DataServicesService,
    private route1 : ActivatedRoute) { }
  newArray : {struct1 : TopTenStructure, starsArray : String[]}[]=[];

  ngOnInit(): void {
    // this.newArray=this.dataS
    // this.route1.params.subscribe((params : Params)=>{
    //   console.log(this.newArray);
    // })
    // console.log(this.rankingArray);
      this.rankingArray.forEach(rA=>{
        if(rA.year==this.year){
          const p=[];
          let c=rA.structure1.Stars;
          while(c--){
            p.push('s');
          }
          this.newArray.push({struct1 : rA, starsArray : p});
        }
      })
      // console.log(this.newArray);
  }
  ngOnDestroy(){
  }

}
