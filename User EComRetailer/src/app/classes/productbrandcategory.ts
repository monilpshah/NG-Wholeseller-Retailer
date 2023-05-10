export class tempproductcatbrand{
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
      public date:Date,
      public cat_id:number,
      public cat_name:string,
      public brand_id:number,
     public brand_name:string,
      public brand_logo:string
    ){}
  }
  