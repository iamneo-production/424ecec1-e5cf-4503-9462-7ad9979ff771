import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.css']
})
export class ViewvehicleComponent implements OnInit {

  vehicle=new Vehicle();

  constructor(private route:Router,private service:VehicleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){

    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchVehicleByIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.vehicle=data;
      },
      error=>console.log("exception occured")

    )

  }

  goToVehiclelist(){
    this.route.navigate(['/getvehiclelist']);
  }


}
