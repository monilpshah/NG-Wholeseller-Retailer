import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private catgoryInfo:string="http://localhost:3000/category/";

  constructor(private _http:HttpClient) { }
  getAllCategory(){
    return this._http.get(this.catgoryInfo);
  }
  getCatById(cat_id:number){
    return this._http.get(this.catgoryInfo+cat_id);
  }

  addCategory(item:category){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.catgoryInfo,body,{headers:head1});

  }

  updateCategory(item:category){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.catgoryInfo+item.cat_id,body,{headers:head});
  }

  deleteCategory(item:category){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.catgoryInfo+item.cat_id,{headers:head});
  }
}
