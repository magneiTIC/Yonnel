import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

import { SignInComponent } from 'src/app/views/Auth/sign-in/sign-in.component';
import { SousAgenceService } from '../SousAgence/sous-agence.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data:any

  constructor(
    private httpClient:HttpClient,
    private sousAgenceService: SousAgenceService,
    ) { }
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
        const idSousAgence=userData.user.SousAgenceId
        const tokenInfo = this.decodeToken(token) ;     
        this.sousAgenceService.getSousAgenceByid(idSousAgence).subscribe(
          data => {
            this.data=data
            sessionStorage.setItem('balance',data.Agence.balance)
          },
          err=>{console.log(err)}
        )
        console.log(this.data),

        console.log(idSousAgence)
        sessionStorage.setItem('token', tokenInfo)
        sessionStorage.setItem('login', tokenInfo.login)
        sessionStorage.setItem('id', tokenInfo.id)
        sessionStorage.setItem('status', tokenInfo.status)
        sessionStorage.setItem('idSousAgence',idSousAgence)
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
    sessionStorage.removeItem('idSousAgence');
  }

}
