import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-editpassenger',
  templateUrl: './editpassenger.component.html',
  styleUrls: ['./editpassenger.component.css']
})
export class EditpassengerComponent implements OnInit {

  passenger=new Passenger();
  constructor(private route:Router,private service:PassengerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchPassengerByIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.passenger=data
      },
      error=>console.log("exception occured")

    )
  }

  updatepassengerformsubmit()
  {
    this.service.savePassengerToRemote(this.passenger).subscribe(

      data=>{
              console.log("data added successfully");
              let uid=parseInt(localStorage.getItem('userid'))
              this.route.navigate(['/passengerlist',uid]);
            },
      error=>console.log("error")
    )
  }
  goBack(){
    let uid=parseInt(localStorage.getItem('userid'))
    this.route.navigate(['/passengerlist',uid]);
  }


  myimage:string="assets/images/1.jpg";
}