export class cart{
    constructor(public cart_id:number,
                public fk_user_id:string,
                public fk_product_id:number,
                public product_img:string,
                public product_name:string,
                public product_price:number,
                public product_qty:number){}
}