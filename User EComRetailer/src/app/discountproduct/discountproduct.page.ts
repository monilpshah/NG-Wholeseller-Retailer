import { Component, OnInit } from '@angular/core';
import { product } from '../classes/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-discountproduct',
  templateUrl: './discountproduct.page.html',
  styleUrls: ['./discountproduct.page.scss'],
})
export class DiscountproductPage implements OnInit {

  proarr:product[]=[];
  price:number;
  arr:product[];

  constructor(private _route:Router,private _proser:ProductService) { }
 
  onSelect(item:product){
    this._route.navigate(['/particlular-product',item.product_id])
  }
  onBack()
  {
    this._route.navigate(['/homeproduct']);
  }

  ngOnInit() {

    this._proser.getAllProducts().subscribe(
      (data:any)=>{

        this.price=data[0].product_price*2;
        this.proarr=data;
      // this.arr=this.price;
      }
    )

  }

}
