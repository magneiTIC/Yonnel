import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User/user.service';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  users:any
  constructor(
    private UserService: UserService,

  ) { }

  ngOnInit(): void {
    this.UserService.getAllUser().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
  }

}
