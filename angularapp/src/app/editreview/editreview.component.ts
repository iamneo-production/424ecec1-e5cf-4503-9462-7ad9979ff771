import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})
export class EditreviewComponent implements OnInit {

  review=new Review();
  constructor(private route:Router,private service:ReviewService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchReviewByIdFromRemote(id).subscribe(
      data=>{
          console.log("data recieved");
          this.review=data
      },
      error=>console.log("exception occured")

    )
  }

  updateReviewformsubmit()
  {
    this.service.saveReviewToRemote(this.review).subscribe(

      data=>{
              console.log("data added successfully");
              let uid=parseInt(localStorage.getItem('userid'))
              this.route.navigate(['/userreviewlist',uid]);
            },
      error=>console.log("error")
    )
  }

  goBack(){

  }

}