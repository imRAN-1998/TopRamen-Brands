import { trigger, style, transition, animate, query, keyframes } from '@angular/animations';


export const countryAnimations=[
    trigger('heading',[
        transition('void => *',[
          query('h1',[style({
            opacity:0,
            transform:'translateY(-50px)'
          })]),
          query('h1',[
            animate('1000ms ease-in',keyframes([
              style({
                opacity:1,
                transform:'translateY(-50px)'
              }),
              style({
                opacity:1,
                transform:'translateY(0px)'
              }),
              style({
                opacity:1,
                transform:'translateY(-30px)'
              }),
              style({
                opacity:1,
                transform:'translateY(0px)'
              }),
              style({
                opacity:1,
                transform:'translateY(-10px)'
              }),
              style({
                opacity:1,
                transform:'translateY(0px)'
              })
            ])
            )
          ])
        ])
      ])
]