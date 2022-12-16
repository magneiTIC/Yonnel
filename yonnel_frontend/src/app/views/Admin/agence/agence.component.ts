import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgenceService } from 'src/app/services/Agence/agence.service';
import { SousAgenceService } from 'src/app/services/SousAgence/sous-agence.service';



import { Router } from '@angular/router';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  agenceForm!: FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AgenceService: AgenceService,
    private SousAgenceService: SousAgenceService,
    
   
  ) { }

  ngOnInit(): void {
    
    

    this.agenceForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      statut: ['', [Validators.required]],
      balance: ['', [Validators.required]]
    })

    
  }

  onSubmitAgence() {
    console.log('coucou')
    if (this.agenceForm.invalid) {
      return console.log('invalid');
    } else {
      console.log('bonjr')
      this.AgenceService.createAgence(
        this.agenceForm.value.nom, 
        this.agenceForm.value.statut, 
        this.agenceForm.value.balance
        ).subscribe(
        result => {
          console.log(result)
          this.router.navigate(['/transaction'])
        }
      )
    }
  }

 

  

}
