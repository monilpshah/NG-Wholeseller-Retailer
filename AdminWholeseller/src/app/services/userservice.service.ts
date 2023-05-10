import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private userInfo:string="http://localhost:3000/user/";
  private sign:string="http://localhost:3000/signup/";
  private wholsaller="http://localhost:3000/wholsaller/";
  private retailer="http://localhost:3000/retailer/";
  private deleteMultipleUser:string="http://localhost:3000/deleteMultipleUsers/";

  constructor(private _http:HttpClient) { }

  getAllUser(){
    return this._http.get(this.userInfo);
  }

  getAllWholsaller(){
    return this._http.get(this.wholsaller);
  }
  getAllRetailer(){
    return this._http.get(this.retailer);
  }

  getUserById(email_id:string){
    return this._http.get(this.sign+email_id);
  }

  addUser(item:user){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.sign,body,{headers:head1});
  }

  deleteUser(item:user){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.userInfo+item.email_id,{headers:head});
  }

  deleteMultipleUsers(item:user[]){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleteMultipleUser,body,{headers:head});
  }

  updateUser(item:user){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.userInfo+item.email_id,body,{headers:head});
  }

}
