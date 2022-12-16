import { Component, OnInit } from '@angular/core';
import { SousAgenceService } from 'src/app/services/SousAgence/sous-agence.service';


@Component({
  selector: 'app-liste-sous-agence',
  templateUrl: './liste-sous-agence.component.html',
  styleUrls: ['./liste-sous-agence.component.css']
})
export class ListeSousAgenceComponent implements OnInit {

  sousAgences:any


  constructor(
    private SousAgenceService:SousAgenceService
    
  
  ){}
  
    ngOnInit(): void {
  
      this.SousAgenceService.getAllSousAgence().subscribe(data=>{
        this.sousAgences=data;
        console.log(this.sousAgences)
        })
    }
  
  }
  