import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { billndbilldetails } from '../../classes/billandbilldetails';
import { BillService } from '../../services/bill.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent implements OnInit {

  billarr:billndbilldetails[]=[];

  flag:boolean=true;
  bill_no:number;
  bill_amt:number;
  fk_user_id:string;
  date:Date;
  product_qty:number;
  purchase_pro_qty:number;
  bill_id:number;
  fk_bill_no:number;
  id:number;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  dataSource = new MatTableDataSource();
  displaycolumns:string[]=['fk_user_id','purchase_pro_qty','bill_amt','date'];
  constructor(private _data:BillService,
              private _route:Router,
              private _acroute:ActivatedRoute) { }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


  ngOnInit() {
    this.id=this._acroute.snapshot.params['bill_no'];

    this.dataSource.paginator=this.paginator;
    this._data.getBillDetailsByBillNo(this.id).subscribe(
      (data:billndbilldetails[])=> {
      this.billarr=data;
      this.dataSource.data=this.billarr;
    }
    );
  }

}
