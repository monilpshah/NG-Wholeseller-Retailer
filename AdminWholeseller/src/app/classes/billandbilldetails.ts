
export class billndbilldetails{
  constructor(public bill_no:number,
              public bill_amt:number,
              public fk_user_id:string,
              public date:Date,
              public bill_id:number,
              public fk_bill_amt:number,
              public fk_product_id:number,
              public purchase_pro_qty:number,
              public fk_bill_no:number
              ){
  }
}
