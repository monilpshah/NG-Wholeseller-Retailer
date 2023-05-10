import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tempproduct } from "../classes/temp_product";

@Injectable({
  providedIn: 'root'
})
export class TempproductService {

  private product:string="http://localhost:3000/tempproduct/";
  private productnamebrand='http://localhost:3000/gettempproductnameorbrand/';

  constructor(private _http:HttpClient) { }

  getAllTempProducts(){
    return this._http.get(this.product);
  }
  getProductNameOrBrand(){
    return this._http.get(this.productnamebrand);
  }

  addProduct(item){

    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.product,item);
  }
}
