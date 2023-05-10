export class product{
    constructor(
      public product_id:number,
      public product_img:string,
      public fk_cat_id:number,
      public fk_brand_id:number,
      public product_qty:number,
      public product_size:string,
      public product_color:string,
      public product_price:number,
      public fk_user_id:string,
      public date?:Date
    ){}
  }
  