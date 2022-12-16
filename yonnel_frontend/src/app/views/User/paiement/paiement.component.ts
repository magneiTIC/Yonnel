import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaiementService } from 'src/app/services/Paiement/paiement.service';
import { SousAgenceService } from 'src/app/services/SousAgence/sous-agence.service'; 
import { AgenceService } from 'src/app/services/Agence/agence.service';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  paiementForm!:FormGroup
  TransactionId = this.route.snapshot.paramMap.get('id');
  idAgence!:any
  idSousAgence!: any
  balance!: any
  idTransaction!:number

  constructor(
    private paiementService:PaiementService,
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private sousAgenceService:SousAgenceService,
    private agenceService: AgenceService,
    private transactionService:TransactionService
  ) { }

  ngOnInit(): void {
    if(this.TransactionId)
    this.idTransaction= parseInt(this.TransactionId)

    // this.transactionService.getTransactionByid(this.TransactionId).subscribe(data => {
    //   this.idAgence = data.IdAgence;
    //   console.log(this.idAgence)
    // })

    this.idSousAgence=sessionStorage.getItem("idSousAgence");
    this.idAgence=this.sousAgenceService.getSousAgenceByid(this.idSousAgence).subscribe(data => {
      this.idAgence = data.IdAgence;
      console.log(this.idAgence)
    })

    this.paiementForm=this.formBuilder.group({
      date: ['', [Validators.required]],
      numPiece: ['', [Validators.required]],
      typePiece: ['', [Validators.required]],
    })

  }

  onSubmitPaiement(){
    console.log(typeof this.idTransaction)
  }
  onSubmitPaiement1() {
    console.log('coucou')
    // console.log(this.TransactionId)
    if (this.paiementForm.invalid) {
      return console.log('invalid');
    } else {
      console.log('bonjr')
      this.paiementService.createPaiement(
          this.paiementForm.value.date,
          this.paiementForm.value.numPiece,
          this.paiementForm.value.typePiece,
          this.TransactionId).subscribe(
        result => {
          console.log(result)
          this.agenceService.diminutionBalance(this.idAgence,this.balance)
          this.router.navigate(['/transaction'])
        }
      )
    }
  }

}
