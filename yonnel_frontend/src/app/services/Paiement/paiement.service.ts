import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {


  constructor(private httpClient:HttpClient) {  }
  url='http://localhost:3000/paiement/'


  createPaiement(date:Date,numPiece: number,typePiece: any,TransactionId:any){
    console.log(date,TransactionId)
    return this.httpClient
     .post<any>(this.url,{
      "date":date,"numPiece":numPiece,
      "typePiece":typePiece,"TransactionId":TransactionId
    })
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }
}
