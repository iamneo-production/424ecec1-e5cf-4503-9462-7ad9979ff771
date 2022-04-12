import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  msg='';
  constructor(private _service:SignupService, private _router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){}
   

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{console.log("response recieved");
      if(this.user.email=='admin')     
      {
          this._router.navigate(['/admindashboard']);
          localStorage.setItem('email',this.user.email);
          console.log(localStorage.getItem('email'));
      }
      else
      {
          this._router.navigate(['/userdashboard'])
          localStorage.setItem('email',this.user.email);
          console.log(localStorage.getItem('email'));
          let email=String(this.activatedRoute.snapshot.paramMap.get('email'));
          this._service.fetchUserByEmailFromRemote(email).subscribe(
          data=>{
                    console.log("data recieved");
                    this.user=data;
                    let userid=this.user.id;
                    localStorage.setItem('userid',String(userid));
                    console.log(localStorage.getItem('userid'));
                    console.log(localStorage.getItem('email'));
          },
         error=>console.log("exception occured")

    )
      }
    },
      error =>{console.log("exception occured"),
      this.msg="Bad Credential,please enter valid email and password"
    }
    );

  }
  myimage:string="assets/images/1.jpg";
}
