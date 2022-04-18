import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking=new Booking();
  passenger=new Passenger();
  currentDate=new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');
  constructor(private route:Router,private service:PassengerService,private service1:VehicleService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchPassengerByIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.passenger=data;
      },
      error=>console.log("exception occured")

    )
   var price=parseInt(localStorage.getItem('cost'));
   var uid=parseInt(localStorage.getItem('userid'));
   var vid=parseInt(localStorage.getItem('id'));
   var fname=localStorage.getItem('fname');
   this.booking.cost=price;
   this.booking.userreferenceId=uid;
   this.booking.vehiclereferenceId=vid;
   this.booking.fullName=fname;
   this.booking.bookingDate=String(this.cValue);
   

  }

  book()
  {
    var uid=parseInt(localStorage.getItem('userid'));
    this.route.navigate(['/payment',uid]);
  }
  goBack(){
    var uid=parseInt(localStorage.getItem('userid'));
    this.route.navigate(['/passengerlist',uid]);
  }
  myimage:string="assets/images/1.jpg";
}
