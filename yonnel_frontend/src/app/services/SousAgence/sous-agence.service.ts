import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SousAgenceService {

 
  constructor(
    private httpClient:HttpClient    ) { }
  url='http://localhost:3000/sousAgence/'


  createSousAgence(AgenceId:number,nom: string,pays: string,adresse:string,ville:string,){
    console.log(AgenceId,nom,pays,adresse,ville)
    return this.httpClient
     .post<any>(this.url+'',{
      "AgenceId":nom,
        "nom":AgenceId,
        "adresse":adresse,
        "ville":ville,
        "pays":pays,
      })
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }
  getAllSousAgence(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  getSousAgenceByid(id:number){
    return this.httpClient
      .get<any>(this.url+id)
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }


}
