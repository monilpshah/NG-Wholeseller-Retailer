import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';

@Component({
  selector: 'app-serchpage',
  templateUrl: './serchpage.page.html',
  styleUrls: ['./serchpage.page.scss'],
})
export class SerchpagePage implements OnInit {

  search_item:string;
  constructor(private _router:Router,private _proser:ProductService, private _route:Router) { }
  
  proarr:product[]=[];
  ngOnInit() {
    this.search_item=localStorage.getItem('search_item');
    this._proser.getproBycat(this.search_item).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length>0)
        {
         
          console.log("hiiii");
        this.proarr=data;
        console.log(this.proarr);
        }
        else
        {
          console.log("brand");
          this._proser.getproBybrand(this.search_item).subscribe(
            (x:any)=>{
              this.proarr=x;
            }
          );
        }
      }
    );
   
  }
  onBack(){
    
  }

  onSelect(data : any){
    this._route.navigate(['/particlular-product',data.product_id]);
  }

}
