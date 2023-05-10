import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { bill } from '../classes/bill';
import { BillService } from '../services/bill.service';
import { Router } from '@angular/router';
import { billndbilldetails } from '../classes/billandbilldetails';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {


  billarr:bill[]=[];
  MultipleDelUserArr:bill[]=[];


  dataSource = new MatTableDataSource();
  displaycolumns:string[]=['fk_user_id','bill_amt','date','Action'];

  flag:boolean=true;
bill_no:number;
bill_amt:number;
fk_user_id:string;
date:Date;

@ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private _data:BillService,
    private _route:Router) { }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onChange(item:bill){
      if(this.MultipleDelUserArr.find(x=>x==item)){
       this.MultipleDelUserArr.splice(this.MultipleDelUserArr.indexOf(item),1);
     }
     else{
       this.MultipleDelUserArr.push(item);
     }
     console.log(this.MultipleDelUserArr);
   }
   onDetails(item:bill){
     this._route.navigate(['menu/billdetails',item.bill_no]);
   }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllBill().subscribe(
      (data:bill[])=> {
      this.billarr=data;
      this.dataSource.data=this.billarr;
    }
    );
  }

}
