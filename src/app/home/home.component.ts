import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DataServicesService } from '../data-services.service';
import { Structure } from '../structure.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data : Structure[];
  constructor(private dataService1 : DataServicesService) { }
  newArray3:{averageRating : number,countryName :string}[]=[];

  ngOnInit(): void {
  //   this.Subscription1=this.dataService1.fetchData().pipe(
  //     tap(data=>{
  //       console.log(data);
          
  //         console.log(this.newArray3);
  //     })
  // ).subscribe();

      this.data=this.dataService1.getArray();
      this.data.forEach(da=>{
        let f=0;
        this.newArray3.forEach(data1=>{
          if(data1.countryName===da.Country){
            f=1;
            return;
          }
        })
        if(f==0){
          let count=0,starAverage=0;
          this.data.forEach(da1=>{
            if(da1.Country==da.Country){
              if(!isNaN(da1.Stars)){
                starAverage +=da1.Stars;
                count++;
              }
            }
          })
          let temp1;
          if(count>0){
            temp1=Math.trunc(starAverage/count);
          }else{
            temp1=0;
          }
          this.newArray3.push({averageRating : temp1,countryName : da.Country});
        }
    })

  }

}
