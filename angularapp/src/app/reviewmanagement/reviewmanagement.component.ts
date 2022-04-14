import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-reviewmangement',
  templateUrl: './reviewmangement.component.html',
  styleUrls: ['./reviewmangement.component.css']
})
export class ReviewmangementComponent implements OnInit {

  review=new Review();
  constructor(private route:Router,private service:ReviewService) { }

  ngOnInit(){
    var uid=parseInt(localStorage.getItem('userid'));
    this.review.id=uid;
  }

  addReview(){
    this.service.saveReviewToRemote(this.review).subscribe(

      data=>{
              console.log("data added successfully");
              var uid=parseInt(localStorage.getItem('userid'));
              this.route.navigate(['/userreviewlist',uid]);
            },
      error=>console.log("error")
    )

  }
  
  goReviewList(){
    let uid=parseInt(localStorage.getItem('userid'));
    this.route.navigate(['/userreviewlist',uid]);
  }
  goBack(){
    this.route.navigate(['/userdashboard'])
  }

}
