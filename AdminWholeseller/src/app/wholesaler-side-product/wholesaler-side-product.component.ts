import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { MenubarComponent } from "../menubar/menubar.component";
import { productcatbrand } from '../classes/productcategorybrand';
import { WholesalerSideService } from '../services/wholesaler-side.service';
import { isNgTemplate } from '@angular/compiler';
import { tempproduct } from '../classes/temp_product';
import { ignoreElements } from 'rxjs/operators';



@Component({
  selector: 'app-wholesaler-side-product',
  templateUrl: './wholesaler-side-product.component.html',
  styleUrls: ['./wholesaler-side-product.component.css']
})
export class WholesalerSideProductComponent implements OnInit {

  MultipleDelUserArr:product[]=[];
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

  price:number;
  products:product[]=[];
  productcatbrands:productcatbrand[]=[];
  displaycolumns:string[]=['product_img','fk_cat_id','brand_name','product_price','Action'];
  dataSource = new MatTableDataSource();

  constructor(private _service:WholesalerSideService,private _route:Router) { }

  @ViewChild(MatPaginator) paginator:MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onUpdate(item:tempproduct){
    this._route.navigate(['wholesalerMenu/wholesalerEditProduct',item.product_id]);
  }
  onChange(item:product){
    if(this.MultipleDelUserArr.find(x=>x==item)){
      this.MultipleDelUserArr.splice(this.MultipleDelUserArr.indexOf(item),1);
    }
    else{
      this.MultipleDelUserArr.push(item);
    }
    console.log(this.MultipleDelUserArr);
  }
  p:string;
  pid:string;
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.fk_user_id=localStorage.getItem('email_id');

     this._service.getProductNameOrBrand(this.fk_user_id).subscribe(

      (data:productcatbrand[])=>{

        for (let i = 0; i < data.length; i++) {
          this.p=localStorage.getItem('price');
          this.pid=localStorage.getItem('pid');
          console.log(this.p);
          if(data[i].product_id==parseInt(this.pid))
          {
            data[i].product_price=parseInt(this.p);
            console.log(data[i].product_price);
          }
          else{
            this.product_price=data[i].product_price-(data[i].product_price*0.2);
            data[i].product_price=this.product_price;
          }
          // if(parseInt(this.pid)!=data[i].product_id)
          // {
          // this.product_price=data[i].product_price-(data[i].product_price*0.2);
          // data[i].product_price=this.product_price;
          // }
        }

        this.productcatbrands=data;
        this.dataSource.data=this.productcatbrands;
      }
    );
  }

}
