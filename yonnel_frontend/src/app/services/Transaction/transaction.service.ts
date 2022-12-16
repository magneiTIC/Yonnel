import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Devise } from 'src/app/model/Devise';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  static getAllTransaction() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private httpClient: HttpClient
  ) { }
  url = 'http://localhost:3000/transaction'



  createTransaction(
    telEmetteur: number, 
    telRecepteur: number, 
    userEmetteur: string,
    paysDest: string, 
    paysOri: string, 
    frais: number,
    montantRec: number,
    date: Date, 
    statut: string, 
  ) {
    console.log(telEmetteur,telRecepteur,userEmetteur,paysDest, paysOri,frais,montantRec,date,statut)
    return this.httpClient
      .post<any>(this.url , 
        {
          "tel1": telEmetteur,
          "tel2": telRecepteur,
          "login": userEmetteur,
          "pays2": paysDest,
          "pays1": paysOri, 
          "frais": frais,
          "montantRec": montantRec, 
          "date": date,
          "statut": statut,
      })
      .pipe(
        map((userData: any) => {
          return userData
        })

      )
  }

  getAllTransaction() {
    return this.httpClient
      .get<any>(this.url + '')
      .pipe(
        map((userData: any) => {
          return userData
        })

      )
  }
  getTransactionByid(id: number) {
    return this.httpClient
      .get<any>(this.url + '/:' + id)
      .pipe(
        map((userData: any) => {
          return userData
        })

      )
  }
  UpdateTransaction(
    id: number,
    deviseOri: Devise,
    deviseDest: Devise,
    statut: string,
    frais: number,
    montantRec: number,
    ClientEmetteur: any,
    clientRecepteur: any,
    paiement: any,
    userEmetteur: any,
    ) {
    return this.httpClient
      .put<any>(this.url + '/:' + id, {
        deviseOri,
        deviseDest,
        statut,
        frais,
        montantRec,
        ClientEmetteur,
        clientRecepteur,
        paiement,
        userEmetteur,
      })
      .pipe(
        map((userData: any) => {
          return userData
        })
      )
  }


}




