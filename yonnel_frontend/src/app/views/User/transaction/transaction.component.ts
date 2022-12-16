import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';
import { PaysService } from 'src/app/services/Pays/pays.service';
import { SousAgenceService } from 'src/app/services/SousAgence/sous-agence.service'; 
import { AgenceService } from 'src/app/services/Agence/agence.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  pays!: any
  transactionForm!: FormGroup;
  frais!: any
  userEmetteur: any
  statut!: any;
  login!: any
  idTransaction!:any
  idAgence!:any
  idSousAgence!: any
  balance!: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private transactionService: TransactionService,
    private sousAgenceService:SousAgenceService,
    private agenceService: AgenceService,
    private PaysService: PaysService,
  ) { }

  ngOnInit(): void {
    this.userEmetteur=sessionStorage.getItem("login");
    this.idSousAgence=sessionStorage.getItem("idSousAgence");
    this.statut='transmitted'
    this.idAgence=this.sousAgenceService.getSousAgenceByid(this.idSousAgence).subscribe(data => {
      this.idAgence = data.IdAgence;
      console.log(this.idAgence)
    })
    this.PaysService.getAllPays().subscribe(data => {
      this.pays = data;
      console.log(this.pays)
    })

    this.transactionForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      telEmetteur: ['', [Validators.required]],
      telRecepteur: ['', [Validators.required]],
      paysOri: ['', [Validators.required]],
      paysDest: ['', [Validators.required]],
      montantRec: ['', [Validators.required]],
    }
    )
  }
  onSubmi1(){
    console.log(this.idSousAgence,this.idSousAgence)
  }

  onSubmit() {
    console.log('coucou')

    if (this.transactionForm.invalid) {
      return console.log('invalid');
    } else {
      console.log('bonjr')
      console.log(this.transactionForm.value.telEmetteur)
      if (this.transactionForm.value.paysOri == this.transactionForm.value.paysDest) {
        this.frais = 0.1 * this.transactionForm.value.montantRec
      }
      else {
        this.frais = 0.5 * this.transactionForm.value.montantRec
      }
      this.balance=this.frais+this.transactionForm.value.montantRec

      this.transactionService.createTransaction(
        this.transactionForm.value.telEmetteur, 
        this.transactionForm.value.telRecepteur,
        this.userEmetteur,
        this.transactionForm.value.paysDest,
        this.transactionForm.value.paysOri,
        this.frais, 
        this.transactionForm.value.montantRec, 
        this.transactionForm.value.date,
        this.statut
      ).subscribe(
        result => {
          console.log(result)

          this.agenceService.ajoutBalance(this.idAgence,this.balance)

          this.idTransaction=result.transaction.id
          console.log(this.idTransaction)
          setTimeout(()=>{
            this.transactionService.UpdateTransaction(this.idTransaction).subscribe(
              result =>{
                console.log(result)
              this.router.navigate(['/liste-transaction'])

              },
              err=>{console.log(err)}
            )
          },400)

          // his.router.navigate(['/liste-transaction'])
        },
        err=>{
          console.log(err)
        }
      )
    }

  }


}
