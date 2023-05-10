import { Component, OnInit } from '@angular/core';
import { category } from '../../classes/category';
import { CategoryService } from '../../services/category.service';
import { brand } from '../../classes/brand';
import { BrandService } from '../../services/brand.service';
import { ProductService } from '../../services/product.service';
import { product } from '../../classes/product';

@Component({
  selector: 'app-addproduc',
  templateUrl: './addproduc.component.html',
  styleUrls: ['./addproduc.component.css']
})
export class AddproducComponent implements OnInit {


  categories:category[]=[];
  brands:brand[]=[];
  qtyarr:number[]=[];
  prodarr:product[]=[];

   product_id:number;
   product_img:string;
   fk_cat_id:number;
   fk_brand_id:number;
   product_qty:number;
   product_size:string;
   product_color:string;
   product_price:number;
   fk_user_id:string;
   date:Date;
    strDate:string;
    today:Date;



   selectedFile:File=null;

  constructor(private _service:CategoryService,
              private _brandser:BrandService,
              private _proservice:ProductService) { }

  onAdd(){
    var fd=new FormData();

    fd.append('fk_cat_id',this.fk_cat_id.toString());
    fd.append('fk_brand_id',this.fk_brand_id.toString());
    fd.append('product_qty',this.product_qty.toString());
    fd.append('product_size',this.product_size);
    fd.append('product_color',this.product_color);
    fd.append('product_price',this.product_price.toString());
    fd.append('fk_user_id',this.fk_user_id);
    fd.append('product_img',this.selectedFile,this.selectedFile.name);
    this._proservice.addProduct(fd).subscribe(
        (data:any)=>{
          console.log(fd);
          this.prodarr.push(new product(this.product_id,'../../assets/'+this.product_img+'.jpg',this.fk_cat_id,this.fk_brand_id,this.product_qty,this.product_size,this.product_color,this.product_price,this.fk_user_id,this.date));
          alert("Added");
          console.log(data);
        }
     );
  }

  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }

  ngOnInit() {
    this.fk_user_id=localStorage.getItem('email_id');

    this._service.getAllCategory().subscribe(
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
