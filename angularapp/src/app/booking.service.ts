import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  saveBooking(booking:Booking):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/addbooking",booking);
  }

  fetchBookingListByUserIdFromRemote(id:number):Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getbookingbyuserid/"+id);
  }

  findBookingbyVehicleIdfomRemote(id:number):Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getbookingbyvehicleid/"+id);
  }
  deleteBookingByIdFromRemote(id:number):Observable<any>
  {
    return this.http.delete<any>("http://localhost:8080/deletebooking/"+id);
  }
}