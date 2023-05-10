import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { SignupComponent } from '../signup/signup.component';
import { user } from '../classes/user';
import { Router } from '@angular/router';
import { EmailVerifyService } from '../services/email-verify.service';
import { UserserviceService } from '../services/userservice.service';
import { emailverify } from '../classes/emailverify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
flag:boolean=true;
email_id:string;
password:string;
user_type:string;
forget_pass:string;
subject:string="Kurtis point ";
usertype:string[]=[
  'Admin',
  'Wholsaler',
  'Retailer'
];
  constructor(private _service:LoginService,
              private _route:Router,
              private _email_ser:EmailVerifyService,
              private _user_ser:UserserviceService) { }

  ngOnInit() {
  }
onsign(){
  this._route.navigate(['/signup']);
}

onForgetPassword(){
  this._user_ser.getUserById(this.email_id).subscribe(
    (data:user[])=>{
      if(data.length > 0){
        this.forget_pass=data[0].password;
        this._email_ser.sendmail(new emailverify(this.email_id,this.subject,"Your Password is "+this.forget_pass)).subscribe(
          (data:emailverify[])=>{}
        );
        
        alert("Password is sent to your Email Id");
        
      }
      else{
       alert("Enter the Email_id");
      }
  
  });
}

onLogin(){
  this._service.login(new user(this.email_id,this.password,"","",this.user_type,"","")).subscribe(
    (data:user[])=>{
      if(data.length>0){
        this.user_type=data[0].user_type;
        //console.log(this.user_type);

        if(this.user_type=="Admin"){
        localStorage.setItem('email_id',this.email_id);
        this._route.navigate(['/menu']);
        } else if(this.user_type=="Wholesaler"){
          localStorage.setItem('email_id',this.email_id);
          this._route.navigate(['/wholesalerMenu']);
        } else if(this.user_type=="Retailer"){
          alert("Please Log in to the Retailer Applcation.")
        } else
        {
            alert("Please Enter Valid Name or Password");
        }
      }
      
    }
  );
}

}
