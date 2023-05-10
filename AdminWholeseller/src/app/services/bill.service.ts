import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill } from '../classes/bill';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  private billInfo:string="http://localhost:3000/bill/";
  private billdetailsInfo:string="http://localhost:3000/billdetailsbyid/";
  private whilesalerbill:string="http://localhost:3000/getcomofwhol/";
  constructor(private _http:HttpClient) { }

  getAllBill(){
    return this._http.get(this.billInfo);
  }

  getAllWholCommission(){
    return this._http.get(this.whilesalerbill);
  }

  getBillDetailsByBillNo(bill_no){
    return this._http.get(this.billdetailsInfo+bill_no);
  }
}
