import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient
    ) { }
url='http://localhost:3000/users/'

  getAllUser(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
}
