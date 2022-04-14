import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>
  {
    return this.http.post("http://localhost:8080/login",user)
  }
  public signupFromRemote(user:User):Observable<any>
  {
    return this.http.post("http://localhost:8080/signup",user)
  }

  saveUser1ToRemote(user:User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/adduser",user);
  }

  fetchUserListFromRemote():Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getuserlist");
  }

  fetchUserByIdFromRemote(id:number):Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/getuser/"+id);
  }

  deleteUserByIdFromRemote(id:number):Observable<any>
  {
    return this.http.delete<any>("http://localhost:8080/deleteuser/"+id);
  }

}
