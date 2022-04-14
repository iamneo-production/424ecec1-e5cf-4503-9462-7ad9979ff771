import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-editvehicle',
  templateUrl: './editvehicle.component.html',
  styleUrls: ['./editvehicle.component.css']
})
export class EditvehicleComponent implements OnInit {

  vehicle=new Vehicle();

  constructor(private route:Router,private service:VehicleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){

    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchVehicleByIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.vehicle=data
      },
      error=>console.log("exception occured")

    )

  }

  updatevehicleformsubmit()
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


}
