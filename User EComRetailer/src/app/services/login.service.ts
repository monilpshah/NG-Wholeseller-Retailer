import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  private log:string="http://localhost:3000/login/";

  constructor(private _http:HttpClient) { }

  login(item:user){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.log,body,{headers:head});
  }

}
