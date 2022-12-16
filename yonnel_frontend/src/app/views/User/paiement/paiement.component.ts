import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaiementService } from 'src/app/services/Paiement/paiement.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  paiementForm!:FormGroup
  TransactionId = this.route.snapshot.paramMap.get('id');

  constructor(
    private paiementService:PaiementService,
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paiementForm=this.formBuilder.group({
      date: ['', [Validators.required]],
      numPiece: ['', [Validators.required]],
      typePiece: ['', [Validators.required]],
    })

  }

  onSubmitPaiement() {
    console.log('coucou')
    // console.log(this.TransactionId)
    if (this.paiementForm.invalid) {
      return console.log('invalid');
    } else {
      console.log('bonjr')
      this.paiementService.createPaiement(
          this.paiementForm.value.date, this.paiementForm.value.numPiece,
          this.paiementForm.value.typePiece,this.TransactionId).subscribe(
        result => {
          console.log(result)
          this.router.navigate(['/transaction'])
        }
      )
    }
  }

}
