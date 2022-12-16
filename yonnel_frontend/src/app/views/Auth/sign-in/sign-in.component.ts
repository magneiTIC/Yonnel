import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css',]
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private AuthService:AuthService
    ){}


  ngOnInit(): void {

    this.signInForm = this.formBuilder.group({
      login:['',[Validators.required]],
      password:['',[Validators.required]]     
    })
  }

  onSubmit(){
    console.log('coucou')
    console.log(this.signInForm.value.login,this.signInForm.value.password)
    if(this.signInForm.invalid){
      return console.log('invalid') ;
    }else{
      console.log('bonjr')
      this.AuthService.signIn(this.signInForm.value.login, this.signInForm.value.password).subscribe(       
        result=>{
          console.log("HELLO")
          console.log(result)
          if(result.user.status=='admin'){
            this.router.navigate(['/admin/dashboard'])
          }
          else{
            this.router.navigate(['/transaction'])

          }
        }
      )
    }

  }

}
