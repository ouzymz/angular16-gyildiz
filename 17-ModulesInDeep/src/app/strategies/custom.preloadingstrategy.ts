import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class CustomPreloadingStrategy implements PreloadingStrategy{
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        //customers - preloading : true
        //product - preloading : false
        if(route.data && route.data['preload']==true){
            return fn();
        }
        else{
            return of(null)
        }
    }

}