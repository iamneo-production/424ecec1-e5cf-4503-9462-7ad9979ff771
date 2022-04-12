import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  _userlist:User[];
  constructor(private service:SignupService,private route:Router) { }

  ngOnInit(): void {

    this.service.fetchUserListFromRemote().subscribe(
      data=>{
                console.log("response recieved");
                this._userlist=data;
            },
      error=>console.log("exception occured")
    )

  }

  goToEditUser(id:number)
  {
    console.log("id"+id);
    this.route.navigate(['/edituser',id]);
  }
  deleteUser(id:number)
  {
    this.service.deleteUserByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully"),
        this.route.navigate(['/getuserlist'])
      },
      error=>console.log("Exception Occured")
      
    )
  }

}
