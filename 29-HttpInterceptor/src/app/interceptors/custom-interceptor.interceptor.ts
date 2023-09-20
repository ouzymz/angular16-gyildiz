import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercepted request ... ');
    //Request manipule edildi.
    const newRequest = request.clone({setHeaders: {'uthorization': 'Basic ' },body:{key1:'value1'}});

    return next.handle(newRequest);
  }
}
