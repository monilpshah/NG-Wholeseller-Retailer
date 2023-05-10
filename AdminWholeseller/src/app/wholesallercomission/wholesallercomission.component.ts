import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { billuser } from '../classes/billanduser';
import { BillService } from '../services/bill.service';
import { Router } from '@angular/router';
import { product } from '../classes/product';

@Component({
  selector: 'app-wholesallercomission',
  templateUrl: './wholesallercomission.component.html',
  styleUrls: ['./wholesallercomission.component.css']
})
export class WholesallercomissionComponent implements OnInit {

  billarr:billuser[]=[];


  dataSource = new MatTableDataSource();
  displaycolumns:string[]=['product_img','user_name','fk_user_id','product_price'];

  flag:boolean=true;
bill_no:number;
bill_amt:number;
product_price:number;
fk_user_id:string;
date:Date;
email_id:string;
password:string;
user_name:string;
mobile_no:string;
user_type:string;
address:string;
city:string;

@ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private _data:BillService,
    private _route:Router) { }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    proarr:product[]=[];
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllWholCommission().subscribe(
      (data:product[])=> {
       
      
      for (let i = 0; i<=data.length; i++) 
      {
        this.proarr=data;
      data[i].product_price=data[i].product_price-(data[i].product_price*0.98);
      this.dataSource.data=this.proarr;
      }
     // console.log(this.billarr);
      
    }
    );
  }

}
