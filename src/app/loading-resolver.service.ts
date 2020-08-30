
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { DataServicesService } from './data-services.service';
import { Injectable } from '@angular/core';
import { Structure } from './structure.model';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class LoadingResolverService implements Resolve<Structure[]>{
    constructor(private dataServices1 : DataServicesService){}
    resolve(route1: ActivatedRouteSnapshot,
        state1 :  RouterStateSnapshot){
            const new1 =this.dataServices1.newArray;
            const temp :Structure[] =[];
            // console.log(new1);
            if(new1.length==0){
                return this.dataServices1.fetchData().pipe(
                    map(data=>{
                        return data;
                    }),
                    catchError((error : any)=>{
                       return new Observable<any>(error);
                    })
                    );
            }
    }
}