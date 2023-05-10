import { Component, OnInit } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { CategoryService } from '../services/category.service';
import { category } from '../classes/category';
import { user } from '../classes/user';
import { Router } from "@angular/router";
import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catarr:category[]=[];
  categoryarray:category[];
  dataSource = new MatTableDataSource();
  displaycolumns:string[]=['cat_name','Action'];
  flag:boolean;
  cat_name:string;
  cat_id:number;

  constructor(private _catservice:CategoryService,private _route:Router) { }

  ngOnInit() {
    this._catservice.getAllCategory().subscribe(
      (data:category[])=>{
        this.catarr=data;
        this.dataSource.data=this.catarr;
      }
    );
  }
  onUpdate(item:category){
    this._route.navigate(['menu/editcategory',item.cat_id]);
  }
  onDelete(item:category){
    this._catservice.deleteCategory(item).subscribe(
        (data:any)=>{
          this.catarr.splice(this.catarr.indexOf(item),1);

          this.dataSource.data=this.catarr;
      }
    );
  }

  onChangeCategory(){

  }

  addCategory(){
    this._catservice.addCategory(new category(this.cat_id,this.cat_name)).subscribe(
      (data:any)=>{
        this.catarr.push(new category(this.cat_id,this.cat_name));
        this.dataSource.data=this.catarr;
        this.flag=false;
      }
    );
  }

  onClickAdd(){
    if(this.flag){this.flag=false;}
    else{this.flag=true;}
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
