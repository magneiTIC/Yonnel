import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Devise } from 'src/app/model/Devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(
    private httpClient:HttpClient,
    ) { }
  url='http://localhost:3000/devise/'



  createDevise(codeISO3:number,nom: string,symbole: string){
    return this.httpClient
     .post<any>(this.url+'',{codeISO3,nom,symbole})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }

  getAllDevise(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
                     map((userData: any )=>{
         return userData
        })
 
       )
  }
  // getDeviseByid(id:number){
  //   return this.httpClient
  //     .get<any>(this.url+'/:'+id)
  //     .pipe(
  //       map((userData: any )=>{
  //        return userData
  //       })
 
  //      )
  // }
  // UpdateDevise(id:number,code:number,nom: string,symbole: string){
  //   return this.httpClient
  //    .put<any>(this.url+'/:'+id,{code,nom,symbole})
  //    .pipe(
  //     map((userData: any )=>{
  //      return userData
  //     })

  //    )
  // }
}
