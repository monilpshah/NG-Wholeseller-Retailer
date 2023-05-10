import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.page.html',
  styleUrls: ['./price-page.page.scss'],
})
export class PricePagePage implements OnInit {

  proarr:product[]=[];

  constructor(private _route:Router,private _proser:ProductService,
              private _acroute:ActivatedRoute) { }

 onSelect(item:product){
                this._route.navigate(['/particlular-product',item.product_id])
       }
       
      
  onBack()
  {
    this._route.navigate(['/homeproduct']); 
  }
  product_price:number;
max_p:number;
min_p:number;
  ngOnInit() {

    this.product_price=this._acroute.snapshot.params['product_price'];
    console.log(this.product_price);
    if(this.product_price.toString()=="Below 499")
    {
      this.min_p=0;
      this.max_p=499;

      console.log(this.product_price);
      this._proser.getProductByPrice(this.min_p,this.max_p).subscribe(
        (data:any)=>{
          this.proarr=data;
         
        }
      )
    }

    if(this.product_price.toString()=="500-999")
    {
      this.min_p=500;
      this.max_p=999;

      console.log(this.product_price);
      this._proser.getProductByPrice(this.min_p,this.max_p).subscribe(
        (data:any)=>{
          this.proarr=data;
         
        }
      )
    }

    if(this.product_price.toString()=="1000-1999")
    {
      console.log("hii");
      this.min_p=1000;
      this.max_p=1999;

      console.log(this.product_price);
      this._proser.getProductByPrice(this.min_p,this.max_p).subscribe(
        (data:any)=>{
          this.proarr=data;
          }
      )
    }
    if(this.product_price.toString()=="2000 an above")
    {
      this.min_p=2000;
      this.max_p=50000;

      console.log(this.product_price);
      this._proser.getProductByPrice(this.min_p,this.max_p).subscribe(
        (data:any)=>{
          this.proarr=data;
         
        }
      )
    }
   
  }

}
