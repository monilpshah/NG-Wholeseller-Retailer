import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { cart } from '../classes/cart';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-particlular-product',
  templateUrl: './particlular-product.page.html',
  styleUrls: ['./particlular-product.page.scss'],
})
export class ParticlularProductPage implements OnInit {
  product_id:number;
  product_img:string;
  fk_cat_id:number;
  fk_brand_id:number;
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
  id:number;
  arr:product[]=[];

  constructor(private _route:Router,
    private _proservice:ProductService,
    private _actRoute:ActivatedRoute,
    private _cart_ser:CartServiceService) { }
onDetails(item:product){
  this._route.navigate(['/particlular-product',item.product_id])
}

slideOpts={
  spaceBetween:10,
  centeredSlides:false,
  slidesPerView:2.6,

}

onBack()
{
  this._route.navigate(['/homeproduct']);
}
onPurchase(){    
 
  this.fk_cart_user_id=localStorage.getItem('email_id');
  this.fk_cart_product_id=this.product_id;
  this.product_name=this.brand_name+" "+this.cat_name+" of size "+this.product_size;
  if(this.product_qty>0)
  {
  this._cart_ser.addToCart(new cart(this.cart_id,this.fk_cart_user_id,this.fk_cart_product_id,this.product_img,this.product_name,this.product_price,this.product_qty)).subscribe(
    (data:any)=>{
      console.log(data);
    }
  );
  alert("Successfully added to the cart.");
  }
  else
  {
    alert("Something went wrong while adding product to the cart.");
  }
}

fk_cart_user_id:string;
fk_cart_product_id:number;
product_name:string;
cart_id:number;
qty_flag:boolean=false;
qty_msg:string;

  ngOnInit() {
    this.id=this._actRoute.snapshot.params['product_id'];

    this._proservice.getProductNameOrBrandById(this.id).subscribe(
      (data:any)=>{
        this.product_id=data[0].product_id;
        this.product_img=data[0].product_img;
        this.fk_cat_id=data[0].fk_cat_id;
        this.fk_brand_id=data[0].fk_brand_id;
        this.product_qty=data[0].product_qty;
        this.product_size=data[0].product_size;
        this.product_color=data[0].product_color;
        this.product_price=data[0].product_price;
        this.fk_user_id=data[0].fk_user_id;
        this.cat_name=data[0].cat_name;
        this.brand_name=data[0].brand_name;
        this._proservice.getSimilarProd(this.fk_cat_id,this.product_id).subscribe(
          (data:product[])=>{
            this.arr=data;
          }
        );
          if(this.product_qty==0)
          {
            console.log(this.product_qty);
            this.qty_flag=true;
            this.qty_msg="Out Of Stock"; 
          }
      }
    );
  }

}
