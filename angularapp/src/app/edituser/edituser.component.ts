import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user=new User();

  constructor(private route:Router,private service:SignupService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchUserByIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.user=data
      },
      error=>console.log("exception occured")

    )

  }

  updateuserformsubmit()
  {
    this.service.saveUser1ToRemote(this.user).subscribe(

      data=>{
              console.log("data added successfully");
              this.route.navigate(['/getuserlist']);
            },
      error=>console.log("error")
    )
  }

  deleteVehicle(id:number)
  {
    this.service.deleteUserByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully"),
        this.route.navigate(['/getuserlist'])
      },
      error=>console.log("Exception Occured")
      
    )
  }

  goToUserlist(){
    this.route.navigate(['/getuserlist']);
  }

}
