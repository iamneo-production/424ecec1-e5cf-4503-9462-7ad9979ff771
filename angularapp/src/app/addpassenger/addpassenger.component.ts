import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.css']
})
export class AddpassengerComponent implements OnInit {

  passenger=new Passenger();
  constructor(private route:Router,private service:PassengerService) { }

  ngOnInit(){
    var uid=parseInt(localStorage.getItem('userid'));
    var vid=parseInt(localStorage.getItem('id'));
    this.passenger.userreferenceId=uid;
    this.passenger.vehiclereferenceId=vid;
    
  }

  addpassenger(){
    this.service.savePassengerToRemote(this.passenger).subscribe(

      data=>{
              console.log("data added successfully");
              var uid=parseInt(localStorage.getItem('userid'));
              this.route.navigate(['/passengerlist',uid]);
            },
      error=>console.log("error")
    )
  }
  goToAddPassenger(){}
  goToDeletePassenger(){}
  goBack(){
    this.route.navigate(['/displayvehicles'])
  }

}