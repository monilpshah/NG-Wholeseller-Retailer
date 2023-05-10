import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { user } from '../classes/user';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  userarr:user[]=[];
  MultipleDelUserArr:user[]=[];


  dataSource = new MatTableDataSource();
  displaycolumns:string[]=['select','email_id','user_name','mobile_no','user_type','city','address','Action'];

  flag:boolean=true;

email_id:string;
password:string;
user_name:string;
mobile_no:string;
user_type:string;
address:string;
city:string;

@ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private _data:UserserviceService,
              private _route:Router) { }


onDelete(item:user){
  alert("click");
  this._data.deleteUser(item).subscribe(
    (data:any)=>{
      this.userarr.splice(this.userarr.indexOf(item),1);

      this.dataSource.data=this.userarr;
    }
  );
}

onChange(item:user){
   if(this.MultipleDelUserArr.find(x=>x==item)){
    this.MultipleDelUserArr.splice(this.MultipleDelUserArr.indexOf(item),1);
  }
  else{
    this.MultipleDelUserArr.push(item);
  }
  console.log(this.MultipleDelUserArr);
}


onDeleteAll(){
  this._data.deleteMultipleUsers(this.MultipleDelUserArr).subscribe(
    (x:any)=>{
      for (let i = 0; i < this.MultipleDelUserArr.length; i++) {
        if(this.userarr.find(x=>x==this.MultipleDelUserArr[i])){
          this.userarr.splice(this.userarr.indexOf(this.MultipleDelUserArr[i],1));
        }
      }
      this.dataSource.data=this.userarr;
    });

}

onUpdate(item:user){
  this._route.navigate(['/editprofile',item.email_id]);
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    console.log("called");
    this.dataSource.paginator=this.paginator;
    this._data.getAllUser().subscribe(
      (data:user[])=> {
      this.userarr=data;
      this.dataSource.data=this.userarr;
    }
    );

  }

}
