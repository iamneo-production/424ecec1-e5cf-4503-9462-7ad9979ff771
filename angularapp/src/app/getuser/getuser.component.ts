import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  user=new User();
  constructor(private route:Router,private service:SignupService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let email=String(this.activatedRoute.snapshot.paramMap.get('email'));
    this.service.fetchUserByEmailFromRemote(email).subscribe(
      data=>{
          console.log("data recieved");
          this.user=data;
      },
      error=>console.log("exception occured")

    )
  }

  goToEditUser(){
    let email2=localStorage.getItem('email');
    this.route.navigate(['/useredit',email2]);
  }

}
