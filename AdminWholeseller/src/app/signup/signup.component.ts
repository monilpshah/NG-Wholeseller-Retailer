import { Component, OnInit } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { user } from '../classes/user';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userarr:user[];

  flag:boolean=true;
usertype:string[]=[
  'Wholsaller',
  'Retailer'
];
cities:string[]=[
  'Ahmedabad',
  'Ghandhinagar',
  'Baroda',
  'Surat',
  'Rajkot',
  'Mumbai',
  'Delhi'
];
email_id:string;
password:string;
user_name:string;
mobile_no:string;
user_type:string;
address:string;
city:string;

  constructor(private _data:UserserviceService,
              private _route:Router) { }

  onAdd(){
    console.log(this.city);
    this._data.addUser(new user(this.email_id,this.password,this.user_name,this.mobile_no,this.user_type,this.city,this.address)).subscribe(
      (data:any)=>{
        console.log(data);
        // this.userarr.push(new user(this.email_id,this.password,this.user_name,this.mobile_no,this.user_type,this.city,this.address));
        alert('added');
        this._route.navigate(['']);

      }
    );
  }

  ngOnInit() {
  }

}
