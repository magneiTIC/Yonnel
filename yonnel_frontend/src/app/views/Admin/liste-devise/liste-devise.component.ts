import { Component, OnInit } from '@angular/core';
import { DeviseService } from 'src/app/services/Devise/devise.service';


@Component({
  selector: 'app-liste-devise',
  templateUrl: './liste-devise.component.html',
  styleUrls: ['./liste-devise.component.css']
})
export class ListeDeviseComponent implements OnInit {
  devises:any


  constructor(
    private DeviseService:DeviseService
    
  
  ){}
  
    ngOnInit(): void {
  
      this.DeviseService.getAllDevise().subscribe(data=>{
        this.devises=data;
        console.log(this.devises)
        })
    }
  
  }
  