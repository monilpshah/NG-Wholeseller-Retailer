import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { product } from '../../classes/product';
import { category } from '../../classes/category';
import { brand } from '../../classes/brand';
import { BrandService } from '../../services/brand.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  categories:category[]=[];
  brands:brand[]=[];
  qtyarr:number[]=[];
  prodarr:product[]=[];
  flag:boolean;
  g:boolean;
  product_id:number;
  product_img:string;
  fk_cat_id:number;
  fk_brand_id:number;
  brand_name:string;
  brand_logo:string;
  product_qty:number;
  product_color:string;
  product_size:string;
  product_price:number;
  fk_user_id:string;
  date:Date;
  cat_id:number;
  cat_name:string;
  selectedFile:File=null;
  @ViewChild("mycanvas") mycanvas;
  id:number;

  constructor(private _route:Router,
              private _proservice:ProductService,
              private _actRoute:ActivatedRoute,
              private _brandser:BrandService,
              private _categoryser:CategoryService) { }

  onChange(value)
   {
      this.selectedFile=<File>value.target.files[0];
      if(this.selectedFile)
        {
                  this.flag=true;
         }

    }
    onSave(){

      const fd = new FormData();
    if(this.flag)
    {
      fd.append('product_id',this.product_id.toString());
    fd.append('product_img',this.selectedFile,this.selectedFile.name);
    fd.append('fk_cat_id',this.fk_cat_id.toString());
    fd.append('fk_brand_id',this.fk_brand_id.toString());
    fd.append('product_qty',this.product_qty.toString());
    fd.append('product_size',this.product_size);
    fd.append('product_color',this.product_color);
    fd.append('product_price',this.product_price.toString());
    fd.append('fk_user_id',this.fk_user_id);

      this._proservice.updateProduct_image(fd).subscribe(
        (data:any)=>
        {
          alert("update");
          console.log(data);
          this._route.navigate(['menu/product']);
        }
      );
    }
    else
    {
      this._proservice.updateProduct(new product(this.product_id,this.product_img,this.fk_cat_id,this.fk_brand_id,this.product_qty,this.product_size,this.product_color,this.product_price,this.fk_user_id)).subscribe(
        (data:any)=>{
          alert("Upadted");
          console.log(data);
          console.log(this.product_id);
        }
      );
      }
    }



    onClickChange(){
      if(this.g){this.g=false;}
      else{this.g=true;}
    }
    onback(){
      this._route.navigate(['menu/product']);
    }

  ngOnInit() {
    this.id=this._actRoute.snapshot.params['product_id'];

    this._proservice.getProductById(this.id).subscribe(
      (data:any)=>{
        this.product_id=data[0].product_id;
        this.product_img=data[0].product_img;
        this.fk_cat_id=data[0].fk_cat_id;
        this.fk_brand_id=data[0].fk_brand_id;
        this.product_qty=data[0].product_qty;
        this.product_size=data[0].product_size;
        this.product_color=data[0].product_color;
        this.product_price=data[0].product_price;
        this.fk_user_id=data[0].fk_user_id;
        //this.city=this.cities[0];
      }
    );

    this._categoryser.getAllCategory().subscribe(
      (data:category[])=>{
        this.categories=data;
      }
    );

    this._brandser.getAllBrand().subscribe(
      (data:brand[])=>{
        this.brands=data;
      }
    );

    for (let i = 0; i < 50; i++) {
      this.qtyarr.push(i+1);
    }


  }

}
