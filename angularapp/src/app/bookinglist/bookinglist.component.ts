import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  bookinglist:Booking[];
  constructor(private service:BookingService,private route:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchBookingListByUserIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.bookinglist=data;
      },
      error=>console.log("exception occured")

    )
  }

  goToDeleteBooking(id:number){
    this.service.deleteBookingByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully");
      },
      error=>{
        console.log("Exception Occured");
      }
      
    )
  }

}