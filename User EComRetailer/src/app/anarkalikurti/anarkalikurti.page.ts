import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anarkalikurti',
  templateUrl: './anarkalikurti.page.html',
  styleUrls: ['./anarkalikurti.page.scss'],
})
export class AnarkalikurtiPage implements OnInit {

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
    this._proser.getanarkaliproduct().subscribe(
      (data:any)=>{
      
        this.proarr=data;
       
      }
    )
  }

}
