import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private sign:string="http://localhost:3000/signup/";

  constructor(private _http:HttpClient) { }

  addUser(item:user){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.sign,body,{headers:head1});
  }

  getUserById(email_id:string){
    return this._http.get(this.sign+email_id);
  }

}
