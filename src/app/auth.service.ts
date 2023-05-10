import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:4000'
  currentuser = new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient) {
    
    if(localStorage.getItem('userTaken')!= null)
    {
      this.saveCurrentUser()
    }
  }

 

  saveCurrentUser(){
    let encoded = JSON.stringify(localStorage.getItem('userTaken'))
    let decoded:any= jwtDecode(encoded)
    console.log(decoded)
    this.currentuser.next(decoded); 

   
  }
    signup(data:object):Observable<any>
    {
  
      return this._HttpClient.post(`${this.baseUrl}/registration`,data)

    } 
    login(data:object):Observable<any>
    {
      
      return this._HttpClient.post(`${this.baseUrl}/login`,data)

    } 


}
