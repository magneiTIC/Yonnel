import { Component, OnInit } from '@angular/core';

import { AgenceService } from 'src/app/services/Agence/agence.service';

@Component({
  selector: 'app-liste-agence',
  templateUrl: './liste-agence.component.html',
  styleUrls: ['./liste-agence.component.css']
})
export class ListeAgenceComponent implements OnInit {
  agences:any


constructor(
  private agenceService:AgenceService
  

){}

  ngOnInit(): void {

    this.agenceService.getAllAgence().subscribe(data=>{
      this.agences=data;
      console.log(this.agences)
      })
  }

}
