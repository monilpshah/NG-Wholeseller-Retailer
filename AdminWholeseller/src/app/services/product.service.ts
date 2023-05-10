import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private product:string="http://localhost:3000/product/";
private deleteMulPro="http://localhost:3000/deletemultipleproduct/";
private updateImage="http://localhost:3000/updateImage/";
private productnamebrand='http://localhost:3000/getproductnameorbrand/';

constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get(this.product);
  }

  getProductById(product_id:number){
    return this._http.get(this.product+product_id);
  }

  getProductNameOrBrand(){
    return this._http.get(this.productnamebrand);
  }


  addProduct(item:FormData){

    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.product,item);
  }

  updateProduct(item:product){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.product+item.product_id,body,{headers:head});
  }

  updateProduct_image(item:FormData)
  {
    return this._http.put(this.updateImage,item)
  }

  deleteProduct(item:product){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.product+item.product_id,{headers:head});
  }

  deleteMultipleProducts(item:product[]){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleteMulPro,body,{headers:head});
  }
}
