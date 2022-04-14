import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {

  _vehiclelist:Vehicle[];
  constructor(private service:VehicleService,private route:Router) { }

  ngOnInit()
  {
          this.service.fetchVehicleListFromRemote().subscribe(
            data=>{
                      console.log("response recieved");
                      this._vehiclelist=data;
                  },
            error=>console.log("exception occured")
          )
  }


  goToAddVehicle(){
    this.route.navigate(['/addvehicle']);
  }

  goToEditVehicle(id:number){
    console.log("id"+id);
    this.route.navigate(['/editvehicle',id]);
  }

  goToViewVehicle(id:number)
  {
    console.log("id"+id);
    this.route.navigate(['/viewvehicle',id]);
  }

  deleteVehicle(id:number)
  {
    this.service.deleteVehicleByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully"),
        this.route.navigate(['/getvehiclelist'])
      },
      error=>console.log("Exception Occured")
      
    )
  }

}
