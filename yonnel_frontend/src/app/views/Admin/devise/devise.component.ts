import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/app/services/Pays/pays.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviseService } from 'src/app/services/Devise/devise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent implements OnInit {
  paysForm!: FormGroup
  deviseForm!: FormGroup
  devises!:any

  constructor(
    private DeviseService: DeviseService,
    private PaysService: PaysService,
    private formBuilder: FormBuilder,
    private router: Router,

  ) { }
  

  ngOnInit(): void {

  

    this.deviseForm = this.formBuilder.group({
      codeISO3: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      symbole: ['', [Validators.required]],
    })

   
  }

  onSubmitDevise() {
    console.log('coucou')
    if (this.deviseForm.invalid) {
      return console.log('invalid');
    } else {
      console.log('bonjr')
      this.DeviseService.createDevise(
        this.deviseForm.value.codeISO3, 
        this.deviseForm.value.nom,
        this.deviseForm.value.symbole).subscribe(
        result => {
          console.log(result)
          this.router.navigate(['/transaction'])
        }
      )
    }
  }

 
}
