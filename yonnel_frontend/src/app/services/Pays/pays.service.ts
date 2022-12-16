import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Pays } from 'src/app/model/Pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {


  constructor(
    private httpClient:HttpClient,
    ) { }
  url='http://localhost:3000/pays/'



  createPays(codeISO1:any,nom: String,DeviseID:any){
    console.log(codeISO1,nom,DeviseID)
    return this.httpClient
     .post<any>(this.url+'',{"codeISO1":codeISO1,"nom":nom,"DeviseId":DeviseID})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }

  getAllPays(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  
  }
}
