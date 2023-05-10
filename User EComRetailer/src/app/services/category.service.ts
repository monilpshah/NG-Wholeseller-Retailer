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
  getCategoryById(cat_id:number)
  {
    return this._http.get(this.catgoryInfo+cat_id);
  }
  
}
