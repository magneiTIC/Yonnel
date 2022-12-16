import { Component, OnInit } from '@angular/core';

import { TransactionService } from 'src/app/services/Transaction/transaction.service';

@Component({
  selector: 'app-liste-transaction',
  templateUrl: './liste-transaction.component.html',
  styleUrls: ['./liste-transaction.component.css']
})
export class ListeTransactionComponent implements OnInit {
   transactions:any


constructor(
  private transactionsService:TransactionService,
  

){}

  ngOnInit(): void {

    this.transactionsService.getAllTransaction().subscribe(data=>{
      this. transactions=data;
      console.log(this.transactions)
      })
  }

}
