import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  fetchVehicleListFromRemote():Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getvehiclelist");
  }

  saveVehicleToRemote(vehicle:Vehicle):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/addvehicle",vehicle);
  }

  fetchVehicleByIdFromRemote(id:number):Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getvehicle/"+id);
  }

  deleteVehicleByIdFromRemote(id:number):Observable<any>
  {
    return this.http.delete<any>("http://localhost:8080/deletevehicle/"+id);
  }

}
