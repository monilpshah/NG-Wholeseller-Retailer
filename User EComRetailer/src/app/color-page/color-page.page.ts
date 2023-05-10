import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.page.html',
  styleUrls: ['./color-page.page.scss'],
})
export class ColorPagePage implements OnInit {

  proarr:product[]=[];


  constructor(private _route:Router,private _proser:ProductService,
              private _acroute:ActivatedRoute) { }


onSelect(item:product){
          this._route.navigate(['/particlular-product',item.product_id])
 }
onBack()
{
  this._route.navigate(['homeproduct']);
}
 product_color:string;

  ngOnInit() {

    this.product_color=this._acroute.snapshot.params['product_color'];
console.log(this.product_color);
    this._proser.getProductByColor(this.product_color).subscribe(
      (data:any)=>{
        this.proarr=data;
       
      }
    )
  }

}
