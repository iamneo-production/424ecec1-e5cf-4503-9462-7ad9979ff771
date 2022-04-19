import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  booking=new Booking();
  vehicle=new Vehicle();
  currentDate=new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');
  constructor(private route:Router,private service:BookingService,private service1:VehicleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    var price=parseInt(localStorage.getItem('cost'));
    this.booking.cost=price;
    var uid=parseInt(localStorage.getItem('userid'));
    var vid=parseInt(localStorage.getItem('id'));
    var fname=localStorage.getItem('fname');
    this.booking.userreferenceId=uid;
    this.booking.vehiclereferenceId=vid;
    this.booking.fullName=fname;
    this.booking.bookingDate=String(this.cValue);
    this.service1.fetchVehicleByIdFromRemote(vid).subscribe(
      data=>{
          console.log("data recieved");
          this.vehicle=data
      },
      error=>console.log("exception occured")

    )
  }

  addBooking(){
    this.service.saveBooking(this.booking).subscribe(

      data=>{
              console.log("data added successfully");
              var uid=parseInt(localStorage.getItem('userid'));
              this.route.navigate(['/bookinglist',uid]);
              var capacity=parseInt(localStorage.getItem('capacity'));
              this.vehicle.capacity=capacity-1;
              this.service1.saveVehicleToRemote(this.vehicle).subscribe(

                data=>{
                        console.log("data added successfully");
                        this.route.navigate(['/bookinglist',uid]);
                      },
                error=>console.log("error")
              )

            },
      error=>console.log("error")
    )
  }

  cancel(){
    var uid=parseInt(localStorage.getItem('userid'));
    this.route.navigate(['/passengerlist',uid]);
  }
  myimage:string="assets/images/1.jpg";
}
