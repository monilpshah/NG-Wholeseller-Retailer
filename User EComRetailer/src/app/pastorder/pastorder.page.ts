import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../classes/product';
import { BilldetailsService } from '../services/billdetails.service';

@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.page.html',
  styleUrls: ['./pastorder.page.scss'],
})
export class PastorderPage implements OnInit {

  MultipleDelUserArr:product[]=[];
  product_id:number;
  product_img:string;
  fk_cat_id:number;
  fk_brand_id:number;homeh
  brand_name:string;
  brand_logo:string;
  product_qty:number;
  product_color:string;
  product_size:string;
  product_price:number;
  fk_user_id:string;
  date:Date;
  cat_id:number;
  cat_name:string;
  proarr:product[]=[];

  constructor(private _route:Router,private _wholser:BilldetailsService) { }

  user_id:string;

  onBack(){
    this._route.navigate(['/homeproduct']);
  }

  ngOnInit() {
    this.user_id=localStorage.getItem('email_id');
    this._wholser.wholsallingpro(this.user_id).subscribe(
      (data:any)=>{
        this.proarr=data;
      }
    );
  }

}
