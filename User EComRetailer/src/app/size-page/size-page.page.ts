import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-size-page',
  templateUrl: './size-page.page.html',
  styleUrls: ['./size-page.page.scss'],
})
export class SizePagePage implements OnInit {

  proarr:product[]=[];
  size:string;
  constructor(private _route:Router,private _proser:ProductService,
              private _acroute:ActivatedRoute) { }

  onSelect(item:product){
    this._route.navigate(['/particlular-product',item.product_id])
  }
  onBack()
  {
    this._route.navigate(['/homeproduct']);
  }
product_size:string;
  ngOnInit() {
this.product_size=this._acroute.snapshot.params['product_size'];
// console.log(this.product_size);
    this._proser.getProductBySize(this.product_size).subscribe(
      (data:any)=>{
        this.proarr=data;
       
      }
    )
  }

}
