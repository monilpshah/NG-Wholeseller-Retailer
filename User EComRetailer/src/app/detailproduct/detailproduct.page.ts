import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.page.html',
  styleUrls: ['./detailproduct.page.scss'],
})
export class DetailproductPage implements OnInit {
images=[
  {image:"../../assets/images/1.jpg"},
  {image:"../../assets/images/2.jpg"},
  {image:"../../assets/images/1.jpg"},
  {image:"../../assets/images/2.jpg"}
];
proarr:product[]=[];
price:number;

onBack(){
  this._route.navigate(['/homeproduct']);
}
  constructor(private _route:Router,private _proser:ProductService) { }
onSelect(item:product){
  this._route.navigate(['/particlular-product',item.product_id])
}
  ngOnInit() {
    this._proser.getAllProducts().subscribe(
      (data:any)=>{
      
        this.proarr=data;
       
      }
    )
  }

}
