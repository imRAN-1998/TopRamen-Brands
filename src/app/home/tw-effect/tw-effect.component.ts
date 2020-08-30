import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tw-effect',
  templateUrl: './tw-effect.component.html',
  styleUrls: ['./tw-effect.component.css']
})
export class TwEffectComponent implements OnInit {

  constructor() { }

  @ViewChild('para1') para : ElementRef;
  @Input('input1') text : string;
  @Input('input2') number : string;
  @Input('input3') typeSpeed : string;
  sT;

  ngOnInit(): void {
    this.typeEffect(this.text);
  }
  typeEffect(post1 : string){
    const p= post1.split('');
    const len=p.length;
    let i=0;
    setTimeout(() => {
      this.sT=setInterval(()=>{
        let x=post1.substring(0,i);
        this.para.nativeElement.textContent=x;
        i++;
        if(i==len+1){
          clearInterval(this.sT);
        }
        // console.log(x);
      },+this.typeSpeed);
    }, +this.number);
  }

}
