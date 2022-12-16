import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    if(sessionStorage.getItem('token')){
      request=request.clone({
        setHeaders:{
          'Authorization': `${sessionStorage.getItem("token")}`,
        }
      })
    }
    return next.handle(request);
  }
}
