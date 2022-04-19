import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToAddVehicles(){
    this.route.navigate(['/addvehicle']);
  }

  goToVehiclelist(){
    this.route.navigate(['/getvehiclelist']);
  }

  goToUserlist(){
    this.route.navigate(['/getuserlist']);
  }

  goToReviewlist(){
    this.route.navigate(['/adminreviewlist']);
  }

  logout(){
    this.route.navigate(['/login']);
    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('Userid')));
  }

  goToHome(){
    this.route.navigate(['/admindashboard']);
  }

  myimage:string="assets/images/1.jpg";
}
