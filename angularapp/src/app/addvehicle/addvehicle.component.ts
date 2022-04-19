
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  vehicle=new Vehicle();

  constructor(private route:Router,private service:VehicleService) { }

  ngOnInit(): void {
  }

  addvehicleformsubmit()
  {
    this.service.saveVehicleToRemote(this.vehicle).subscribe(

      data=>{
              console.log("data added successfully");
              this.route.navigate(['/getvehiclelist']);
            },
      error=>console.log("error")
    )
  }

  goToVehiclelist(){
    this.route.navigate(['/getvehiclelist']);
  }
  myimage:string="assets/images/1.jpg";
}
