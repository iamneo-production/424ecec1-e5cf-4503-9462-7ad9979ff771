import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http:HttpClient) { }

  savePassengerToRemote(passenger:Passenger):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/addpassenger",passenger);
  }
  fetchPassengerListByUserIdFromRemote(id:number):Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getpassengerbyuserid/"+id);
  }
  fetchPassengerByIdFromRemote(id:number):Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getpassenger/"+id);
  }
  deletePassengerByIdFromRemote(id:number):Observable<any>
  {
    return this.http.delete<any>("http://localhost:8080/deletepassenger/"+id);
  }
}