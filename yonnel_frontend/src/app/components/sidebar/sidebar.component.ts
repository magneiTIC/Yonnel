import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
