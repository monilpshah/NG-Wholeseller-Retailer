import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
products:product[]=[];
  constructor(private _route:Router,private _proservice:ProductService) { }

  ngOnInit() {
    this._proservice.getAllProducts().subscribe(
      (data:any)=>{
        this.products=data;
      }
    );
  }

}
