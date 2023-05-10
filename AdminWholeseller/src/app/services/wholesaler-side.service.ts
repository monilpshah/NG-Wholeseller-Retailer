import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from '../classes/product';
import { tempproduct } from '../classes/temp_product';

@Injectable({
  providedIn: 'root'
})
export class WholesalerSideService {

private product:string="http://localhost:3000/wholesalerSide/";
private updateImage="http://localhost:3000/wholupdateimage/";
private wholsalpro="http://localhost:3000/wholsallingpro/";
  constructor(private _http:HttpClient) { }

  getProductById(product_id:number){
    return this._http.get(this.updateImage+product_id);
  }

  getProductByUserId(fk_user_id:string){
    return this._http.get(this.updateImage+fk_user_id);
  }

  getProductNameOrBrand(fk_user_id:string){
    return this._http.get(this.product+fk_user_id);
  }

  addWholesalerProduct(item:FormData){

    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.product,item);
  }

  updateProduct(item:tempproduct){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.product+item.product_id,body,{headers:head});
  }

  updateProduct_image(item:FormData)
  {
    return this._http.put(this.updateImage,item)
  }

  wholsallingpro(email_id:string){
    return this._http.get(this.wholsalpro+email_id);
  }

}
