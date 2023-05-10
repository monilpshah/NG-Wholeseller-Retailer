import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { user } from '../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userarr:user[];

  flag:boolean=true;

  cities:string[]=[
  'Ahmedabad',
  'Ghandhinagar',
  'Baroda',
  'Surat',
  'Rajkot',
  'Mumbai',
  'Delhi',
  'Other'
  ];
email_id:string;
password:string;
user_name:string;
mobile_no:string;
user_type:string;
address:string;
city:string;


  constructor(private _route:Router,
              private signup_ser:SignupService) { }

  ngOnInit() {
  }

  onBack(){
    this._route.navigate(['/login']);
  }

  onAdd(){
    console.log(this.city);
    this.signup_ser.addUser(new user(this.email_id,this.password,this.user_name,this.mobile_no,"Retailer",this.city,this.address)).subscribe(
      (data:any)=>{
        this.userarr.push(new user(this.email_id,this.password,this.user_name,this.mobile_no,"Retailer",this.city,this.address));
        
      }
    );
    alert("Sign up Successful. Please Login.");
    this._route.navigate(['/login']);
  }


}
