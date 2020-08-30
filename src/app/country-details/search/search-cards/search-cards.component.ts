import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, animateChild } from '@angular/animations';
import { TopTenStructure } from '../../country-details.component';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.css'],
  animations:[
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
export class SearchCardsComponent implements OnInit {
  @Input('input1') searchedArray : {struct1 : TopTenStructure, starsArray : String[]}[]=[];
  constructor() { }
  newArray :  {struct1 : TopTenStructure, starsArray : String[]}[] =[];

  ngOnInit(): void {
    this.searchedArray.forEach(data=>{
      this.newArray.push(data);
    })
    // console.log(this.newArray);
  }

  
}
