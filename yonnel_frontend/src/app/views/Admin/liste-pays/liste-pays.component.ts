import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/app/services/Pays/pays.service';



@Component({
  selector: 'app-liste-pays',
  templateUrl: './liste-pays.component.html',
  styleUrls: ['./liste-pays.component.css']
})
export class ListePaysComponent implements OnInit {

  pays:any


  constructor(
    private PaysService:PaysService
    
    ){}
  
    ngOnInit(): void {
      this.PaysService.getAllPays().subscribe(data=>{
        this.pays=data;
        console.log(this.pays)
        })
    }
  
  }
  