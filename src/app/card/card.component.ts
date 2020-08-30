import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @ViewChild('f1',{static:true}) f1 : ElementRef;
  @ViewChild('f2',{static:true}) f2 : ElementRef;
  @Input('input1') data :{countryName : string, averageRating : number};
  @Input('z1') z1 : number =1;
  @Input('z2') z2 : number =0;
  stars=[];
  constructor(private router1 : Router,
    private route1 : ActivatedRoute) { }

  ngOnInit(){
      let t=this.data.averageRating;
      while(t--){
        this.stars.push('s');
      }
    
  }
  over(){
    this.f1.nativeElement.classList.add('new1');
    this.f2.nativeElement.classList.add('new2');
  }
  leave(){
    this.f1.nativeElement.classList.remove('new1');
    this.f2.nativeElement.classList.remove('new2');
  }
  onClick(){
    this.router1.navigate([this.data.countryName,'details'],{relativeTo : this.route1});
  }

}
