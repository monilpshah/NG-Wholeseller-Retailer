import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saller-location',
  templateUrl: './saller-location.page.html',
  styleUrls: ['./saller-location.page.scss'],
})
export class SallerLocationPage implements OnInit {

  proarr:product[]=[];
  city:string;


  constructor(private _route:Router,private _proser:ProductService) { }

  onBack(){
    this._route.navigate(['/homeproduct']);
  }
  onSelect(item:product){
    this._route.navigate(['/particlular-product',item.product_id])
  }


  ngOnInit() {

    this.city=localStorage.getItem('city');
    console.log(this.city);

    this._proser.getProductByCity(this.city).subscribe(
     (data:any)=>{
       this.proarr=data;
       console.log(this.proarr);
      }
   );
  }

}
