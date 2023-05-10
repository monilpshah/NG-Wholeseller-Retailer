import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { brand } from "../classes/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brandInfo:string="http://localhost:3000/brand/";
  constructor(private _http:HttpClient) { }

  getAllBrand(){
    return this._http.get(this.brandInfo);
  }
}
