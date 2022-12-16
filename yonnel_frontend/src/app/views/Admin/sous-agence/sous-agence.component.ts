import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgenceService } from 'src/app/services/Agence/agence.service';
import { PaysService } from 'src/app/services/Pays/pays.service';
import { SousAgenceService } from 'src/app/services/SousAgence/sous-agence.service';


@Component({
  selector: 'app-sous-agence',
  templateUrl: './sous-agence.component.html',
  styleUrls: ['./sous-agence.component.css']
})
export class SousAgenceComponent implements OnInit {
  sousAgenceForm!: FormGroup
  agences!:any
  Ppays!:any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AgenceService: AgenceService,
    private PaysService: PaysService,
    private SousAgenceService: SousAgenceService,
  ) { }

  ngOnInit(): void {
    
    this.Ppays=this.PaysService.getAllPays().subscribe(data=>{
      this.Ppays=data;
      console.log(this.Ppays)
      })
    this.AgenceService.getAllAgence().subscribe(data=>{
      this.agences=data;
      console.log(this.agences)
      })
      

    this.sousAgenceForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      AgenceId: ['', [Validators.required]],
    })
  }
  onSubmitSousAgence() {
    console.log('coucou')
    if (this.sousAgenceForm.invalid) {
      return console.log('invalid');
    } else {
      console.log('bonjr')
      this.SousAgenceService.createSousAgence(
          this.sousAgenceForm.value.nom, this.sousAgenceForm.value.AgenceId,
          this.sousAgenceForm.value.pays, this.sousAgenceForm.value.adresse,
          this.sousAgenceForm.value.ville
          ).subscribe(
        result => {
          console.log(result)
          this.router.navigate(['/admin/dashboard'])
        }
      )
    }
  }


}
