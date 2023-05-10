import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { MenubarComponent } from "../menubar/menubar.component";
import { productcatbrand } from '../classes/productcategorybrand';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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


  products:product[]=[];
  productcatbrands:productcatbrand[]=[];
  displaycolumns:string[]=['product_img','fk_cat_id','brand_name','product_price','Action'];
  dataSource = new MatTableDataSource();

  constructor(private _service:ProductService,private _route:Router) { }

  @ViewChild(MatPaginator) paginator:MatPaginator;
  onClickAdd(){
    this._route.navigate(['menu/addproduct']);
  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._service.getProductNameOrBrand().subscribe(
      (data:productcatbrand[])=>{
        this.productcatbrands=data;
        this.dataSource.data=this.productcatbrands;

      }
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onUpdate(item:product){
      this._route.navigate(['menu/editproduct',item.product_id]);
  }
  onDelete(item:product){
    alert("click");
    this._service.deleteProduct(item).subscribe(
      (data:any)=>{
        this.products.splice(this.products.indexOf(item),1);

        this.dataSource.data=this.products;
      }
    );

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
}
