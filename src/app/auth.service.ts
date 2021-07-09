import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged = JSON.parse(localStorage.getItem('isLogged') || 'false');

  constructor(private Http:HttpClient) { 


  }

  setLoggedIn(bool:boolean){
    this._isLogged = bool;
    localStorage.setItem('isLogged',bool.toString())
  }

  get isLogged(){
    return this._isLogged
  }
  

  getUsers(email:string,password:string){
    return this.Http.post("/api/auth.php",{
      email,password
    });
    // post to api server 
    // return if correct 
  }
}
