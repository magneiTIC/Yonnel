import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/Client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientForm!:FormGroup

  constructor( 
    private formBuilder:FormBuilder,
    private router:Router,
    private clientService:ClientService){}


  ngOnInit(): void {
    this.clientForm=this.formBuilder.group({
      prenom:['',[Validators.required]],
      nom :['',[Validators.required]],
      email:['',[Validators.required]],
      dateNaiss :['',[Validators.required]],
      lieuNaiss:['',[Validators.required]],
      tel:['',[Validators.required]]
      
    })
  }

  onSubmit(){
    console.log('coucou')
    console.log(this.clientForm.value.login,this.clientForm.value.password)
    if(this.clientForm.invalid){
      return console.log('invalid') ;
    }else{
      console.log('bonjr')
      this.clientService.createClient(
        this.clientForm.value.nom, this.clientForm.value.prenom,this.clientForm.value.tel,
        this.clientForm.value.email,this.clientForm.value.dateNaiss,this.clientForm.value.lieuNaiss
        ).subscribe(       
        result=>{
          console.log(result)
          this.router.navigate(['/transaction'])
        }
      )
    }

  }

}