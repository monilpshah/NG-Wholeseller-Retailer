import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { user } from '../classes/user';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { EmailVerifyService } from '../services/email-verify.service';
import { emailverify } from '../classes/emailverify';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

flag:boolean=true;
email_id:string;
password:string;
user_type:string;
city:string;

forget_pass:string;
subject:string="Kurtis point ";

usertype:string[]=[
  'Admin',
  'Wholsaler',
  'Retailer'
];

  constructor(private _service:LoginService,
              private _route:Router,
              private _user_ser:SignupService,
              private _email_ser:EmailVerifyService) { }

  ngOnInit() {
  }

  onSign(){
    this._route.navigate(['/signup']);
  }

  forget_msg:string;
  email_flag:boolean=false;

  onForgetPassword(){
    this._user_ser.getUserById(this.email_id).subscribe(
      (data:user[])=>{
        if(data.length > 0){
          this.forget_pass=data[0].password;
          this._email_ser.sendmail(new emailverify(this.email_id,this.subject,"Your Password is "+this.forget_pass)).subscribe(
            (data:emailverify[])=>{}
          );
          
          this.email_flag=true;
          this.forget_msg="Password is sent to your email id";

          
        }
        else{
         alert("Enter the Email_id");
        }
    
    });
  }
  
wrong_user_pass:boolean=false;
wrong_msg:string;

  onLogin(){
    this._service.login(new user(this.email_id,this.password,"","",this.user_type,this.city,"")).subscribe(
      (data:user[])=>{
        if(data.length>0){
          this.user_type=data[0].user_type;
          this.city=data[0].city;
          if(this.user_type=="Retailer"){
            console.log(this.city);
            localStorage.setItem('city',this.city);
            localStorage.setItem('email_id',this.email_id);
           // this._route.navigate(['/RetailerMenu']);
           console.log("suceesfully");
           this._route.navigate(['/homeproduct']);
          } else {
            alert("Only Retailers are allowed to login into the application. Please login in to Web Application.");
          }
        
        }
        else
        {
          this.wrong_user_pass=true;
          this.wrong_msg="Email Id or password is incorrect";
        }
      }
    );
  }
  
}
