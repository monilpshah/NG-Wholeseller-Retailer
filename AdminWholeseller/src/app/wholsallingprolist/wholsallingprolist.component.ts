import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { product } from '../classes/product';
import { WholesalerSideService } from '../services/wholesaler-side.service';

@Component({
  selector: 'app-wholsallingprolist',
  templateUrl: './wholsallingprolist.component.html',
  styleUrls: ['./wholsallingprolist.component.css']
})
export class WholsallingprolistComponent implements OnInit {

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
 
  displaycolumns:string[]=['product_img','cat_name','product_price'];
  dataSource = new MatTableDataSource();

  constructor(private _route:Router,private _wholser:WholesalerSideService) { }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  proarr:product[]=[];
  user_id:string;
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.user_id=localStorage.getItem("email_id");
    this._wholser.wholsallingpro(this.user_id).subscribe(
      (data:product[])=> {
       
      
      for (let i = 0; i<=data.length; i++) 
      {
        this.proarr=data;
      data[i].product_price=data[i].product_price-(data[i].product_price*0.02);
      this.dataSource.data=this.proarr;
      }
     // console.log(this.billarr);
      
    }
    );
  }

}
