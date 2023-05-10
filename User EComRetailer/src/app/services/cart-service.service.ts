import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cart } from '../classes/cart';
import { bill } from '../classes/bill';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart_url="http://localhost:3000/cart/";
  private bill_url="http://localhost:3000/bill/";
  private deletemultiplecart="http://localhost:3000/deletecart/";


  constructor(private _http:HttpClient) { }

  addToCart(item:cart){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.cart_url,body,{headers:head1});
  }

  getItemByUserId(user_id:string){
    return this._http.get(this.cart_url+user_id);
  }

  deleteProduct(item:cart){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.cart_url+item.cart_id,{headers:head});
  }

  addbill(item:bill){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill_url,body,{headers:head});
  }
  deleteMultiplecarts(item:cart[]){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deletemultiplecart,body,{headers:head});
  }

}
