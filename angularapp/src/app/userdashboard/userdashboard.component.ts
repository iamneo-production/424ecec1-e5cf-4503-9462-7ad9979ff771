import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private route:Router) { }

  user=new User();
  ngOnInit(): void {
  }

  goToVehiclelist(){
    this.route.navigate(['/displayvehicles']);//component of angular(displayvehicles)
  }
  goToMyBooking(){}
  goToAddFeedback(){}
  goToMyProfile(){
    let email2=localStorage.getItem('email');
    this.route.navigate(['/getuser',email2]);
  }
  logout(){
    this.route.navigate(['/login']);
    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('email')));
  }

  goToHome(){
    this.route.navigate(['/userdashboard']);
  }

  goToPassengerlist(){
    var uid=parseInt(localStorage.getItem('userid'));
    this.route.navigate(['/passengerlist',uid]);
  }

  myimage:string="assets/images/1.jpg";
}
