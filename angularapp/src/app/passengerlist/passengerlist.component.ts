import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'appgit rebase-passengerlist',
  templateUrl: './passengerlist.component.html',
  styleUrls: ['./passengerlist.component.css']
})
export class PassengerlistComponent implements OnInit {

  _passengerlist:Passenger[];
  constructor(private service:PassengerService,private route:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchPassengerListByUserIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this._passengerlist=data;
      },
      error=>console.log("exception occured")

    )
  }
  goToEditPassenger(id:number){
    this.route.navigate(['/editpassenger',id]);
  }
  deletePassenger(id:number){
    this.service.deletePassengerByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully");
        let uid=parseInt(localStorage.getItem('userid'));
        this.route.navigate(['/passengerlist',uid]);
      },
      error=>{
        console.log("Exception Occured");
        let uid=parseInt(localStorage.getItem('userid'));
        this.route.navigate(['/passengerlist',uid]);
      }
      
    )
  }
  goToBook(id:number){}
  goBack(){
    this.route.navigate(['/addpassenger'])
  }
}
