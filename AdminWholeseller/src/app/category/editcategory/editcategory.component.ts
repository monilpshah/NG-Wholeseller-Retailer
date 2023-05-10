import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { category } from '../../classes/category';


@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  cat_id:number;
  cat_name:string;
  id:number;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _ser:CategoryService) { }

  ngOnInit() {

    this.id=this._acroute.snapshot.params['cat_id'];
    this._ser.getCatById(this.id).subscribe(
        (data:any)=>{
          this.cat_id=data[0].cat_id;
          this.cat_name=data[0].cat_name;
        }
    );

  }
onSave(){
  this._ser.updateCategory(new category(this.cat_id,this.cat_name)).subscribe(
    (data:any)=>{
      this._route.navigate(['/category']);
    }
  );
}
}
