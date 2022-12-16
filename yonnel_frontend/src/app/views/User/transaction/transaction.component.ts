import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';
import { PaysService } from 'src/app/services/Pays/pays.service';


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


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private transactionService: TransactionService,
    private PaysService: PaysService,
  ) { }

  ngOnInit(): void {
    this.userEmetteur=sessionStorage.getItem("login");
    this.statut='transmitted'
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
     
      this.transactionService.createTransaction(
        this.transactionForm.value.telEmetteur, 
        this.transactionForm.value.telRecepteur,
        this.userEmetteur,
        this.transactionForm.value.paysDest,
        this.transactionForm.value.paysOri,
        this.frais, 
        this.transactionForm.value.montantRec, 
        this.transactionForm.value.date,
        this.statut, 
      ).subscribe(
        result => {
          console.log(result)
          
          this.router.navigate(['/liste-transaction'])
        }
      )
    }

  }


}
