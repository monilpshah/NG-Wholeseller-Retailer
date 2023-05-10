import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product:string="http://localhost:3000/product/";
  private productnamebrand='http://localhost:3000/getproductnameorbrand/';
  private productsize="http://localhost:3000/sizepro/";
  private productcolor="http://localhost:3000/colorpro/";
  private productprice="http://localhost:3000/pricepro/";
  private progetsaller="http://localhost:3000/getsellerloc/";
  private shortproduct:string="http://localhost:3000/getshortkurti/";
  private longproduct:string="http://localhost:3000/getlongkurti/";
  private anarkaliproduct:string="http://localhost:3000/getanarkalikurti/";
  private brand_url:string="http://localhost:3000/brand/";
  private city_url:string="http://localhost:3000/citypro/";
  private cat_url:string="http://localhost:3000/getprocat/";
  private brandget_url:string="http://localhost:3000/getprobrand/";
  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get(this.product);
  }
  getAllBrands(){
    return this._http.get(this.brand_url);
  }
  getProductById(product_id:number){
    return this._http.get(this.product+product_id);
  }
  getProductNameOrBrandById(product_id:number){
    return this._http.get(this.productnamebrand+product_id);
  }
  getSimilarProd(fk_cat_id:number,product_id:number){
    return this._http.get(this.product+fk_cat_id+"/"+product_id);
  }
  getProductBySize(product_size:String){
    return this._http.get(this.productsize+product_size);
  }
  getProductByColor(product_color:String){
    return this._http.get(this.productcolor+product_color);
  }

  getProductByCity(city:String){
    return this._http.get(this.city_url+city);
  }  
  getproBycat(cat_name:String){
    return this._http.get(this.cat_url+cat_name);
  }  
  getproBybrand(brand_name:String){
    return this._http.get(this.brandget_url+brand_name);
  }  
  getProductByPrice(min_price:number,max_price:number){
    return this._http.get(this.productprice+min_price+"/"+max_price);
  }

  getshortproduct(){
    return this._http.get(this.shortproduct);
  }

  getlongproduct(){
    return this._http.get(this.longproduct);
  }

  getanarkaliproduct(){
    return this._http.get(this.anarkaliproduct);
  }
  getBrandById(brand_id:number)
  {
    return this._http.get(this.brand_url+brand_id);
  }
}
