import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-displayvehicles',
  templateUrl: './displayvehicles.component.html',
  styleUrls: ['./displayvehicles.component.css']
})
export class DisplayvehiclesComponent implements OnInit
{

  _vehiclelist:Vehicle[];
  constructor(private service:VehicleService,private route:Router) { }

  ngOnInit()
  {                                               //springlink
    this.service.fetchVehicleListFromRemote().subscribe(
      data=>
      {
                console.log("response recieved");
                this._vehiclelist=data;
            },
      error=>console.log("exception occured")
    )
  }

  goToBookVehicle(id:number)//component
  {
    this.route.navigate(['/getvehicle',id]);
  }

}
