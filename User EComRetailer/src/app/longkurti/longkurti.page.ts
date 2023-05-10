import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-longkurti',
  templateUrl: './longkurti.page.html',
  styleUrls: ['./longkurti.page.scss'],
})
export class LongkurtiPage implements OnInit {

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
    this._proser.getlongproduct().subscribe(
      (data:any)=>{
      
        this.proarr=data;
       
      }
    )
  }

}
