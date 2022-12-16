  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  
  constructor(
    private httpClient:HttpClient
        ) { }
  url='http://localhost:3000/agence/'


  createAgence(nom: string,statut: string,balance:number){
    return this.httpClient
     .post<any>(this.url,{"nom":nom,"statut":statut,"balance":balance})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }
  ajoutBalance(id:number,balance:number){
    return this.httpClient
     .put<any>(this.url+'/'+id,{"balance":balance})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }
 diminutionBalance(id:number,balance:number){
    return this.httpClient
     .put<any>(this.url+'/'+id,{"balance":balance})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }

  getAllAgence(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  getAgenceByid(id:number){
    return this.httpClient
      .get<any>(this.url+'/:'+id)
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  
}
