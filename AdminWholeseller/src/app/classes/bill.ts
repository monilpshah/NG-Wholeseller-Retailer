
export class bill{
  constructor(public bill_no:number,
              public bill_amt:number,
              public fk_user_id:string,
              public date:Date){
  }
}
