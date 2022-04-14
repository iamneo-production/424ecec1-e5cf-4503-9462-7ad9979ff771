import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-userreviewlist',
  templateUrl: './userreviewlist.component.html',
  styleUrls: ['./userreviewlist.component.css']
})
export class UserreviewlistComponent implements OnInit {

  review=new Review();
  constructor(private service:ReviewService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchReviewByIdFromRemote(id).subscribe(
      data=>{
                console.log("response recieved");
                this.review=data;
            },
      error=>console.log("exception occured")
    )
  }

  edit(id:number){
    this.route.navigate(['/editreview',id]);
  }
  
  goTodelete(id:number){
    this.service.deleteReviewByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully");
        let uid=parseInt(localStorage.getItem('userid'));
        this.route.navigate(['/userreviewlist',uid]);
      },
      error=>{
        console.log("Exception Occured");
        let uid=parseInt(localStorage.getItem('userid'));
        this.route.navigate(['/userreviewlist',uid]);
      }      
    )

  }

}