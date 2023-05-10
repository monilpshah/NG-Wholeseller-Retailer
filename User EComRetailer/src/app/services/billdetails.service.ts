import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cart } from '../classes/cart';
import { billdetail } from '../classes/billdetails';

@Injectable({
  providedIn: 'root'
})
export class BilldetailsService {

  private billdetails_url="http://localhost:3000/billdetails/";
  private wholsalpro="http://localhost:3000/getretailerpastpro/";
  constructor(private _http:HttpClient) { }

  addbilldetail(item:billdetail[]){

    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.billdetails_url,body,{headers:head});
}

wholsallingpro(email_id:string){
  return this._http.get(this.wholsalpro+email_id);
}
}
