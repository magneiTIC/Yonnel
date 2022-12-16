import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';


@Component({
  selector: 'app-sideheader',
  templateUrl: './sideheader.component.html',
  styleUrls: ['./sideheader.component.css']
})
export class SideheaderComponent implements OnInit {

  constructor(
    private router:Router,
    private AuthService:AuthService


  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.AuthService.logout()
    this.router.navigate(['/signIn'])

  }

}
