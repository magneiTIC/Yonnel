import { Component, OnInit } from '@angular/core';
import { AgenceService } from 'src/app/services/Agence/agence.service';
import { PaysService } from 'src/app/services/Pays/pays.service';
import { UserService } from 'src/app/services/User/user.service';
import { SousAgenceService } from 'src/app/services/SousAgence/sous-agence.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalAgence:any
  totalSousAgence:any
  totalUser:any
  totalPays:any

  constructor(
    private agenceService: AgenceService,
    private paysServce:PaysService,
    private sousAgenceService:SousAgenceService,
    private userService:UserService,
  ) { }

  ngOnInit(): void {

    this.sousAgenceService.getAllSousAgence().subscribe(data=>{
      this.totalSousAgence=data.total;
      console.log(this.totalAgence)
      })

      this.agenceService.getAllAgence().subscribe(data=>{
        this.totalAgence=data.total;
        console.log(this.totalAgence)
        })
        this.userService.getAllUser().subscribe(data=>{
          this.totalUser=data.total-1;
          console.log(this.totalUser)
          })
          this.paysServce.getAllPays().subscribe(data=>{
            this.totalPays=data.total;
            console.log(this.totalPays)
            })

  }
  

}
