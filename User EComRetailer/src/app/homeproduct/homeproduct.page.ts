import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { CategoryService } from '../services/category.service';
import { category } from '../classes/category';
import { brand } from '../classes/brand';

@Component({
  selector: 'app-homeproduct',
  templateUrl: './homeproduct.page.html',
  styleUrls: ['./homeproduct.page.scss'],
})
export class HomeproductPage implements OnInit {

  price:string;
  color:string;
  product_size:string;
  product_color:string;
  product_price:number;
  flag:boolean=false;
  j:number=0;
  topics:string[]=[];

  items:string[]=[];

  prices:string[]=["Below 499","500-999","1000-1999","2000 and above"];
  colors:string[]=["Black","Blue","Brown","Green","Gray","Red","Yellow","Pink",
                  "White","Orange","Multi color"];
  sizes:string[]=["XS","S","M","L","Xl","XXL","XXXL"];

  constructor(private _router:Router,
              private _proser:ProductService,
              private _cat_ser:CategoryService) { this.generateTopics(); }

  slideOpts={
    spaceBetween:10,
    centeredSlides:false,
    slidesPerView:1.6,
  }
  
  onAdd()
  {
  if(this.flag)
  {
    this.flag=false;
  }
  else
  {
    this.flag=true;
  }
  }
  
  ListProduct()
  {
    this._router.navigate(['/detailproduct']);
  }

  ToCart()  
  {
      this._router.navigate(['/cartpage']);
  }

  onShort()
  {
    this._router.navigate(['/shortkurti']);
  }

  onLong()
  {
    this._router.navigate(['/longkurti']); 
  }

  onAnarkali()
  {
    this._router.navigate(['/anarkalikurti']);
  }

  onSeller()
  {
    this._router.navigate(['/saller-location']);
  }
  onDiscount()
  {
    this._router.navigate(['/discountproduct']);
  }
  MoveSize()
  {
    this._router.navigate(['/size-page',this.product_size]);
  }
  
  MoveColor()
  {
    this._router.navigate(['/color-page',this.product_color]);
  }

  MovePrice()
  {
    this._router.navigate(['/price-page',this.product_price]);
  }
  sarr:product[]=[];
  larr:product[]=[];
  anarr:product[]=[];
  aarr:product[]=[];
  barr:product[]=[];
  carr:product[]=[];
  proarr:product[]=[];
  flag_search:boolean;
  search_cat_arr:category[]=[];

  onSelect(item:product){
    this._router.navigate(['/particlular-product',item.product_id])
  }
  onserch(){
    this._router.navigate(['/serchpage']);
  }

  onClickChange(){
    if(this.flag_search)
      {this.flag_search=false;}
    else
      {this.flag_search=true;}
  }

  onClick(search_item){
    console.log(search_item);
    localStorage.setItem('search_item',search_item);
    this._router.navigate(['/serchpage']);
  }

  generateTopics(){
    console.log(this.items);
     this.topics=this.items;   
  }

  getTopics(ev: any) {
    console.log(ev+"inside event");  
    this.generateTopics();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.topics = this.topics.filter((topic) => {
        return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }
brandarr:brand[]=[];
  ngOnInit() {

    this._cat_ser.getAllCategory().subscribe(
      (data:any)=>{
        this.search_cat_arr=data;

        for (let i = 0; i < this.search_cat_arr.length; i++) {
          this.items[i]=this.search_cat_arr[i].cat_name;  
        }
      }
    );
  
    this._proser.getAllBrands().subscribe(
      (data:any)=>{
        this.brandarr=data;
        for (let i =this.search_cat_arr.length;this.j< this.brandarr.length; i++) {
          this.items[i]=this.brandarr[this.j].brand_name; 
          this.j=this.j+1; 
        }
      }
    );

   this._proser.getAllProducts().subscribe(
     (data:any)=>{
       this.proarr=data;
     }
   );

    this._proser.getshortproduct().subscribe(
      (data:any)=>
    {
      this.sarr=data;
         for(let i=1;i<4;i++){
            //this.barr[i]=this.sarr[i];
            this.aarr.push(this.sarr[i]);
        }
      }
     );
     this._proser.getlongproduct().subscribe(
      (data:any)=>
    {
      this.larr=data;
         for(let i=1;i<4;i++){
            //this.barr[i]=this.sarr[i];
            this.barr.push(this.larr[i]);
        }
      }
     );
     this._proser.getanarkaliproduct().subscribe(
      (data:any)=>
    {
      this.anarr=data;
      console.log("ho");
         for(let i=1;i<4;i++){
           console.log(i);
            //this.barr[i]=this.sarr[i];
            this.carr.push(this.anarr[i]);
        }
      }
     );
  }
  onColor(){
    
  }
   

}
