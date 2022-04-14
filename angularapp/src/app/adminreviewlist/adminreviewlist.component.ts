import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-adminreviewlist',
  templateUrl: './adminreviewlist.component.html',
  styleUrls: ['./adminreviewlist.component.css']
})
export class AdminreviewlistComponent implements OnInit {

  reviewlist:Review[];
  constructor(private service:ReviewService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.service.fetchReviewListFromRemote().subscribe(
      data=>{
                console.log("response recieved");
                this.reviewlist=data;
            },
      error=>console.log("exception occured")
    )
  }

}