import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  saveReviewToRemote(review:Review):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/addreview",review);
  }
  fetchReviewListFromRemote():Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getreviewlist");
  }
  fetchReviewByIdFromRemote(id:number):Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getreview/"+id);
  }
  deleteReviewByIdFromRemote(id:number):Observable<any>
  {
    return this.http.delete<any>("http://localhost:8080/deletereview/"+id);
  }
}
