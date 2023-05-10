import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shortkurti',
  templateUrl: './shortkurti.page.html',
  styleUrls: ['./shortkurti.page.scss'],
})
export class ShortkurtiPage implements OnInit {

  proarr:product[]=[];

  constructor(private _route:Router,private _proser:ProductService) { }

  onSelect(item:product){
    this._route.navigate(['/particlular-product',item.product_id])
  }
  onBack()
  {
    this._route.navigate(['/homeproduct']);
  }

  
  ngOnInit() {
    this._proser.getshortproduct().subscribe(
      (data:any)=>{
      
        this.proarr=data;
       
      }
    )
  }

}
