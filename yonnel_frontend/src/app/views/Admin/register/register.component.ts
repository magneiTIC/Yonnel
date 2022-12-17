import { Component, OnInit } from '@angular/core';
import { SousAgenceService } from 'src/app/services/SousAgence/sous-agence.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:any
  sousAgences:any

  constructor(
    private UserService: UserService,
    private SousAgencesService:SousAgenceService

  ) { }

  ngOnInit(): void {

    this.SousAgencesService.getAllSousAgence().subscribe(data=>{
      this.sousAgences=data;
      console.log(this.sousAgences)
      })
      
    this.UserService.getAllUser().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })

  }

}
