import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(
    private httpClient:HttpClient
    ) { }
  url='http://localhost:3000/client/'



  createClient(nom: string,prenom: string,tel:number,email:string,dateNaiss:Date,lieuNAiss:string){
    console.log(nom,tel,prenom,email,lieuNAiss,dateNaiss)
    return this.httpClient
     .post<any>(this.url,{
        'nom':nom,'prenom':prenom,'tel':tel,
        'email':email,'dateNaiss':dateNaiss,'lieuNAiss':lieuNAiss
    })
     .pipe(
      map((userData: any )=>{
       return userData
      })
     )
  }

  getAllClient(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  getClientByid(id:number){
    return this.httpClient
      .get<any>(this.url+'/:'+id)
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  UpdateClient(id:number,nom: string,prenom: string,tel:number,email:string){
    return this.httpClient
     .put<any>(this.url+'/:'+id,{nom:nom,prenom:prenom,tel:tel,email:email})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }
}
