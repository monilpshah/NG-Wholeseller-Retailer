
export class billuser{
  constructor(public bill_no:number,
              public bill_amt:number,
              public fk_user_id:string,
              public date:Date,
              public email_id:string,
              public password:string,
              public user_name:string,
              public mobile_no:string,
              public user_type:string,
              public city:string,
              public address:string
              ){
  }
}
