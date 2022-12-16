import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

import { SignInComponent } from 'src/app/views/Auth/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  url='http://localhost:3000/'



  

  decodeToken(token:string):any{
    try{
      return jwt_decode(token)
    }
    catch(error){
      return null;
    }
  }

  signIn(login: string, password: string){
    console.log(this.url+'signIn');
    return this.httpClient.post<any>(this.url+'signIn',{
      'login':login, 
      'password':password})
     .pipe(
       map((userData: any )=>{
        const token=userData.token as string;
        const tokenInfo = this.decodeToken(token) ;
        
        console.log(tokenInfo.status)
        sessionStorage.setItem('token', tokenInfo)
        sessionStorage.setItem('login', tokenInfo.login)
        sessionStorage.setItem('id', tokenInfo.id)
        sessionStorage.setItem('status', tokenInfo.status)
        return userData

       }),

      )
  }
  isLoggedIn(){
    let user= sessionStorage.getItem('token');
    return!(user === null);
  }

  register(login: string, password: string){
    return this.httpClient
    .post<any>(this.url+'register',{login,password})
    .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }

  logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('status');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');

  }

}
