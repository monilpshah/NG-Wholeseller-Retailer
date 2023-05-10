import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { emailverify } from '../classes/emailverify';

@Injectable({
  providedIn: 'root'
})
export class EmailVerifyService {

  emailurl:string="http://localhost:3000/emailVerify/";

  constructor(private _http:HttpClient) { }

  sendmail(item:emailverify){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.emailurl,body,{headers:head});
  }
  
}
