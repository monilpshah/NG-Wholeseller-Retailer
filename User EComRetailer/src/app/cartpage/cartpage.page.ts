import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Router } from '@angular/router';
import { cart } from '../classes/cart';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { bill } from '../classes/bill';
import { BilldetailsService } from '../services/billdetails.service';
import { billdetail } from '../classes/billdetails';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.page.html',
  styleUrls: ['./cartpage.page.scss'],
})
export class CartpagePage implements OnInit {

  user_id: string = "";
  product_id: number = 0;
  cart_items: cart[] = [];
  qtys: number[] = [];
  qty: number = 1;
  arrbill: bill[] = [];
  arrbilldetail: billdetail[] = [];
  constructor(private _cart_ser: CartServiceService,
    private _route: Router,
    private _pro_ser: ProductService,
    private _billdetails_ser: BilldetailsService) { }

  onCheckOut() {

    this.user_id = localStorage.getItem('email_id') + "";

    this._cart_ser.addbill(new bill(this.stotal, this.user_id)).subscribe(
      (data: any) => {
        this.arrbill = data;

        for (let i = 0; i < this.cart_items.length; i++) {
          this.arrbilldetail.push(new billdetail(this.pricearr[i], this.cart_items[i].fk_product_id, this.qtys[i], data.insertId));
        }
        this._billdetails_ser.addbilldetail(this.arrbilldetail).subscribe(
          (data: any) => {

            this.cart_items.splice(0, this.cart_items.length);
            this.pricearr.splice(0, this.pricearr.length);
            this.qtys.splice(0, this.qtys.length);
            this.stotal = 0;
          }
        );
      }
    );
    console.log(this.cart_items);
    this._cart_ser.deleteMultiplecarts(this.cart_items).subscribe(
      (x: any) => {
        console.log("delete");
        console.log(x);
      });

    this._route.navigate(['/homeproduct']);
  }

  onDelete(item: cart) {
    alert("click");
    this._cart_ser.deleteProduct(item).subscribe(
      (data: any) => {
        this.cart_items.splice(this.cart_items.indexOf(item), 1);
      }
    );

  }
  ondel() {

  }
  total: number = 0;
  pricearr: number[] = [];
  arrqty: number[] = [];
  stotal: number = 0;
  upgredebill(item : any, i : any) {
    this.total -= this.pricearr[i];
    console.log(this.arrqty[i]);
    this.pricearr[i] = this.arrqty[i] * item.product_price;
    this.stotal += this.pricearr[i];
  }
  onBack() {
    this._route.navigate(['/homeproduct']);
  }
  i: number = 0;
  arr_flag: boolean = false;
  arr_msg: string = "";
  ngOnInit() {
    console.log("fii")
    this.user_id = localStorage.getItem('email_id') + "";

    this._cart_ser.getItemByUserId(this.user_id).subscribe(
      (data: any ) => {
        // this.total+=data[0].product_price;
        this.cart_items = data;
      }
    );
    // this.qtys.push(1);
    // console.log(this.total);
    for (let i = 0; i <= 50; i++) {
      this.qtys.push(i + 1);
    }


  }

}
