import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit 
{

  user=new User();
  constructor(private route:Router,private service:SignupService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let email=String(this.activatedRoute.snapshot.paramMap.get('email'));
    this.service.fetchUserByEmailFromRemote(email).subscribe(
      data=>
      {
          console.log("data recieved");
          this.user=data;
      },
      error=>console.log("exception occured")

    )
  }

  updateformsubmit()
  {
    this.service.saveUser1ToRemote(this.user).subscribe(

      data=>{
              console.log("data added successfully");
              let email2=localStorage.getItem('email');
              this.route.navigate(['/getuser',email2]);
            },
      error=>console.log("error")
    )
  }

  goToMyProfile()
  {
    let email2=localStorage.getItem('email');
    this.route.navigate(['/getuser',email2]);
  }

}
