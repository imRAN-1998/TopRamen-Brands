import { Component, OnInit,  } from '@angular/core';
import { DataServicesService } from './data-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TapRamon-brands';
  constructor(private dataService1 : DataServicesService) {}
    loading:string=null;
    error: string=null;
  ngOnInit(){
    this.dataService1.loadingEffect.subscribe(data=>{
      this.loading=data;
    })
    this.dataService1.error.subscribe(error=>{
      this.error=error;
    })
  }
  
}
