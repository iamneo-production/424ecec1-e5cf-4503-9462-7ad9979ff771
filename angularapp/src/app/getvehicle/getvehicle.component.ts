import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-getvehicle',
  templateUrl: './getvehicle.component.html',
  styleUrls: ['./getvehicle.component.css']
})
export class GetvehicleComponent implements OnInit {

  vehicle=new Vehicle();
  constructor(private route:Router,private service:VehicleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchVehicleByIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.vehicle=data;
          localStorage.setItem('id',String(id));
          console.log(localStorage.getItem('id'));
      },
      error=>console.log("exception occured")

    )

  }

  BookVehicle(){
    this.route.navigate(['/addpassenger']);
  }  
  goToVehiclelist(){
    this.route.navigate(['/displayvehicles']);
  }

}
