import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/app/services/Pays/pays.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviseService } from 'src/app/services/Devise/devise.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  paysForm!: FormGroup
  devises!:any
  constructor(
    private DeviseService: DeviseService,
    private PaysService: PaysService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.DeviseService.getAllDevise().subscribe(data=>{
      this.devises=data;
      console.log(this.devises)
      })

      this.paysForm = this.formBuilder.group({
        codeISO1: ['', [Validators.required]],
        nom: ['', [Validators.required]],
        DeviseId: ['', [Validators.required]],
      })
  }
  onSubmitPays() {
    if (this.paysForm.invalid) {
      return console.log('invalid');
    } else {
      console.log( this.paysForm.value.DeviseId)
      this.PaysService.createPays(
        this.paysForm.value.codeISO1,
        this.paysForm.value.nom, 
        this.paysForm.value.DeviseId
        ).subscribe(
          result => {
            console.log(result)
            this.router.navigate(['/transaction'])
          }
        )
    }
  }

}
