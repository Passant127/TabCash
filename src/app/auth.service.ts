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
    //to prevent when we make refresh not appear register and login
    if(localStorage.getItem('userTaken')!= null)
    {
      this.saveCurrentUser()
    }
  }

 

  saveCurrentUser(){
    let encoded = JSON.stringify(localStorage.getItem('userTaken'))
    let decoded:any= jwtDecode(encoded)
    console.log(decoded)
    this.currentuser.next(decoded); //kda 2a2dar 23ml  subscribe

   
  }
    signup(data:object):Observable<any>
    {
      // 5alii balii mn enha post 
      return this._HttpClient.post(`${this.baseUrl}/registration`,data)

    } 
    login(data:object):Observable<any>
    {
      // 5alii balii mn enha post 
      return this._HttpClient.post(`${this.baseUrl}/login`,data)

    } 


}
