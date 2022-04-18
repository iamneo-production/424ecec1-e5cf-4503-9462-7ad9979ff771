import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-vehiclebookinglist',
  templateUrl: './vehiclebookinglist.component.html',
  styleUrls: ['./vehiclebookinglist.component.css']
})
export class VehiclebookinglistComponent implements OnInit {

  bookinglist:Booking[];
  constructor(private service:BookingService,private route:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.findBookingbyVehicleIdfomRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.bookinglist=data;
      },
      error=>console.log("exception occured")

    )
  }

}