import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { tempproduct } from '../classes/temp_product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { TempproductService } from '../services/tempproduct.service';
import { productcatbrand } from '../classes/productcategorybrand';
import { tempproductcatbrand } from '../classes/tempproductnameorbrand';
import { product } from '../classes/product';

@Component({
  selector: 'app-tempproduct',
  templateUrl: './tempproduct.component.html',
  styleUrls: ['./tempproduct.component.css']
})
export class TempproductComponent implements OnInit {

  MultipleDelUserArr:tempproduct[]=[];
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
  selectedFile:File=null;
  intrest:number;
  prodarr:product[]=[];

productcatbrands:tempproductcatbrand[]=[];
  products:tempproduct[]=[];
  displaycolumns:string[]=['product_img','fk_cat_id','brand_name','product_price','Action'];
  dataSource = new MatTableDataSource();

  constructor(private _service:TempproductService,private _route:Router,private _proser:ProductService) { }
  @ViewChild(MatPaginator) paginator:MatPaginator;

  onAdd(item:product){

    console.log(item);
    var fd=new FormData();
    console.log(item.product_price);
    this.intrest=item.product_price*0.02;
    item.product_price=item.product_price+this.intrest;
    console.log(item.product_price);

    // fd.append('fk_cat_id',item.fk_cat_id.toString());
    // fd.append('fk_brand_id',item.fk_brand_id.toString());
    // fd.append('product_qty',item.product_qty.toString());
    // fd.append('product_size',item.product_size);
    // fd.append('product_color',item.product_color);
    // fd.append('product_price',item.product_price.toString());
    // fd.append('fk_user_id',item.fk_user_id);
    // fd.append('product_img',item.product_img);
    // fd.append('date',item.date.toString());
    // console.log(fd);
    this._service.addProduct(item).subscribe(
        (data:any)=>{

          this.prodarr.push(new product(this.product_id,'../../assets/'+this.product_img+'.jpg',this.fk_cat_id,this.fk_brand_id,this.product_qty,this.product_size,this.product_color,this.product_price,this.fk_user_id,this.date));
          this.prodarr.splice(this.prodarr.indexOf(item),1);
          alert("Added");
          console.log(data);

        }
     );
  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;

    this._service.getProductNameOrBrand().subscribe(
      (data:tempproductcatbrand[])=>{
        this.productcatbrands=data;
        this.dataSource.data=this.productcatbrands;

      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onChange(item:tempproduct){


    if(this.MultipleDelUserArr.find(x=>x==item)){
      this.MultipleDelUserArr.splice(this.MultipleDelUserArr.indexOf(item),1);
    }
    else{
      this.MultipleDelUserArr.push(item);
    }
    console.log(this.MultipleDelUserArr);
  }

}
